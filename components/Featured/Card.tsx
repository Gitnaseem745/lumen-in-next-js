'use client';
import { CardProps } from '../../interfaces/interfaces';

interface ExtendedProps extends CardProps {
        theme?: string;
}
const Card: React.FC<ExtendedProps> = ({theme, name, tag, img}) => {
  return (
    <div className="featuredCard">
        <div className="featuredText">
            <div className='featuredTextDiv'>
            <p className='text-xl max-sm:text-sm'>{theme}</p>
            <h1 className='featuredH1'>{name}</h1>
            <h1 className='font-bold opacity-50 max-sm:text-xs'>{tag}</h1>
            </div>
        </div>
        <div className="featuredImg">
            <div className='w-[90%] h-[90%]'>
            <img src={img} className='w-full h-full object-cover'/>
            </div>
        </div>
    </div>
  )
}

export default Card
