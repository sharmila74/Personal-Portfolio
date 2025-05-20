import React from 'react'
import './Navbar.css'
//import logo from '../../assets/logo.svg'
const Navbar = () => {
    return (
        <div className = 'navbar'>
            <ul className="nav-menu">
                <li>Home</li>
                <li>About Me</li>
                <li>My Work</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
        <div className="nav-connect">Connect With Me</div>
        </div>
    )
}
export default Navbar