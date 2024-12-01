'use client';
import { inspiration, section } from '../../data/lumenContent'
import Button from '../Button/Button'
import Card from './Card'

const Inspire: React.FC = () => {
  return (
    <section className='py-[10vw] px-[15vw]'>
            <div className='flex gap-10 flex-col'>
            <h1 className='featuredTitle w-[40%] max-sm:w-full'>{section.inspiration.title}</h1>
            {/* <h1 className='sectionDes'>{section.inspiration.description}</h1> */}
            </div>
            <div className="resourceCardContainer">
            {inspiration.map((inspire, i)=>(
            <Card img={inspire.img} key={i} tag={inspire.tag} name={inspire.name} />
        ))}
        </div>
        <Button btnText="see all inspirations" />
    </section>
  )
}

export default Inspire
