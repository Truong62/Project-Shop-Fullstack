import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className='bg-white max-w-[1280px] mb-0 mt-0 ml-auto mr-auto'>
                <div className='footer-content grid grid-cols-4 gap-4'>
                    <div className='custormer'>
                        <h3 className='mb-5 text-black font-medium  text-2xl'>Customer</h3>
                        <p className='mb-5 text-[#000] font-light leading-6  text-sm  max-w-[120px]'>Help & Contact Us Returns & Refunds Online Stores Terms & Conditions</p>
                    </div>
                    <div className='Company'>
                        <h3 className='mb-5 text-black font-medium  text-2xl'>Company</h3>
                        <p className='mb-5 text-[#000] font-light leading-6  text-sm  max-w-[120px]'>What We Do Available Services Latest Posts FAQs</p>
                    </div>
                    <div className='Social Media'>
                        <h3 className='mb-5 text-black font-medium  text-2xl'>Social Media</h3>
                        <p className='mb-5 text-[#000] font-light leading-6  text-sm  max-w-[120px]'>Twitter
                            Instagram
                            Tumblr
                            Pinterest</p>
                    </div>
                    <div className='custormer'>
                        <h3 className='mb-5 text-black font-medium  text-2xl'>Profile</h3>
                        <p className='mb-5 text-[#000] font-light leading-6  text-sm  max-w-[120px]'>My Account
                            Checkout
                            Order Tracking
                            Help & Support</p>
                    </div>
                </div>
            </div>
            <div className=' border-solid border-2 border-[#F3F3F3]'>
                <div className='bg-white max-w-[1280px] mb-0 mt-0 ml-auto mr-auto '>
                    <div className='flex justify-between items-center p-2'>
                        <p className=' text-[#868686] font-light leading-6 text-sm '>Copyright © Jersey Shop</p>
                        <p className=' text-[#868686] font-light leading-6 text-sm '>Privacy & Cookie | T&C | Accessibility</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;