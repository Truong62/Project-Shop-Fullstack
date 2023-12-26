import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetProductList = () => {
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
        <div className="list-product ">
                {data ? (
                    <div className='product grid grid-cols-3 gap-x-5 gap-y-10'>
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
    );
};

export default GetProductList;