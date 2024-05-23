import CartItem from '@/components/CartItem';
import Wrapper from '@/components/Wrapper';
import React from 'react';

const Cart = () => {
    return (
        <div className='w-full md:py-20'>
            <Wrapper>
                {/* Heading and Paragraph Start */}
                <div className='text-center max-w-[800px] mx-auto mt-8 md:mt-0'>
                    <div className='text-[20px] md:text-[34px] mb-5 font-semibold leading-tight'>
                        Shopping Cart
                    </div>
                </div>
                {/* Heading and Paragraph End */}

                {/* Cart Content Start */}
                <div className='flex flex-col lg:flex-row gap-12 py-10'>
                    {/* Cart items Start */}
                    <div className='flex-[2]'>
                        <div className='text-lg font-bold'> Cart Items</div>
                        <CartItem />
                    </div>
                    {/* Cart items End */}

                    {/* Summery Start */}
                    <div className='flex-[1]'>
                        <div className='text-lg font-bold'>Summary</div>
                    </div>
                    {/* Summery End */}
                </div>
                {/* Cart Content End */}
            </Wrapper>
        </div>
    );
};

export default Cart;