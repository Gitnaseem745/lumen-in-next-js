'use client';
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import Menu from '../AnimatedMenu/Menu';
import MenuButton from '../AnimatedMenu/MenuButton';
import { MenuProps } from '@/interfaces/interfaces';

const menu = {
    open: {
        width: window.innerWidth < 768 ? "320px" : "480px",
        height: "650px",
        top: "-25px",
        right: window.innerWidth < 768 ? "-6px" : "-25px",
        transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1]}
    },
    closed: {
        width: window.innerWidth < 768 ? "80px" : "100px",
        height: "40px",
        top: "0px",
        right: "0px",
        transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1]}
    }
}

export default function MainMenu({ bgColor, textColor } : MenuProps) {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className={`fixed right-[50px] max-sm:right-[20px] top-[50px] z-[1000]`}>
            <motion.div
                className={`relative rounded-[25px] w-[480px] h-[650px] ${bgColor ? 'bg-white' : 'bg-black'}`}
                variants={menu}
                animate={isActive ? "open" : "closed"}
                initial="closed"
            >
                <AnimatePresence>
                    {isActive && <Menu textColor={textColor} />}
                </AnimatePresence>
            </motion.div>
            <MenuButton isActive={isActive} toggleMenu={() => {setIsActive(!isActive)}} textColor={textColor} bgColor={bgColor}/>
        </div>
    )
}
