import React, { useRef } from 'react';
import ProductCard from './ProductCard';
import ProductCardImage from '../assets/productCard.png'
const MoreFromSeller = () => {
    const scrollRef = useRef(null);

    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    };

    const products = [
        {
            name: 'Round toe leather loafer shoe',
            color: 'Black',
            seller: 'Rainbow shoes & enterprise',
            location: 'Ahmedabad',
            price: 1800,
            image: ProductCardImage,
        },
        {
            name: 'Round toe leather loafer shoe',
            color: 'Black',
            seller: 'Rainbow shoes & enterprise',
            location: 'Ahmedabad',
            price: 1800,
            image: ProductCardImage,
        },
        {
            name: 'Round toe leather loafer shoe',
            color: 'Black',
            seller: 'Rainbow shoes & enterprise',
            location: 'Ahmedabad',
            price: 1800,
            image: ProductCardImage,
        },
        {
            name: 'Round toe leather loafer shoe',
            color: 'Black',
            seller: 'Rainbow shoes & enterprise',
            location: 'Ahmedabad',
            price: 1800,
            image: ProductCardImage,
        },
        {
            name: 'Round toe leather loafer shoe',
            color: 'Black',
            seller: 'Rainbow shoes & enterprise',
            location: 'Ahmedabad',
            price: 1800,
            image: ProductCardImage,
        },
        {
            name: 'Round toe leather loafer shoe',
            color: 'Black',
            seller: 'Rainbow shoes & enterprise',
            location: 'Ahmedabad',
            price: 1800,
            image: ProductCardImage,
        },
        {
            name: 'Round toe leather loafer shoe',
            color: 'Black',
            seller: 'Rainbow shoes & enterprise',
            location: 'Ahmedabad',
            price: 1800,
            image: ProductCardImage,
        },
        {
            name: 'Round toe leather loafer shoe',
            color: 'Black',
            seller: 'Rainbow shoes & enterprise',
            location: 'Ahmedabad',
            price: 1800,
            image: ProductCardImage,
        },
        {
            name: 'Round toe leather loafer shoe',
            color: 'Black',
            seller: 'Rainbow shoes & enterprise',
            location: 'Ahmedabad',
            price: 1800,
            image: ProductCardImage,
        },
        {
            name: 'Round toe leather loafer shoe',
            color: 'Black',
            seller: 'Rainbow shoes & enterprise',
            location: 'Ahmedabad',
            price: 1800,
            image: ProductCardImage,
        },
    ];

    return (
        <div className="relative">
            <button
                onClick={scrollLeft}
                className="absolute right-10 z-10 bg-gray-800 text-white p-2 rounded-full"
            >
                &lt;
            </button>
            <button
                onClick={scrollRight}
                className="absolute right-0 z-10 bg-gray-800 text-white p-2 rounded-full"
            >
                &gt;
            </button>
            <div
                ref={scrollRef}
                className="flex gap-8 overflow-x-auto no-scrollbar"
                style={{ scrollBehavior: 'smooth' }}
            >
                {products.map((product, index) => (
                    <div key={index} className="min-w-[200px] max-w-[250px]">
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>

        </div>
    );
};

export default MoreFromSeller;
