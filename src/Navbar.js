import React from 'react';
import logo from './images/logo.png';

const Navbar = () => {
    return (
    <nav className="navbar">
    <a href="/"><img className="nav-logo" src={logo} alt="Logo" /></a>
    </nav>
    )
}

export default Navbar;