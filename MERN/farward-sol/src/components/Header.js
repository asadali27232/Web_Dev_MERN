import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className='px-32'>
            <Link to="/">
                <div className='logo'></div>
            </Link>
            <nav>
                <Link to="/" className='active-tab'>Home</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/about">About Us</Link>
            </nav>
        </header>
    )
}

export default Header