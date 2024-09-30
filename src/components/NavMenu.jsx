import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const NavMenu = ({ menuItems, active, setActive }) => {

    console.log(active);
    return (
        <div className='flex gap-6 font-inter'>
            {
                menuItems.map(item => (
                    <Link
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        to={item.path}
                        className={`${active === item.id ? "text-indigo-800" : ""}`}
                    >
                        {item.name}
                    </Link>
                ))
            }
        </div>
    )
}

export default NavMenu
