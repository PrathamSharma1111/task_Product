import React from 'react';
import Facebook from '../assets/Facebook.png'
import Insta from '../assets/Insta.png'
import LinkedIn from '../assets/LinkedIn.png'
import Twitter from '../assets/Twitter.png'
import logo from '../assets/logo.png'

const Footer = () => {
    return (
        <footer className="bg-white py-10 shadow-md">
            <div className="container mx-auto px-4">
                {/* Top Section */}
                <div className="flex flex-wrap justify-between items-start mb-8">
                    {/* Logo */}
                    <div className="mb-4 md:mb-0 flex justify-center items-center lg:w-1/4 h-52">
                       <img src={logo} alt="" />
                    </div>

                    {/* Links */}
                    <div className="flex space-x-20 w-3/5">
                        {/* Column 1 */}
                        <div>
                            <h4 className="font-semibold mb-2">Links</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li><a href="#">About US</a></li>
                                <li><a href="#">Contact US</a></li>
                                <li><a href="#">Customer care</a></li>
                                <li><a href="#">Free listing</a></li>
                                <li><a href="#">Media</a></li>
                            </ul>
                        </div>

                        {/* Column 2 */}
                        <div>
                            <h4 className="font-semibold mb-2">OC Expert</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li><a href="#">Doctors</a></li>
                                <li><a href="#">Contact US</a></li>
                                <li><a href="#">Customer care</a></li>
                                <li><a href="#">Free listing</a></li>
                                <li><a href="#">Media</a></li>
                            </ul>
                        </div>

                        <div>
                            {/* <h4 className="font-semibold mb-2">OC Expert</h4> */}
                            <ul className="space-y-2 mt-8 text-gray-600">
                                <li><a href="#">Doctors</a></li>
                                <li><a href="#">Contact US</a></li>
                                <li><a href="#">Customer care</a></li>
                                <li><a href="#">Free listing</a></li>
                                <li><a href="#">Media</a></li>
                            </ul>
                        </div>

                        <div>
                            {/* <h4 className="font-semibold mb-2">OC Expert</h4> */}
                            <ul className="space-y-2 mt-8 text-gray-600">
                                <li><a href="#">Doctors</a></li>
                                <li><a href="#">Contact US</a></li>
                                <li><a href="#">Customer care</a></li>
                                <li><a href="#">Free listing</a></li>
                                <li><a href="#">Media</a></li>
                            </ul>
                        </div>

                        {/* Column 3 */}
                        <div className='flex flex-col gap-4'>
                            <h4 className="font-semibold mb-2">Connect us on</h4>
                            <ul className="space-y-2 text-gray-600 flex items-center justify-center">
                                <li><a href="#"><img src={Facebook} alt="" className='mt-1' /></a></li>
                                <li><a href="#"><img src={Insta} alt="" /></a></li>
                                <li><a href="#"><img src={LinkedIn} alt="" /></a></li>
                                <li><a href="#"><img src={Twitter} alt="" /></a></li>
                            </ul>
                            {/* App Store Icons */}
                            <div className="flex flex-col space-y-4">
                                <a href="#">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                        alt="Google Playstore"
                                        className="w-32"
                                    />
                                </a>
                                <a href="#">
                                    <img
                                        src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                                        alt="App Store"
                                        className="w-32"
                                    />
                                </a>
                            </div>
                        </div>


                    </div>
                </div>

                {/* Bottom Section */}
                <div className="text-center text-sm text-gray-500 border-t pt-6">
                    <div className="mb-4">
                        <a href="#" className="text-gray-600 hover:text-gray-800">Travel & Tourism</a> |
                        <a href="#" className="text-gray-600 hover:text-gray-800"> Beauty</a> |
                        <a href="#" className="text-gray-600 hover:text-gray-800"> Jobs</a> |
                        <a href="#" className="text-gray-600 hover:text-gray-800"> Education</a> |
                        <a href="#" className="text-gray-600 hover:text-gray-800"> Food</a> |
                        <a href="#" className="text-gray-600 hover:text-gray-800"> Fitness</a> |
                        <a href="#" className="text-gray-600 hover:text-gray-800"> Health</a> |
                        <a href="#" className="text-gray-600 hover:text-gray-800"> Real Estate</a>
                    </div>
                    <div className="text-xs">
                        &copy; 2008-2013. All rights reserved |
                        <a href="#" className="text-gray-600 hover:text-gray-800"> Privacy</a> |
                        <a href="#" className="text-gray-600 hover:text-gray-800"> Help</a> |
                        <a href="#" className="text-gray-600 hover:text-gray-800"> FAQs</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
