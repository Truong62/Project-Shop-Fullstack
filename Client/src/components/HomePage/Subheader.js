import React from 'react';

const Subheader = () => {
    return (
        <div className='bg-[#F3F3F3] pl-28 pr-28 h-[60px] flex items-center justify-start'>
            <div className='text-[#868686]'>
                <span  className='m-3 cursor-pointer'>New In</span>
                <span className='m-3 cursor-pointer'>Football</span>
                <span className='m-3 cursor-pointer'>Basketball</span>
                <span className='m-3 cursor-pointer'>Badminton</span>
                <span className='m-3 cursor-pointer'>Rugby</span>
                <span className='m-3 cursor-pointer'>Tennis</span>
                <span className='m-3 cursor-pointer'>Hockey</span>
                <span className='m-3 cursor-pointer'>Lifestyle</span>
                <span className='m-3 cursor-pointer'>American Football</span>
                <span className='m-3 cursor-pointer'>Sales</span>
            </div>
        </div>
    );
};

export default Subheader;