import React from 'react';
import FormContainer from '../common/FormContailer';

const Footer = () => {
    return (
        <div>
            <FormContainer className="bg-white">
                <div className='grid grid-cols-4 gap-4 footer-content'>
                    <div className='custormer'>
                        <h3 className='mb-5 text-2xl font-medium text-black'>Customer</h3>
                        <p className='mb-5 text-[#000] font-light leading-6  text-sm  max-w-[120px]'>Help & Contact Us Returns & Refunds Online Stores Terms & Conditions</p>
                    </div>
                    <div className='Company'>
                        <h3 className='mb-5 text-2xl font-medium text-black'>Company</h3>
                        <p className='mb-5 text-[#000] font-light leading-6  text-sm  max-w-[120px]'>What We Do Available Services Latest Posts FAQs</p>
                    </div>
                    <div className='Social Media'>
                        <h3 className='mb-5 text-2xl font-medium text-black'>Social Media</h3>
                        <p className='mb-5 text-[#000] font-light leading-6  text-sm  max-w-[120px]'>Twitter
                            Instagram
                            Tumblr
                            Pinterest</p>
                    </div>
                    <div className='custormer'>
                        <h3 className='mb-5 text-2xl font-medium text-black'>Profile</h3>
                        <p className='mb-5 text-[#000] font-light leading-6  text-sm  max-w-[120px]'>My Account
                            Checkout
                            Order Tracking
                            Help & Support</p>
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