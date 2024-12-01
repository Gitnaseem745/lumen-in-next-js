'use client';
import { section } from '../../data/lumenContent.js';

interface HeroProps {
    handleMouseEnter: (word: string) => void;
    handleMouseLeave: any;
}
const words: string[] = ["Capture", "Moments", "Light"];
const Hero: React.FC<HeroProps> = ({ handleMouseEnter, handleMouseLeave }) => (
    <section className='w-full'>
        <div className='p-[15vw] w-full'>
            <h1 className='heroTitle'>{section.home.title}</h1>
            <div className="flex gap-x-9 max-sm:flex-col max-sm:gap-y-4 max-sm:mt-10">
                {words.map((word, i) => (
                    <h1 className='outLined stroke' key={i} onMouseEnter={() => handleMouseEnter(word)}
                        onMouseLeave={handleMouseLeave} > {word} </h1>
                ))}
            </div>
        </div>
        <div className="px-[15vw] py-[5vw]">
            <p className='sectionDes'>{section.home.description}</p>
        </div>
    </section>
  );

export default Hero;
