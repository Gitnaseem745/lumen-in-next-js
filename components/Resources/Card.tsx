'use client';
import Image from 'next/image';
import { CardProps } from '../../interfaces/interfaces';
import Link from 'next/link';

const Card: React.FC<CardProps> = ({img, tag, name}) => {
  return (
    <div className='flex flex-col gap-4'>
    <Image src={img} width={200} height={100} alt={img} className='resourceImg'/>
    <p className='resourceTag'>{tag}</p>
    <h1 className='resourceH1'>
    <Link  href={`/blog/${name.toLowerCase().replaceAll(' ', '-')}`} className='inspireTag'>{name}</Link></h1>
    </div>
  )
}

export default Card
