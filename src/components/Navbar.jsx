import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  
    const [activeLink, setActiveLink] = useState('Home');


    const handleActiveLink = (link) => {
        setActiveLink(link);
    };

    
    const getLinkClass = (link) => (
        link === activeLink
            ? "text-black text-xl font-semibold relative"
            : "text-black hover:text-gray-800"
    );

    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-20 py-2 flex justify-between items-center">

                {/* Logo */}
                <div className="text-green-500 font-bold text-xl">
                    <img src={logo} alt="Logo" />
                </div>

                {/* Navigation Links */}
                <nav className="space-x-8">
                    <a
                        href="#"
                        className={getLinkClass('Home')}
                        onClick={() => handleActiveLink('Home')}
                    >
                        Home
                        {activeLink === 'Home' && (
                            <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-1 h-1 w-1 bg-teal-500 rounded-full"></span>
                        )}
                    </a>

                    <a
                        href="#"
                        className={getLinkClass('Free listing')}
                        onClick={() => handleActiveLink('Free listing')}
                    >
                        Free listing
                        {activeLink === 'Free listing' && (
                            <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-1 h-1 w-1 bg-teal-500 rounded-full"></span>
                        )}
                    </a>

                    <a
                        href="#"
                        className={getLinkClass('Service')}
                        onClick={() => handleActiveLink('Service')}
                    >
                        Service
                        {activeLink === 'Service' && (
                            <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-1 h-1 w-1 bg-teal-500 rounded-full"></span>
                        )}
                    </a>

                    <a
                        href="#"
                        className={getLinkClass('Contact Us')}
                        onClick={() => handleActiveLink('Contact Us')}
                    >
                        Contact Us
                        {activeLink === 'Contact Us' && (
                            <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-1 h-1 w-1 bg-teal-500 rounded-full"></span>
                        )}
                    </a>

                    <a
                        href="#"
                        className={getLinkClass('Login/Register')}
                        onClick={() => handleActiveLink('Login/Register')}
                    >
                        Login/Register
                        {activeLink === 'Login/Register' && (
                            <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-1 h-1 w-1 bg-teal-500 rounded-full"></span>
                        )}
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
