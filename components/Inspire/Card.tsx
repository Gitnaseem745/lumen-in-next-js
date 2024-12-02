'use client';
import Image from 'next/image';
import { CardProps } from '../../interfaces/interfaces';
import Link from 'next/link';
const Card: React.FC<CardProps> = ({img, tag, name}) => {
  return (
    <div className='flex flex-col gap-4'>
        <Link  href={`/category/${tag.replaceAll(' ', '-')}`} className='inspireTag'>
            <Image src={img} width={200} height={100} alt={img} className='inspireImg'/>
        </Link>
    <div className="flex flex-row">
    <i className="inspireIcon  ri-building-line"></i>
    <Link  href={`/category/${tag.replaceAll(' ', '-')}`} className='inspireTag'>{tag}</Link>
    </div>
    <h1 className='inspireH1'>{name}</h1>
    </div>
  )
}

export default Card
