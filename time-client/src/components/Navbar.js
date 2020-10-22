import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="nav-wrapper stylegroup">
            <div className="container ">
                <ul>
                    <li><NavLink exact to="/">HOME</NavLink></li>
                    <li><NavLink to="/form">+ADD</NavLink></li>
                    <li><NavLink to="/about">ABOUT</NavLink></li>
                    <li><NavLink to="/tasks">TASKS</NavLink></li>
                </ul>
            </div>
            
        </nav>
    )
}

export default Navbar

