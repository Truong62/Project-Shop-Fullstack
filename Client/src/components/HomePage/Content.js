import React, { useEffect, useState } from 'react';
import banner from './img/banner.jpg';
import axios from 'axios';
import release1 from "./img/Screenshot.png"
import release2 from "./img/Screenshot2.png"
import { Link } from "react-router-dom"

const Content = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/products');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };
        fetchData();
    }, []);

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
                <h1 className='text-3xl font-bold mb-10'>Selling Fast</h1>
                {data ? (
                    <div className='product grid grid-cols-4 gap-x-12 gap-y-10'>
                        {data.data.map((item, index) => (
                            <div key={item._id} className='item_product flex-1 flex flex-col '>
                                <img src={`http://localhost:8000/api/products/${item.thumbnailURL}`} alt={item.name} className='h-[270px] w-full object-cover rounded cursor-pointer' />
                                <div className='info-product pt-5 flex-1 flex flex-col p-1'>
                                    <h3 className='text-base text-black mb-3 cursor-pointer'>{item.name}</h3>
                                    <span className='text-red-600 mt-auto '>{`${item.price} $`}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (<h1>Loading....</h1>)}
            </div>
            <div className='max-w-[1280px] mb-0 mt-0 ml-auto mr-auto'>
                <div className='flex items-center justify-center p-3 border-solid border-2 border-[#DEDEDE] font-medium rounded-lg cursor-pointer'>
                    <Link to={"/products-new-in"} className='text-base mr-3'>Sell All Products</Link>
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.510466 10.1259C0.240103 10.3963 0.240103 10.8346 0.510466 11.105C0.780829 11.3754 1.21917 11.3754 1.48954 11.105L6.10492 6.48961C6.37528 6.21925 6.37528 5.7809 6.10492 5.51054L1.48954 0.895155C1.21917 0.624792 0.780829 0.624792 0.510466 0.895155C0.240103 1.16552 0.240103 1.60386 0.510466 1.87423L4.63631 6.00008L0.510466 10.1259Z" fill="black" />
                    </svg>
                </div>
            </div>
            <div className="new-release mt-16 mb-32">
                <h1 className='text-3xl font-bold mb-10 mt-10'>New Release</h1>
                <div className='grid grid-cols-2 gap-4'>
                    <div className='flex justify-start relative     '>
                        <img className='w-550 h-750 flex-shrink-0' src={release1} alt="" />
                        <div className='absolute p-3 bg-white drop-shadow-lg flex justify-center items-center bottom-0 right-1 cursor-pointer'>
                            <Link to={"/products-new-in"} className='pr-3 w-[190px] '>
                                <h3 className='font-medium text-xl'>Paris Saint-Germain Home Kit</h3>
                                <span className='text-[#868686] font-normal text-sm'>20/21</span>
                            </Link>
                            <div className=''> 
                                <svg width="25" height="12" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25 6L14.8843 0.431738L15.1199 11.9763L25 6ZM0.520404 7.49979L16.0223 7.18343L15.9815 5.18384L0.479596 5.50021L0.520404 7.49979Z" fill="black" />
                                </svg>

                            </div>
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <img className='w-550 h-750 flex-shrink-0' src={release2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;
