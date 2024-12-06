'use client';

import MainMenu from "../AnimatedMenu/MainMenu";

// const menu: String[] = ["our showcase", "menu",];
const Navbar: React.FC = () => {
  return (
    <nav className='nav'>
        <p className='logo'>lumen</p>
        <div className="navRight">
        {/* {menu.map((item, index)=>(
            <a key={index} className='navLink'>{item}</a>
        ))}
        <i className="ri-menu-line text-xl pt-1 cursor-pointer"></i> */}
        <MainMenu />
        </div>
    </nav>
  )
}

export default Navbar
