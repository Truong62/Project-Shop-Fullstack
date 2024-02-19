import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, } from 'react-router-dom';

const GetProduct = ({ children, className = "", page, limit }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const activateSystem = async () => {
            try {
                await axios.get('https://nntshop.onrender.com/list-order');
            } catch (error) {
                console.error('Error activating system: ', error);
            }
        };

        const fetchData = async () => {
            await activateSystem();
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://nntshop.onrender.com/api/products?page=${page}&limit=${limit}`);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };
        fetchData();
    }, [limit, page]);

    return (
        <Fragment>
            {data ? (
                <div className={`grid product ${className}`}>
                    {data.data.map((item, index) => (
                        <div key={item._id} className='flex flex-col flex-1 duration-500 item_product hover:scale-105 hover:transition-all'>
                            <Link to={`/products-details/${item._id}`} className='cursor-pointer'>
                                <img src={`https://nntshop.onrender.com/api/products/image/${item.thumbnailURL}`} alt={item.name}
                                    className='h-[270px] shadow-product sm:h-[200px] ease-in-out rounded-md duration-400 object-cover cursor-pointer' />
                            </Link>
                            <div className='flex flex-col flex-1 p-1 pt-5 info-product'>
                                <Link to={`/products-details/${item._id}`} className='flex flex-col flex-1 item_product '>
                                    <h3 className='mb-3 text-base font-normal text-black cursor-pointer'>{item.name}</h3>
                                </Link>
                                <div className='flex mt-auto'>
                                    <span className='mt-auto font-medium text-red-600 '>{`${item.price} $`}</span>
                                    <span className='justify-center flex items-center ml-4 mt-1 line-through font-medium text-sm text-[#868686] '>{`${item.discount} $`}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className='relative grid grid-cols-3 item_product'>
                    <div className='absolute z-30 left-1/2 bottom-1/2'>
                        <p className='text-xl font-bold'>Please wait in 1 minute.</p>
                    </div>
                    <div role="status" className="max-w-sm p-4 rounded animate-pulse md:p-6 dark:border-gray-700">
                        <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                            <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                            </svg>
                        </div>
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                        <div className="flex items-center mt-4">
                            <div>
                                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                                <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            </div>
                        </div>
                        <span className="sr-only">Loading...</span>
                    </div>
                    <div role="status" className="max-w-sm p-4 rounded animate-pulse md:p-6 dark:border-gray-700">
                        <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                            <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                            </svg>
                        </div>
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                        <div className="flex items-center mt-4">
                            <div>
                                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                                <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            </div>
                        </div>
                        <span className="sr-only">Loading...</span>
                    </div>
                    <div role="status" className="max-w-sm p-4 rounded animate-pulse md:p-6 dark:border-gray-700">
                        <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                            <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                            </svg>
                        </div>
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                        <div className="flex items-center mt-4">
                            <div>
                                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                                <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            </div>
                        </div>
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>

            )}
        </Fragment>
    );
};

GetProduct.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

export default GetProduct;
