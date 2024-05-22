import ProductDetailsCarousel from '@/components/ProductDetailsCarousel';
import Wrapper from '@/components/Wrapper';
import React from 'react';

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
                            Men&apos's Golf Shoes
                        </div>

                        {/* Product Price */}
                        <div className='text-lg font-semibold'>
                            MRP : RS 19695.00
                        </div>
                    </div>
                    {/* Right Column End */}
                </div>
            </Wrapper>
        </div>
    );
};

export default ProductDetails;