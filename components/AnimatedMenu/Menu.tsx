import { motion } from 'framer-motion';
import { links, footerLinks } from '../../data/menuData';
import { perspective, slideIn } from "../../animations/anim";
import { MenuProps } from '@/interfaces/interfaces';

export default function Menu({ textColor } : MenuProps) {
  return (
    <div className="flex flex-col justify-between h-full box-border pt-[100px] px-[40px] pb-[50px]">
       <div className="flex flex-col gap-[10px]">
        {
            links.map((link, i) => {
                const { title, href } = link;
                return (
                    <div key={`b_${i}`} className="perspective-[120px] [perspective-origin:bottom]">
                        <motion.div
                          custom={i}
                          variants={perspective}
                          initial="initial"
                          animate="enter"
                          exit="exit"
                        >
                            <a className={`no-underline ${textColor ? 'text-black' : 'text-white'} text-[46px] max-sm:text-[40px] transition-all duration-200 ease-in-out hover:font-semibold`}>
                                {title}
                            </a>
                        </motion.div>
                    </div>
                )
            })
        }
       </div>
       <motion.div className="flex flex-wrap">
            {
                footerLinks.map((link, i) => {
                    const { title, href } = link;
                    return (
                        <motion.a
                            variants={slideIn}
                            custom={i}
                            initial="initial"
                            animate="enter"
                            exit="exit"
                            key={`f_${i}`}
                            className={`w-[50%] mt-[5px] ${textColor ? 'text-black' : 'text-white'}`}
                        >
                            {title}
                        </motion.a>
                    )
                })
            }
       </motion.div>
    </div>
  )
}
