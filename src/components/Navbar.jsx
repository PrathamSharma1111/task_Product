import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('Home');

    const handleActiveLink = (link) => {
        setActiveLink(link);
        // Optionally, smooth scroll to the section
        document.getElementById(link)?.scrollIntoView({ behavior: 'smooth' });
    };

    const getLinkClass = (link) =>
        link === activeLink
            ? "text-black text-xl font-semibold rounded-lg  md:px-0 bg-green-600 px-4 text-white md:bg-white md:text-black relative transition-all duration-300 ease-in-out"
            : "text-black hover:text-gray-800 transition-all duration-300 ease-in-out";

    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center lg:px-10 xl:px-20">
                {/* Logo */}
                <div className="text-green-500 font-bold text-xl">
                    <img src={logo} alt="Logo" className="w-32 h-auto" />
                </div>

                {/* Hamburger Icon */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
                    </button>
                </div>

                {/* Navigation Links */}
                <nav
                    className={`md:flex md:space-x-8 ${isOpen ? 'flex' : 'hidden'} flex-col md:flex-row absolute left-0 md:relative top-16 w-full bg-white md:bg-transparent md:top-auto md:space-x-8 p-1 lg:px-10 md:justify-end z-50 transition-all duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:transform-none`}
                >
                    <a
                        href="#"
                        className={getLinkClass('Home')}
                        onClick={() => handleActiveLink('Home')}
                    >
                        Home
                        {activeLink === 'Home' && (
                            <span className="md:absolute left-1/2 transform -translate-x-1/2 -bottom-1 h-1 w-1 bg-teal-500 rounded-full"></span>
                        )}
                    </a>

                    <a
                        href="#"
                        className={getLinkClass('Free listing')}
                        onClick={() => handleActiveLink('Free listing')}
                    >
                        Free listing
                        {activeLink === 'Free listing' && (
                            <span className="md:absolute left-1/2 transform -translate-x-1/2 -bottom-1 h-1 w-1 bg-teal-500 rounded-full"></span>
                        )}
                    </a>

                    <a
                        href="#"
                        className={getLinkClass('Service')}
                        onClick={() => handleActiveLink('Service')}
                    >
                        Service
                        {activeLink === 'Service' && (
                            <span className="md:absolute left-1/2 transform -translate-x-1/2 -bottom-1 h-1 w-1 bg-teal-500 rounded-full"></span>
                        )}
                    </a>

                    <a
                        href="#"
                        className={getLinkClass('Contact Us')}
                        onClick={() => handleActiveLink('Contact Us')}
                    >
                        Contact Us
                        {activeLink === 'Contact Us' && (
                            <span className="md:absolute left-1/2 transform -translate-x-1/2 -bottom-1 h-1 w-1 bg-teal-500 rounded-full"></span>
                        )}
                    </a>

                    <a
                        href="#"
                        className={getLinkClass('Login/Register')}
                        onClick={() => handleActiveLink('Login/Register')}
                    >
                        Login/Register
                        {activeLink === 'Login/Register' && (
                            <span className="md:absolute left-1/2 transform -translate-x-1/2 -bottom-1 h-1 w-1 bg-teal-500 rounded-full"></span>
                        )}
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
