'use client';
import { project, section } from '../../data/lumenContent';
import Card from './Card';
import Button from '../Button/Button';

const Featured: React.FC = () => {
  return (
    <section  className='py-[10vw] px-[15vw]'>
        <div className='gsapContainer'>
            <h1 className='text-2xl max-sm:text-[16px]'>{section.featured.title}</h1>
            <h1 className='featuredTitle w-[50%] max-sm:w-full max-sm:text-3xl'>{section.featured.description}</h1>
        </div>
        <div className="pb-[5vw] max-sm:pt-[20vw] flex flex-col max-sm:gap-20">
        {project.map((project, i)=>(
            <Card key={i} theme={project.theme} name={project.name} tag={project.tags} img={project.img} />
        ))}
        </div>
        <Button btnText="view all projects" />
    </section>
  )
}

export default Featured
