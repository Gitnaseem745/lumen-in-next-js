'use client';

import { insImgOne, insImgThree, insImgTwo } from '@/public';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect, useRef } from 'react';

interface ContentMarker extends HTMLElement {
  next?: ContentMarker;
  previous?: ContentMarker;
  content?: HTMLElement | null;
}

const AnimCard: React.FC = () => {
  const contentContainerRef = useRef<HTMLDivElement | null>(null);
  const contentMarkersRef = useRef<ContentMarker[]>([]);

  useEffect(() => {
    console.clear();
    gsap.defaults({ overwrite: 'auto' });

    const contentMarkers = contentMarkersRef.current;

    let direction: 'up' | 'down' = 'down';

    // Set up our scroll trigger
    const ST = ScrollTrigger.create({
      trigger: contentContainerRef.current,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        direction = self.direction === -1 ? 'up' : 'down';
        getCurrentSection();
      },
      pin: '.left-content',
    });

    // Set up our content behaviors
    contentMarkers.forEach((marker, index) => {
      marker.next = contentMarkers[index + 1];
      if (marker.next) {
        marker.next.content = document.querySelector(`#${marker.next.dataset.markerContent}`);
      }
      marker.previous = contentMarkers[index - 1];
      if (marker.previous) {
        marker.previous.content = document.querySelector(`#${marker.previous.dataset.markerContent}`);
      }

      marker.content = document.querySelector(`#${marker.dataset.markerContent}`);

      gsap.set(marker.content, { transformOrigin: 'center' });

      marker.content.enter = function () {
        gsap.fromTo(marker.content, { autoAlpha: 0, rotateY: -30 }, { duration: 0.3, autoAlpha: 1, rotateY: 0 });
      };

      marker.content.leave = function () {
        gsap.to(marker.content, { duration: 0.1, autoAlpha: 0 });
      };
    });

    // Handle the updated position
    let lastContent: HTMLElement | null = null;

    function getCurrentSection() {
      let newContent: HTMLElement | null = null;
      let nextContent: HTMLElement | null = null;

      const currScroll = direction === 'down' ? window.scrollY - window.innerHeight + 1 : window.scrollY;

      // Find the current section
      contentMarkers.forEach(marker => {
        if (currScroll > marker.offsetTop) {
          newContent = marker.content;

          nextContent = direction === 'down' ? marker.next ? marker.next.content : marker.content : marker.previous ? marker.previous.content : marker.content;
        }
      });

      // If the current section is different than the last, animate in
      if (newContent && (lastContent == null || !newContent.isSameNode(lastContent)) && (!nextContent || !nextContent.isSameNode(lastContent))) {
        if (lastContent) {
          lastContent.leave();
        }
        newContent.enter();
        lastContent = newContent;
      }
    }

    const media = window.matchMedia('screen and (max-width: 600px)');
    ScrollTrigger.addEventListener('refreshInit', checkSTState);
    checkSTState();

    function checkSTState() {
      if (media.matches) {
        ST.disable();
      } else {
        ST.enable();
      }
    }

    // Cleanup ScrollTrigger on component unmount
    return () => {
      ST.kill();
      ScrollTrigger.removeEventListener('refreshInit', checkSTState);
    };
  }, []);

  return (
    <>
      <div className="header-section ">
        Scroll down to see the different pinned content shown
      </div>
      <div className="content-container" ref={contentContainerRef}>
        <div className="row no-gutters">
          <div className="col-md-6">
            <div className="right-content">
              {['img1', 'img2', 'img3', 'img4', 'img5'].map((id, index) => (
                <div key={id} className="contentMarker px-5" data-marker-content={id}>
                  <h1>Section {index}</h1>
                  <p>
                    if you pet it i will tear up your hand, but chase ball of string. Poop on couch hate dog, yet mouse and catch eat throw up catch eat throw up bad birds curl into a furry donut. Bite nose of your human you have cat to be kitten me right meow kitty poochy put toy mouse in food bowl run out of litter box at full speed, for stand with legs in litter box, but poop outside. Eat all the power cords. X poop in the plant pot.
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-5 ml-auto">
            <div className="left-content">
            <img className="imageToShow" src={insImgOne} />
            <img className="imageToShow" src={insImgTwo} />
            <img className="imageToShow" src={insImgThree} />
            <img className="imageToShow" src={insImgThree} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimCard;
