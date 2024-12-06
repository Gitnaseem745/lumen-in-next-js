import { MenuButtonProps, PerspectiveTextProps } from '@/interfaces/interfaces';
import { motion } from 'framer-motion';


export default function MenuButton({ isActive, toggleMenu, textColor, bgColor }: MenuButtonProps) {
  return (
    <div className={`absolute top-0 right-0 w-[100px] max-sm:w-[80px]  h-[40px] ${bgColor ? 'border-[1px] border-white': ''} cursor-pointer rounded-[25px] overflow-hidden`}>
        <motion.div
            className="relative w-full h-full"
            animate={{ top: isActive ? "-100%" : "0%" }}
            transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
        >
            <div
                className={`w-full h-full ${bgColor ? 'bg-black' : 'bg-black'} flex justify-center items-center`}
                onClick={() => { toggleMenu() }}
            >
                <PerspectiveText label="Menu" textColor={true} />
            </div>
            <div
                className={`w-full h-full  flex justify-center items-center  ${!bgColor ? 'bg-white' : 'bg-black'}`}
                onClick={() => { toggleMenu() }}
            >
                <PerspectiveText label="Close" textColor={textColor} />
            </div>
        </motion.div>
    </div>
  )
}

function PerspectiveText({ label, textColor, bgColor } : PerspectiveTextProps) {
    return (
        <div className="flex flex-col justify-center items-center w-full h-full transform-style[preserve-3d] transition-transform duration-[0.75s] ease-[cubic-bezier(0.76, 0, 0.24, 1)]">
            <p className={`${(!bgColor && !textColor) ? 'text-black' : bgColor && !textColor ? 'text-black' : 'text-white'} transition-all duration-[0.75s] ease-[cubic-bezier(0.76, 0, 0.24, 1)]`}>{label}</p>
            <p className="absolute transform-origin-bottom-center transform rotate-x-[-90deg] translate-y-[9px] opacity-0 transition-opacity duration-[0.75s] ease-[cubic-bezier(0.76, 0, 0.24, 1)]">{label}</p>
        </div>
    )
}
