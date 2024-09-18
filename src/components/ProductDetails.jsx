import SupplierInfo from './SupplierInfo';
import Specification from './Specification';
import ProductImage from '../assets/Product.png';
import ProductView from '../assets/productMulti.png';
import Heart from '../assets/heart.png';
import MoreFromSeller from './MoreFromSeller';
import ReviewsSection from './ReviewsSection';

const ProductDetails = () => {
    return (
        <div className="container mx-auto px-4 md:px-8 lg:px-10 xl:px-20 pt-10 lg:pt-20">
            <nav className="text-xs lg:text-sm text-gray-500 mb-2 lg:mb-4">
                Home {'>'} Shoes {'>'}{' '}
                <span className="text-black font-medium">
                    Round toe leather loafer shoe (Black)
                </span>
            </nav>

            <div className="flex flex-col lg:flex-row justify-center items-start w-full">
                {/* Product Image Section */}
                <div className="w-full lg:w-auto">
                    <img
                        src={ProductImage}
                        alt="Product"
                        className="w-full lg:w-[600px] lg:h-[350px] rounded"
                    />
                    <div className="mt-4 flex justify-center">
                        <img
                            src={ProductView}
                            alt="Product thumbnail"
                            className="w-[90%] lg:w-[90%] h-auto rounded"
                        />
                    </div>
                </div>

                {/* Product Info Section */}
                <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:ml-8">
                    <h1 className="text-lg lg:text-2xl font-semibold">
                        Round toe leather loafer shoe (Black)
                    </h1>
                    <div className="mt-4 flex items-center gap-4 mb-4">
                        <img src={Heart} alt="heart" />
                        <span className="text-sm font-medium">
                            Add to my wishlist
                        </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mb-4">
                        <p className="text-gray-600 text-sm lg:text-base">
                            Occasion: <span className="font-medium text-black">Sports</span>
                        </p>
                        <p className="text-gray-600 text-sm lg:text-base">
                            Size: <span className="font-medium text-black">12</span>
                        </p>
                        <p className="text-gray-600 text-sm lg:text-base">
                            Color: <span className="font-medium text-black">Red</span>
                        </p>
                        <p className="text-gray-600 text-sm lg:text-base">
                            Type: <span className="font-medium text-black">Running Shoes, Womens Shoes</span>
                        </p>
                    </div>

                    <div className="flex justify-between items-center pr-2 lg:pr-10">
                        {/* Pricing */}
                        <div className="my-4 flex flex-col mt-4 lg:mt-10">
                            <span className="text-lg lg:text-xl font-bold text-black">$58.30</span>
                            <span className="line-through ml-2 text-gray-500">$65.12</span>
                        </div>

                        {/* Inquiry Button */}
                        <button
                            className="px-4 py-2 text-white text-sm lg:text-base rounded"
                            style={{
                                background:
                                    'linear-gradient(180deg, #74CC7E 0%, #00818A 100%)',
                            }}
                        >
                            Inquiry Now
                        </button>
                    </div>

                    {/* Description */}
                    <h3 className="mt-4 text-base lg:text-lg font-medium">
                        Description
                    </h3>
                    <p className="mt-2 lg:mt-6 text-gray-500 text-sm lg:text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                        sint occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum...
                    </p>
                </div>
            </div>

            {/* Supplier Info and Specification */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 lg:px-10">
                <SupplierInfo />
                <Specification />
            </div>

            <div className="mt-10 lg:px-10">
                {/* More from this seller */}
                <h2 className="text-lg lg:text-xl font-bold mb-4">
                    More from this seller
                </h2>
                <MoreFromSeller />

                {/* User reviews section */}
                <h2 className="text-lg lg:text-xl font-bold my-6">
                    User reviews on this Product
                </h2>
                <ReviewsSection />
            </div>
        </div>
    );
};

export default ProductDetails;