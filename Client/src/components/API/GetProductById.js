import { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const GetProductById = ({ children, className = "" }) => {
    const [data, setData] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/products/id/${id}`);
                setData(response.data);
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu: ', error.response);
            }
        };
        
        fetchData();
    }, [id]);
    
    return (
        <Fragment>
            {data && data.data ? (
                <div className={`grid product ${className}`}>
                    <div className='flex flex-col flex-1 item_product '>
                        <img src={`http://localhost:8000/api/products/image/${data.data.thumbnailURL}`} alt={data.data.name} className='h-[270px] w-full object-cover rounded cursor-pointer' />
                        <div className='flex flex-col flex-1 p-1 pt-5 info-product'>
                            <h3 className='mb-3 text-base text-black cursor-pointer'>{data.data.name}</h3>
                            <span className='mt-auto text-red-600 '>{`${data.data.price} $`}</span>
                        </div>
                    </div>
                </div>
            ) : (
                <h1>Loading....</h1>
            )}
        </Fragment>
    );
};

export default GetProductById;
