import React from 'react';
import banner from './img/banner.jpg';

const Content = () => {
    return (
        <div>
            <div className='banner relative mt-10 '>
                <div className="w-full h-full rounded-lg relative">
                    <img src={banner}
                        alt=""
                        className=" w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute left-5 bottom-5 text-white m-10 w-[350px] ">
                        <h3 className='text-2xl font-medium mb-6 text-shadow'>Sweat-Wicking Performance</h3>
                        <span className='font-extralight text-xl text-shadow'>With a cropped silhouette for modern comfort that's made to move.</span>
                    </div>
                </div>
            </div>
            <div className="list-product mt-16 mb-10">
                <h1 className='text-3xl font-bold'>Selling Fast</h1>
                <div className='product grid grid-cols-4 gap-x-12 gap-y-10'>
                    <div className='item_product bg-red-300'>
                        1
                    </div>
                    <div className='item_product bg-red-300'>
                        2
                    </div>
                    <div className='item_product bg-red-300'>
                        3
                    </div>
                    <div className='item_product bg-red-300'>
                       4
                    </div>
                    <div className='item_product bg-red-300'>
                        5
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;
