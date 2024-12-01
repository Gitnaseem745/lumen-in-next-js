'use client';
import ButtonProps from "@/interfaces/ButtonProps";

const Button: React.FC<ButtonProps> = ({btnText}) => {
  return (
    <div className='flex justify-center items-center'>
    <button className='btnStyle'>{btnText}</button>
    </div>
  )
}

export default Button
