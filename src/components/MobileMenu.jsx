import React, { useState } from 'react';
import { TiThMenu } from "react-icons/ti";
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from './Button';

const MobileMenu = ({ menuItems, active, setActive }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className='md:hidden'>
            <button
                className='p-4 text-2xl transition-transform duration-300 ease-in-out'
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <FaTimes className='transition-transform duration-300 ease-in-out' /> : <TiThMenu className='transition-transform duration-300 ease-in-out' />}
            </button>
            <div className={`absolute left-0 w-full h-max transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className='p-4 bg-black text-white opacity-[93%] flex flex-col items-start justify-center'>
                    {menuItems.map(item => (
                        <Link
                            key={item.id}
                            to={item.path}
                            onClick={() => {
                                setActive(item.id)
                                setIsOpen(false)
                            }}
                            className={`${active === item.id ? "text-indigo-800" : ""} text - lg py-2`}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Button
                        className={"border-[1.8px] border-indigo-800 rounded-full py-2 px-4 mt-4 text-indigo-800 font-semibold hover:text-indigo-950 hover:border-indigo-950"}
                        label="Contact Us"
                    />
                </div>
            </div>
        </div>
    )
}

export default MobileMenu;
