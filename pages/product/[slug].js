import ProductDetailsCarousel from '@/components/ProductDetailsCarousel';
import Wrapper from '@/components/Wrapper';
import React from 'react';
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';

const ProductDetails = () => {
    return (
        <div className='w-full md:py-20'>
            <Wrapper>
                <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]'>
                    {/* Left Column Start */}
                    <div className='w-full md:2-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0'>
                        <ProductDetailsCarousel />
                    </div>
                    {/* Left Column End */}

                    {/* Right Column Start */}
                    <div className='flex-[1] py-3'>
                        {/* Product Title */}
                        <div className='text-lg font-semibold mb-5'>
                            Jordan Retro 6 G
                        </div>
                        {/* Product Subtitle */}
                        <div className='text-lg  font-semibold mb-5'>
                            Men&apos;s Golf Shoes
                        </div>
                        {/* Product Price */}
                        <div className='text-lg font-semibold'>
                            MRP : RS 19695.00
                        </div>
                        <div className='text-md font-medium text-black/[0.5]'>
                            incl. of taxes
                        </div>
                        <div className='text-md font-medium text-black/[0.5] mb-20'>
                            {`(Also includes all applicable duties)`}
                        </div>

                        {/* Product Size Range Start */}
                        <div className='mb-10'>
                            {/* Heading Start */}
                            <div className='flex justify-between mb-2'>
                                <div className='text-md font-semibold'>
                                    Select Size
                                </div>
                                <div className='text-md font-medium text-black/[0.5] cursor-pointer'>
                                    Select Guide
                                </div>
                            </div>
                            {/* Heading End */}

                            {/* Size Start */}
                            <div className='grid grid-cols-3 gap-2'>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    Uk 6
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    Uk 6.5
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    Uk 7
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    Uk 7.5
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    Uk 8
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    Uk 8.5
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    Uk 9
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    Uk 9.5
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    Uk 10
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    Uk 10.5
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black  cursor-not-allowed opacity-50'>
                                    Uk 11
                                </div>
                            </div>
                            {/* Size End*/}

                            {/* Show Error Start */}
                            <div className='text-red-600 mt-1'>
                                Size Selection i Required
                            </div>
                            {/* Show Error End */}
                        </div>
                        {/* Product Size Range End */}

                        {/* Add to cart Button Start */}
                        <button className='w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75'>
                            Add to Cart
                        </button>
                        {/* Add to cart Button End */}

                        {/* Wishlist Button Start */}
                        <button className='w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10 '>
                            Wishlist
                            <IoMdHeartEmpty size={20} />
                        </button>
                        {/* Wishlist Button End */}

                        <div>
                            <div className='text-lg font-bold mb-5'>
                                Product Details
                            </div>
                            <div className='text--md mb-5'>
                                Nike Air is our iconic innovation that uses pressurized air in a durable, flexible membrane to provide lightweight cushioning. The air compresses on impact and then immediately returns to its original shape and volume, ready for the next impact.
                            </div>
                            <div className='text--md mb-5'>
                                Nike Air is our iconic innovation that uses pressurized air in a durable, flexible membrane to provide lightweight cushioning. The air compresses on impact and then immediately returns to its original shape and volume, ready for the next impact.
                            </div>
                        </div>
                    </div>


                    {/* Right Column End */}
                </div>
            </Wrapper>
        </div>
    );
};

export default ProductDetails;