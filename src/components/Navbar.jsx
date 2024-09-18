import React from 'react';
import logo from '../assets/logo.png'
const Navbar = () => {
    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-20 py-2 flex justify-between items-center">

                {/* Logo */}
                <div className="text-green-500 font-bold text-xl">
                  <img src={logo} alt="" />
                </div>

                {/* Navigation Links */}
                <nav className="space-x-8">
                    <a href="#" className="text-black text-xl font-semibold relative">
                        Home
                        <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-1 h-1 w-1 bg-teal-500 rounded-full "></span>
                    </a>
                    <a href="#" className="text-black hover:text-gray-800">
                        Free listing
                    </a>
                    <a href="#" className="text-black hover:text-gray-800">
                        Service
                    </a>
                    <a href="#" className="text-black hover:text-gray-800">
                        Contact Us
                    </a>
                    <a href="#" className="text-black hover:text-gray-800">
                        Login/Register
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
