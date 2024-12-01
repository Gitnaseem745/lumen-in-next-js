'use client';
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import { useState } from 'react';
import { insImgThree } from '../../public/inspire_imgs/index.js';
import { resImgThree, resImgTwo } from '../../public/resource_imgs/index.js';
const HomeSection: React.FC = () => {
    const [bgImage, setBgImage] = useState<string | "">("");
    const handleMouseEnter = (word: string) => {
        setBgImage(word=="Capture" ? insImgThree : word=="Moments" ? resImgTwo : word=="Light" ? resImgThree : "");
    };

    const handleMouseLeave = () => {
      setBgImage('');
    };

  return (
    <section className='home' style={{ backgroundImage: `url(${bgImage})`}}>
    <Navbar />
    <Hero handleMouseLeave={handleMouseLeave} handleMouseEnter={handleMouseEnter}/>
    </section>
  )
}

export default HomeSection
