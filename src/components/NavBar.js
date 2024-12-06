import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';
import logo from '../assets/images/LogoNew.png'; // Update the path to your logo file

function NavBar({ role, handleLogout }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleNavigation = () => {
        setMenuOpen(false); // Close the menu on navigation
    };

    return (
        <nav className="navbar">
            {/* Logo */}
            <Link to="/" className="logo" onClick={handleNavigation}>
                <img src={logo} alt="Trillo RE Logo" className="logo-image" />
            </Link>

            {/* Hamburger Menu */}
            <div className="hamburger" onClick={toggleMenu}>
                <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
                <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
                <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
            </div>

            {/* Navigation Links */}
            <div className={`nav-links ${menuOpen ? 'mobile active' : 'desktop'}`}>
                <Link to="/" onClick={handleNavigation}>Home</Link>
                <Link to="/properties" onClick={handleNavigation}>Properties</Link>
                {role === '' && (
                    <>
                        <Link to="/login" onClick={handleNavigation}>Tenant</Link>
                        <Link to="/admin-login" onClick={handleNavigation}>Admin</Link>
                    </>
                )}
                {role === 'tenant' && (
                    <Link to="/dashboard" onClick={handleNavigation}>Dashboard</Link>
                )}
                {role === 'admin' && (
                    <Link to="/admin" onClick={handleNavigation}>Admin Panel</Link>
                )}
                {role !== '' && (
                    <span onClick={handleLogout} className="logout-btn">
                        Logout
                    </span>
                )}
            </div>
        </nav>
    );
}

export default NavBar;