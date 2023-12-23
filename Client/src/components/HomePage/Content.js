import React, { useEffect, useState } from 'react';
import banner from './img/banner.jpg';
import axios from 'axios';

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
                                <img src={`http://localhost:8000/api/products/${item.thumbnailURL}`} alt={item.name} className='h-[270px] w-full object-cover rounded ' />
                                <div className='info-product pt-5 flex-1 flex flex-col p-1'>
                                    <h3 className='text-lg text-black mb-3'>{item.name}</h3>
                                    <span className='text-red-600 mt-auto '>{`${item.price} $`}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (<h1>Loading....</h1>)}
            </div>
        </div>
    );
};

export default Content;
