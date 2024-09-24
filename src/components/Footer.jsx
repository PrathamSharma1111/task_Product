import React from 'react';
import Facebook from '../assets/Facebook.png'
import Insta from '../assets/Insta.png'
import LinkedIn from '../assets/LinkedIn.png'
import Twitter from '../assets/Twitter.png'
import logo from '../assets/logo.png'

const Footer = () => {
    return (
        <footer className="bg-white py-10 shadow-md px-4 sm:px-4 lg:px-10">
            <div className="container mx-auto">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8">
                    {/* Logo */}
                    <div className="mb-6 md:mb-0 flex justify-center items-center w-full md:w-1/5 h-32 md:h-52">
                       <img src={logo} alt="Logo" className="max-w-full h-auto" />
                    </div>

                    {/* Links and Connect Us */}
                    <div className="flex flex-col md:flex-row w-full md:w-2/3">
                        <div className="flex flex-col sm:flex-row md:space-x-8 w-full">
                            {/* Links Columns */}
                            <div className="mb-6 md:mb-0 w-full md:w-2/3">
                                <h4 className="font-semibold mb-2 text-center">Links</h4>
                                <ul className="space-y-2 text-gray-600 flex flex-col items-center justify-center">
                                    <li><a href="#">About US</a></li>
                                    <li><a href="#">Contact US</a></li>
                                    <li><a href="#">Customer care</a></li>
                                    <li><a href="#">Free listing</a></li>
                                    <li><a href="#">Media</a></li>
                                </ul>
                            </div>

                            <div className="mb-6 md:mb-0 w-full md:w-2/3">
                                <h4 className="font-semibold text-center mb-2">OC Expert</h4>
                                <ul className="space-y-2 text-gray-600 flex flex-col items-center justify-center">
                                    <li><a href="#">Doctors</a></li>
                                    <li><a href="#">Contact US</a></li>
                                    <li><a href="#">Customer care</a></li>
                                    <li><a href="#">Free listing</a></li>
                                    <li><a href="#">Media</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Column 3 and 4 */}
                        <div className="flex flex-col sm:flex-row md:space-x-8 w-full">
                            <div className="mb-6 md:mb-0 w-full md:w-2/3">
                                <h4 className="font-semibold mb-2 text-center">Additional Links</h4>
                                <ul className="space-y-2 text-gray-600 flex flex-col items-center justify-center">
                                    <li><a href="#">Doctors</a></li>
                                    <li><a href="#">Contact US</a></li>
                                    <li><a href="#">Customer care</a></li>
                                    <li><a href="#">Free listing</a></li>
                                    <li><a href="#">Media</a></li>
                                </ul>
                            </div>

                            <div className="mb-6 md:mb-0 w-full md:w-1/2">
                                <h4 className="font-semibold mb-2 text-center">Connect us on</h4>
                                <ul className="space-x-4 flex items-center justify-center">
                                    <li><a href="#"><img src={Facebook} alt="Facebook" className='w-6 h-6 lg:w-8 lg:h-8' /></a></li>
                                    <li><a href="#"><img src={Insta} alt="Instagram" className='w-6 h-6 lg:w-8 lg:h-8' /></a></li>
                                    <li><a href="#"><img src={LinkedIn} alt="LinkedIn" className='w-6 h-6 lg:w-8 lg:h-8' /></a></li>
                                    <li><a href="#"><img src={Twitter} alt="Twitter" className='w-6 h-6 lg:w-8 lg:h-8' /></a></li>
                                </ul>
                                {/* App Store Icons */}
                                <div className="flex flex-col space-y-4 items-center mt-4">
                                    <a href="#">
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                            alt="Google Playstore"
                                            className="w-28 md:w-32"
                                        />
                                    </a>
                                    <a href="#">
                                        <img
                                            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                                            alt="App Store"
                                            className="w-28 md:w-32"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="text-center text-sm text-gray-500 border-t pt-6">
                    <div className="mb-4 flex flex-wrap justify-center gap-2">
                        <a href="#" className="text-gray-600 hover:text-gray-800">Travel & Tourism</a> |
                        <a href="#" className="text-gray-600 hover:text-gray-800">Beauty</a> |
                        <a href="#" className="text-gray-600 hover:text-gray-800">Jobs</a> |
                        <a href="#" className="text-gray-600 hover:text-gray-800">Education</a> |
                        <a href="#" className="text-gray-600 hover:text-gray-800">Food</a> |
                        <a href="#" className="text-gray-600 hover:text-gray-800">Fitness</a> |
                        <a href="#" className="text-gray-600 hover:text-gray-800">Health</a> |
                        <a href="#" className="text-gray-600 hover:text-gray-800">Real Estate</a>
                    </div>
                    <div className="text-xs">
                        &copy; 2008-2013. All rights reserved |
                        <a href="#" className="text-gray-600 hover:text-gray-800">Privacy</a> |
                        <a href="#" className="text-gray-600 hover:text-gray-800">Help</a> |
                        <a href="#" className="text-gray-600 hover:text-gray-800">FAQs</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
