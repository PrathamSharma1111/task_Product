import React from 'react';
import {  FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { BsArrow90DegRight } from "react-icons/bs";
import heart from "../assets/heart.png";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <div className="flex justify-between">
        <span className="text-sm font-semibold text-gray-500">RFQ</span>
        <img src={heart} alt='heart' className="w-5 h-5" />
      </div>
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-28 object-contain mt-2"
      />
      <h3 className="text-sm font-semibold mt-2">
        {product.name}
        <span className="text-gray-600"> ({product.color})</span>
      </h3>
      <p className="text-xs text-blue-600">{product.seller}</p>
      <div className="flex items-center text-gray-500 text-xs mt-1">
        <FaMapMarkerAlt />
        <span className="ml-1">{product.location}</span>
      </div>
      <div className="flex items-center justify-between mt-2">
        <span className="text-green-600 font-bold text-lg">₹ {product.price}</span>
        <div className="flex space-x-2">
         <div className='shadow-sm rounded-full p-2 bg-gray-200'> <FaPhoneAlt className="text-black" /></div>
         <div className='shadow-sm rounded-full p-2 bg-gray-200'> <BsArrow90DegRight className="text-black" /></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
