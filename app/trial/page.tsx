'use client';
import { insImgOne, insImgTwo, insImgThree } from '@/public';
import React, { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import AnimCard from '@/components/Featured/animCard';

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
    // useEffect(() => {

    //     const imgs = document.querySelectorAll('.img');

    //     // Pinning the container
    //     ScrollTrigger.create({
    //         trigger: '.imgContainer',
    //         pin: true,
    //         start: 'top top',
    //         end: '+=300%', // Adjust as needed for the duration of the pin
    //         markers: true,
    //     });

    //     // Animating images one by one
    //     const tl = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: '.imgContainer',
    //             start: 'top top',
    //             end: '+=300%', // Sync with pin duration
    //             scrub: true,
    //             markers: true,
    //         },
    //     });

    //     imgs.forEach((img, index) => {
    //         tl.fromTo(
    //             img,
    //             { y: '100%', opacity: 0, filter: 'blur(10px)', zIndex: index },
    //             { y: '0%', opacity: 1, filter: 'blur(0px)', duration: 1 }
    //         )
    //           .to(img, { opacity: 0, duration: 0.5 }, '+=0.5'); // Optional fade-out
    //     });

    //     return () => {
    //         ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    //     };
    // }, []);

    // return (
    //     <div className="w-full min-h-screen flex justify-center items-center flex-col p-32">
    //         <div className="container h-[300vh]">
    //             <div className="imgContainer w-[500px] h-[300px] overflow-hidden relative">
    //                 <img src={insImgOne} alt="Image One" className="absolute size-full z-10 object-cover img" />
    //                 <img src={insImgTwo} alt="Image Two" className="absolute size-full z-20 object-cover img" />
    //                 <img src={insImgThree} alt="Image Three" className="absolute size-full z-30 object-cover img" />
    //             </div>
    //         </div>
    //     </div>
    // );
    return (
        <AnimCard />
    )
};

export default Page;
