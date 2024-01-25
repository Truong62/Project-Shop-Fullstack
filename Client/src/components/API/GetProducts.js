import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, } from 'react-router-dom';

const GetProduct = ({ children, className = "", page, limit }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/products?page=${page}&limit=${limit}`);
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
                                <img src={`http://localhost:8000/api/products/image/${item.thumbnailURL}`} alt={item.name}
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
            ) : (<h1>Loading....</h1>)}
        </Fragment>
    );
};

GetProduct.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

export default GetProduct;
