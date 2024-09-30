import React from 'react'
import { FaBars } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import { GoBellFill } from "react-icons/go";

const DashboardNav = ({ isMobile,
    isSidebarOpen,
    setIsSidebarOpen
}) => {
    return (
        <nav className={`flex bg-white px-4  justify-between items-center`}>
            <div className='text-xl'>
                <FaBars className='font-semibold cursor-pointer'
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                />
            </div>
            <div className='flex items-center gap-4'>
                <div className='hidden md:flex gap-4 border-[1px] border-black rounded-lg py-2 pl-2 pr-6 justify-between items-center'>
                    <BsSearch className='text-[#3D73AF] font-bold text-xl' />
                    <input
                        className='outline-none text-lg'
                        type="text"
                        placeholder='Search client by name'
                    />
                </div>
                <div className='flex items-center gap-2'>
                    <GoBellFill className='text-xl text-[#3D73AF] m-2 font-bold' />
                    <img
                        src="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQyfHxtZW4lMjBmYWNlJTIwaW50ZXJ2aWV3fGVufDB8fDB8fHww"
                        className='w-8 h-8 rounded-lg'
                        alt=""
                    />
                    <div className='hidden sm:flex flex-col mr-2 md:mr-8'>
                        <span>Caroline</span>
                        <span>Bing</span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default DashboardNav;
