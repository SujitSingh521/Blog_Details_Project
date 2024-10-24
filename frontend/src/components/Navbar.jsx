// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">BlogApp</Link>
                <div className="navbar-links">
                    <Link to="/">Home</Link>
                    <Link to="/add">Create Post</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
