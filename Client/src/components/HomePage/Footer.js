import React from 'react';
import FormContainer from '../common/FormContailer';

const Footer = ({ className }) => {
    return (
        <div className={`${className}`}>
            <FormContainer className="flex items-center justify-around bg-white">
                <div className='grid grid-cols-4 gap-4 footer-content sm:grid-cols-2 sm:gap-x-9'>
                    <div className='custormer'>
                        <h3 className='mb-5 text-2xl font-medium text-black'>Customer</h3>
                        <p className='mb-5 text-[#000] font-light leading-6  text-sm  max-w-[120px]'>
                            <span className='block'>Help & Contact Us</span>
                            <span className='block'>Returns & Refunds</span>
                            <span className='block'>Online Stores</span>
                            <span className='block'>Terms & Conditions</span>
                        </p>
                    </div>
                    <div className='Company'>
                        <h3 className='mb-5 text-2xl font-medium text-black'>Company</h3>
                        <p className='mb-5 text-[#000] font-light leading-6  text-sm  max-w-[120px]'>
                            <span className='block'>What We Do</span>
                            <span className='block'>Available Services</span>
                            <span className='block'>Latest Posts</span>
                            <span className='block'>FAQs</span>
                        </p>
                    </div>
                    <div className='Social Media'>
                        <h3 className='mb-5 text-2xl font-medium text-black'>Social Media</h3>
                        <p className='mb-5 text-[#000] font-light leading-6  text-sm  max-w-[120px]'>
                            <span className='block'>Twitter</span>
                            <span className='block'>Instagram</span>
                            <span className='block'>Tumblr</span>
                            <span className='block'>Pinterest</span>
                        </p>
                    </div>
                    <div className='custormer'>
                        <h3 className='mb-5 text-2xl font-medium text-black'>Profile</h3>
                        <p className='mb-5 text-[#000] font-light leading-6  text-sm  max-w-[120px]'>
                            <span className='block'>My Account</span>
                            <span className='block'>Checkout</span>
                            <span className='block'>Order Tracking</span>
                            <span className='block'>Help & Support</span>
                        </p>
                    </div>
                </div>
            </FormContainer>
            <div className=' border-solid border-2 border-[#F3F3F3]'>
                <FormContainer>
                    <div className='flex items-center justify-between p-2'>
                        <p className=' text-[#868686] font-light leading-6 text-sm '>Copyright © Jersey Shop</p>
                        <p className=' text-[#868686] font-light leading-6 text-sm '>Privacy & Cookie | T&C | Accessibility</p>
                    </div>
                </FormContainer>
            </div>
        </div>
    );
};

export default Footer;