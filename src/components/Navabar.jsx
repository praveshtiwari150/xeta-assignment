import React, { useState } from 'react'
import fitsnapLogo from "../assets/fitsnapLogo.svg"
import NavMenu from './NavMenu'
import Button from './Button'
import MobileMenu from './MobileMenu'

const Navabar = () => {
    const menuItems = [
        {
            id: 1,
            name: "Home",
            path: "/"
        },
        {
            id: 2,
            name: "Dashboard",
            path: "/dashboard"
        },
        {
            id: 3,
            name: "About",
            path: "/about"
        },
        {
            id: 4,
            name: "Review",
            path: "/review"
        },
        {
            id: 5,
            name: "Features",
            path: "/features"
        }
    ]

    const [active, setActive] = useState(1);
    return (
        <nav className='absolute flex justify-between items-center top-0 left-0 w-full h-20 z-10 pt-4 pb-4 bg-white bg-opacity-[33%]'>
            <img
                className='ml-2'
                src={fitsnapLogo}
                alt="Logo"
            />
            <div className='hidden md:flex'>
                <NavMenu menuItems={menuItems} active={active} setActive={setActive} />
            </div>
            <div className='hidden md:block'>
                <Button
                    className={"border-[1.8px] border-indigo-800 rounded-full py-2 px-4 mr-8 text-indigo-800 font-semibold hover:text-indigo-950 hover:border-indigo-950"}
                    label="Contact Us"
                />
            </div>
            <MobileMenu menuItems={menuItems} active={active} setActive={setActive} />
        </nav>
    )
}

export default Navabar
