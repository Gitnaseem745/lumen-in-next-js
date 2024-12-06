'use client';
import { useEffect } from 'react';
import { project, section } from '../../data/lumenContent';
import Card from './Card';
import Button from '../Button/Button';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import AnimCard from './animCard';

gsap.registerPlugin(ScrollTrigger);

const Featured: React.FC = () => {

  return (
    <section className='py-[10vw] px-[15vw]'>
      <div className='gsapContainer'>
        <h1 className='text-2xl max-sm:text-[16px]'>{section.featured.title}</h1>
        <h1 className='featuredTitle w-[50%] max-sm:w-full max-sm:text-3xl'>{section.featured.description}</h1>
      </div>
      <div className="pb-[5vw] max-sm:pt-[20vw] flex flex-col max-sm:gap-20">
        {project.map((project, i) => (
          <div key={i} className="featuredCard" data-marker-content={`card-content-${i}`}>
            <Card theme={project.theme} name={project.name} tag={project.tags} img={project.img} />
          </div>
        ))}
      </div>
      <Button btnText="view all projects" />
    </section>
  );
};

export default Featured;
