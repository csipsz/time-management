import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="nav-wrapper indigo accent-1">
            <div className="container">
                <ul>
                    <li><NavLink exact to="/">HOME</NavLink></li>
                    <li><NavLink to="/form">ADD TASK</NavLink></li>
                    <li><NavLink to="/about">ABOUT</NavLink></li>
                    <li><NavLink to="/contact">CONTACT</NavLink></li>
                </ul>
            </div>
            
        </nav>
    )
}

export default Navbar

