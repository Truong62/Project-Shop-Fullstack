import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const GetProduct = ({ children, className = "" }) => {
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
        <Fragment>
            {data ? (
                <div className={`grid product ${className}`}>
                    {data.data.map((item, index) => (
                        <div key={item._id} className='flex flex-col flex-1 item_product '>
                            <Link to={`/products-details/${item._id}`} className='cursor-pointer'>
                                <img src={`http://localhost:8000/api/products/image/${item.thumbnailURL}`} alt={item.name} className='h-[270px] w-full object-cover rounded cursor-pointer' />
                            </Link>
                            <div className='flex flex-col flex-1 p-1 pt-5 info-product'>
                                <Link to={`/products-details/${item._id}`} className='flex flex-col flex-1 item_product '>
                                    <h3 className='mb-3 text-base text-black cursor-pointer'>{item.name}</h3>
                                </Link>
                                <span className='mt-auto text-red-600 '>{`${item.price} $`}</span>
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
