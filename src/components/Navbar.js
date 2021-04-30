import React, { useState } from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Sidebar } from './Sidebar'
import './Navbar.css'
import { IconContext } from 'react-icons';

function Navbar() {

    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
        {/*Customizing all Icons white*/}
        <IconContext.Provider value={{color: 'white'}}>

            <div className="navbar">
                <Link to="#" className="menu-bars">
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                {/* Once icons are clicked sidebar will close */}
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {/* Mapping threw data on sidebar*/}
                    {Sidebar.map((items, index) => {
                        return (
                            <li key={index} className={items.cName}>
                                <Link to={items.path}>
                                    {items.icon}
                                    <span>{items.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>

        </IconContext.Provider>
        </>
    )
}

export default Navbar
