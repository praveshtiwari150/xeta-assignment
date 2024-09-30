import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { IoMdPerson } from "react-icons/io";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaClipboardList, FaRegCalendarCheck } from "react-icons/fa";
import { LuCalendarX } from "react-icons/lu";
import { MdMessage } from "react-icons/md";
import { GiKnifeFork } from "react-icons/gi";
import { IoIosSettings } from "react-icons/io";
import { MdClose } from "react-icons/md";

const Sidebar = ({ isMobile, isSidebarOpen, setIsSidebarOpen }) => {
    const sidebarItems = [
        {
            id: 1,
            label: 'Dashboard',
            path: '/dashboard',
            icon: <TbLayoutDashboardFilled />
        },
        {
            id: 2,
            label: 'My Profile',
            path: '/profile',
            icon: <IoMdPerson />
        },
        {
            id: 3,
            label: 'My Client',
            path: '/client',
            icon: <BsFillPeopleFill />
        },
        {
            id: 4,
            label: 'Report',
            path: '/report',
            icon: <FaClipboardList />
        },
        {
            id: 5,
            label: 'My Diet Plans',
            path: '/diet-plans',
            icon: <FaRegCalendarCheck />
        },
        {
            id: 6,
            label: 'Create Diet Plan',
            path: '/create-diet',
            icon: <LuCalendarX />
        },
        {
            id: 7,
            label: 'Chat',
            path: '/chat',
            icon: <MdMessage />
        },
        {
            id: 8,
            label: 'Search Food',
            path: '/search-food',
            icon: <GiKnifeFork />
        },
        {
            id: 9,
            label: 'Settings',
            path: '/settings',
            icon: <IoIosSettings />
        }
    ]

    const [active, setActive] = useState(1);
    return (
        <div className={`w-64  ${isSidebarOpen ? 'flex' : 'hidden'} ${isMobile ? 'absolute z-20 top-0 left-0 min-h-screen' : 'relative'} flex-col  gap-6 justify-start items-start p-4 bg-white font-inter min-h-screen`}>
            <div className={`${isMobile ? 'block' : 'hidden'} ml-auto`}>
                <MdClose
                    onClick={() => setIsSidebarOpen(false)}
                    className='text-2xl text-gray-700 hover:text-orange-600'

                />
            </div>
            <div className='bg-sunset w-52 h-10 py-1 flex justify-center items-center rounded-lg text-2xl font-medium text-white'>
                Dietsnap
            </div>
            <div>
                <button className='bg-sunset w-52 h-10 flex justify-center items-center rounded-lg text-lg text-white capitalize hover:bg-orange-600'>+ Add new entry</button>
            </div>
            <div className='h-full flex flex-col justify-start gap-1'>
                {sidebarItems.map(item => (
                    <Link
                        to={'/dashboard'}
                        onClick={() => setActive(item.id)}
                        className={`${active === item.id ? 'text-sunset' : 'text-gray-500'} mt-1 flex justify-start gap-3 items-center   text-lg hover:text-sunset font-light`} key={item.id}
                    >
                        <span>{item.icon}</span>
                        <span>{item.label}</span>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Sidebar
