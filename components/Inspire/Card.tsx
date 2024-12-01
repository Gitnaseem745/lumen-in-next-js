'use client';
import CardProps from "@/interfaces/CardProps";

const Card: React.FC<CardProps> = ({img, tag, name}) => {
  return (
    <div className='flex flex-col gap-4'>
    <img src={img} className='inspireImg'/>
    <div className="flex flex-row">
    <i className="inspireIcon  ri-building-line"></i>
    <p className='inspireTag'>{tag}</p>
    </div>
    <h1 className='inspireH1'>{name}</h1>
    </div>
  )
}

export default Card
