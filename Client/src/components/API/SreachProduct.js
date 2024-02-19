import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SreachProduct = ({ name }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`https://nntshop.onrender.com/api/products?limit=5&name=${name}`);
                setData(res.data)
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [name]);

    const truncateString = (str, maxLength) => {
        if (str.length > maxLength) {
            return str.substring(0, maxLength) + '...';
        } else {
            return str;
        }
    };

    return (
        <div className='absolute top-16 w-[400px] px-3 bg-gray-100 border shadow-xl  rounded-b-md'>
            {data && data.data && data.data.map((item, index) => (
                <Link to={`/products-details/${item._id}`} key={item._id}
                    className='flex items-center justify-between my-2 '>
                    <p className='text-base font-medium text-black cursor-pointer'>
                        {truncateString(item.name, 40)}
                    </p>
                    <p className='font-medium text-red-600'>{item.price}</p>
                </Link>
            ))}
        </div>
    );
};

export default SreachProduct;
