import { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Dropdown from "../common/Dropdown"
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/Slice/cartSlice';
import { addProductLike } from '../../redux/Slice/likeSlice';

const GetProductById = ({ children, className = "" }) => {

    const dispatch = useDispatch()

    const [data, setData] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://nntshop.onrender.com/api/products/id/${id}`);
                setData(response.data);

            } catch (error) {
                console.error('Error: ', error.response);
            }
        };
        fetchData();
    }, [id]);
    return (
        <Fragment>
            {data && data.data ? (
                <div className={`flex sm:flex-col justify-center product h-max-[600px] sm:mx-auto ${className}`}>
                    <div className='order-1 block w-1/12 mx-2 sm:mt-6 sm:justify-center sm:w-full sm:flex sm:order-2 item_product drop-shadow-lg'>
                        {data.data.imgDescription.map((item, index) => (
                            <img key={index} src={`https://nntshop.onrender.com/api/products/image/${item}`}
                                className='mb-5 cursor-pointer rounded-md sm:mr-5 sm:h-[80px] sm:w-[80px]' alt={`${index}`} />
                        ))}
                    </div>
                    <div className='flex flex-col flex-1 order-2 w-7/12 mx-3 sm:order-1 sm:justify-center sm:w-11/12'>
                        <img src={`https://nntshop.onrender.com/api/products/image/${data.data.thumbnailURL}`} alt={data.data.name}
                            className='sm:h-[300px] sm:w-full h-[600px] w-auto drop-shadow-lg object-cover rounded' />
                    </div>
                    <div className='order-3 w-4/12 mx-2 sm:w-full sm:flex sm:flex-col sm:justify-center sm:mx-auto'>
                        <div className='info'>
                            <h3 className='mb-3 text-2xl font-normal text-black cursor-pointer'>{data.data.name}</h3>
                            <div className='flex my-5'>
                                <p className='price text-[#B02B2B] font-medium text-3xl'> {data.data.price}</p>
                                <p className='ml-4 flex items-center line-through text-[#868686] font-normal text-xl mt-1'> {data.data.discount}</p>
                            </div>
                        </div>
                        <div className='flex flex-col justify-between flex-1 my-5 selec-size'>
                            <div className='flex justify-between '>
                                <span className='text-[#848484] text-lg font-medium'>Size</span>
                                <Link to="#">
                                    <span className='text-[#868686] underline text-lg font-medium'>Size guide</span>
                                </Link>
                            </div>
                            <Dropdown classNameItem="absolute bg-slate-50 px-5 pb-5 w-[433px] sm:w-[390px] border border-[#DEDEDE] shadow-lg"
                                onClick={() => { }}
                                className="w-full border border-[#DEDEDE] p-4" data={data.data.size} table={"Check size"} status={false}></Dropdown>
                            <div className='flex justify-between sm:mt-5'>
                                <button onClick={() => (dispatch(addProduct(data.data)))} className='flex items-center justify-center w-10/12 bg-black'>
                                    <h2 className='text-center text-[#fff] font-medium text-base'>Add To Bag</h2>
                                </button>
                                <button onClick={() => (dispatch(addProductLike(data.data)))} className=''>
                                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="49" height="49" fill="white" stroke="#DEDEDE" />
                                        <mask id="path-2-inside-1_0_465" fill="white">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M19.1435 17.3529C18.1271 17.3529 17.1741 17.7459 16.4612 18.46C14.9812 19.9424 14.9812 22.3553 16.4624 23.84L24.7671 32.1588L33.0729 23.84C34.5541 22.3553 34.5541 19.9424 33.0729 18.46C31.6471 17.0306 29.1341 17.0329 27.7082 18.46L25.6 20.5718C25.1576 21.0153 24.3765 21.0153 23.9341 20.5718L21.8259 18.4588C21.1129 17.7459 20.1612 17.3529 19.1435 17.3529ZM24.7671 35C24.4553 35 24.1553 34.8765 23.9353 34.6541L14.7965 25.5012C12.4012 23.1012 12.4012 19.1965 14.7965 16.7965C15.9541 15.6388 17.4976 15 19.1435 15C20.7894 15 22.3341 15.6388 23.4906 16.7965L24.7671 18.0753L26.0435 16.7976C27.2012 15.6388 28.7447 15 30.3918 15C32.0365 15 33.5812 15.6388 34.7376 16.7965C37.1341 19.1965 37.1341 23.1012 34.7388 25.5012L25.6 34.6553C25.3788 34.8765 25.08 35 24.7671 35Z" />
                                        </mask>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M19.1435 17.3529C18.1271 17.3529 17.1741 17.7459 16.4612 18.46C14.9812 19.9424 14.9812 22.3553 16.4624 23.84L24.7671 32.1588L33.0729 23.84C34.5541 22.3553 34.5541 19.9424 33.0729 18.46C31.6471 17.0306 29.1341 17.0329 27.7082 18.46L25.6 20.5718C25.1576 21.0153 24.3765 21.0153 23.9341 20.5718L21.8259 18.4588C21.1129 17.7459 20.1612 17.3529 19.1435 17.3529ZM24.7671 35C24.4553 35 24.1553 34.8765 23.9353 34.6541L14.7965 25.5012C12.4012 23.1012 12.4012 19.1965 14.7965 16.7965C15.9541 15.6388 17.4976 15 19.1435 15C20.7894 15 22.3341 15.6388 23.4906 16.7965L24.7671 18.0753L26.0435 16.7976C27.2012 15.6388 28.7447 15 30.3918 15C32.0365 15 33.5812 15.6388 34.7376 16.7965C37.1341 19.1965 37.1341 23.1012 34.7388 25.5012L25.6 34.6553C25.3788 34.8765 25.08 35 24.7671 35Z" fill="black" />
                                        <path d="M16.4612 18.46L16.7442 18.7426L16.7443 18.7426L16.4612 18.46ZM16.4624 23.84L16.1792 24.1225L16.1793 24.1226L16.4624 23.84ZM24.7671 32.1588L24.484 32.4414L24.767 32.725L25.0501 32.4414L24.7671 32.1588ZM33.0729 23.84L33.356 24.1226L33.3561 24.1225L33.0729 23.84ZM33.0729 18.46L32.7897 18.7425L32.79 18.7427L33.0729 18.46ZM27.7082 18.46L27.4253 18.1773L27.4252 18.1774L27.7082 18.46ZM25.6 20.5718L25.3169 20.2892L25.3168 20.2893L25.6 20.5718ZM23.9341 20.5718L24.2173 20.2893L24.2173 20.2892L23.9341 20.5718ZM21.8259 18.4588L22.109 18.1763L22.1087 18.176L21.8259 18.4588ZM23.9353 34.6541L24.2196 34.3728L24.2184 34.3715L23.9353 34.6541ZM14.7965 25.5012L14.5134 25.7837L14.5134 25.7838L14.7965 25.5012ZM14.7965 16.7965L14.5136 16.5136L14.5134 16.5139L14.7965 16.7965ZM23.4906 16.7965L23.7737 16.5139L23.7736 16.5138L23.4906 16.7965ZM24.7671 18.0753L24.484 18.3579L24.7669 18.6414L25.05 18.358L24.7671 18.0753ZM26.0435 16.7976L26.3265 17.0804L26.3265 17.0803L26.0435 16.7976ZM34.7376 16.7965L35.0207 16.5138L35.0206 16.5138L34.7376 16.7965ZM34.7388 25.5012L35.0219 25.7838L35.0219 25.7837L34.7388 25.5012ZM25.6 34.6553L25.8828 34.9381L25.8831 34.9379L25.6 34.6553ZM19.1435 16.9529C18.0219 16.9529 16.9668 17.3874 16.1781 18.1774L16.7443 18.7426C17.3814 18.1044 18.2322 17.7529 19.1435 17.7529V16.9529ZM16.1781 18.1774C14.5421 19.816 14.5424 22.4818 16.1792 24.1225L16.7455 23.5575C15.42 22.2288 15.4203 20.0687 16.7442 18.7426L16.1781 18.1774ZM16.1793 24.1226L24.484 32.4414L25.0501 31.8762L16.7454 23.5574L16.1793 24.1226ZM25.0501 32.4414L33.356 24.1226L32.7899 23.5574L24.484 31.8762L25.0501 32.4414ZM33.3561 24.1225C34.9929 22.4818 34.9933 19.8159 33.3559 18.1773L32.79 18.7427C34.115 20.0688 34.1153 22.2288 32.7898 23.5575L33.3561 24.1225ZM33.3561 18.1775C31.7737 16.5911 29.0071 16.5941 27.4253 18.1773L27.9912 18.7427C29.2611 17.4717 31.5204 17.47 32.7897 18.7425L33.3561 18.1775ZM27.4252 18.1774L25.3169 20.2892L25.8831 20.8544L27.9913 18.7426L27.4252 18.1774ZM25.3168 20.2893C25.0307 20.5761 24.5034 20.5761 24.2173 20.2893L23.6509 20.8542C24.2495 21.4545 25.2846 21.4545 25.8832 20.8542L25.3168 20.2893ZM24.2173 20.2892L22.109 18.1763L21.5427 18.7414L23.651 20.8543L24.2173 20.2892ZM22.1087 18.176C21.3201 17.3874 20.2664 16.9529 19.1435 16.9529V17.7529C20.056 17.7529 20.9057 18.1044 21.543 18.7417L22.1087 18.176ZM24.7671 34.6C24.5608 34.6 24.3636 34.5183 24.2196 34.3728L23.651 34.9355C23.947 35.2346 24.3497 35.4 24.7671 35.4V34.6ZM24.2184 34.3715L15.0795 25.2186L14.5134 25.7838L23.6522 34.9367L24.2184 34.3715ZM15.0796 25.2186C12.8401 22.9748 12.8401 19.3229 15.0796 17.079L14.5134 16.5139C11.9622 19.0701 11.9622 23.2276 14.5134 25.7837L15.0796 25.2186ZM15.0793 17.0793C16.1617 15.997 17.6033 15.4 19.1435 15.4V14.6C17.392 14.6 15.7466 15.2807 14.5136 16.5136L15.0793 17.0793ZM19.1435 15.4C20.6838 15.4 22.1266 15.997 23.2076 17.0792L23.7736 16.5138C22.5417 15.2806 20.895 14.6 19.1435 14.6V15.4ZM23.2075 17.0791L24.484 18.3579L25.0502 17.7927L23.7737 16.5139L23.2075 17.0791ZM25.05 18.358L26.3265 17.0804L25.7606 16.5149L24.4841 17.7926L25.05 18.358ZM26.3265 17.0803C27.4088 15.997 28.8504 15.4 30.3918 15.4V14.6C28.639 14.6 26.9936 15.2807 25.7605 16.5149L26.3265 17.0803ZM30.3918 15.4C31.9309 15.4 33.3736 15.997 34.4547 17.0792L35.0206 16.5138C33.7888 15.2806 32.1421 14.6 30.3918 14.6V15.4ZM34.4546 17.0791C36.6951 19.323 36.6951 22.9748 34.4557 25.2186L35.0219 25.7837C37.5731 23.2276 37.5731 19.07 35.0207 16.5138L34.4546 17.0791ZM34.4557 25.2186L25.3169 34.3727L25.8831 34.9379L35.0219 25.7838L34.4557 25.2186ZM25.3172 34.3725C25.1712 34.5184 24.9742 34.6 24.7671 34.6V35.4C25.1858 35.4 25.5865 35.2345 25.8828 34.9381L25.3172 34.3725Z" fill="white" mask="url(#path-2-inside-1_0_465)" />
                                    </svg>
                                </button>
                            </div>
                            <div className=' info'>
                                <h3 className='mt-12 mb-4 text-xl font-medium sm:mt-6'>Product Details</h3>
                                <p className='text-base font-normal leading-6' style={{ background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%)' }}>
                                    {data.data.description.length > 250
                                        ? `${data.data.description.substring(0, 250)} ...`
                                        : data.data.description}
                                </p>
                                <div className=' flex items-center justify-center p-4 border  border-[#DEDEDE] cursor-pointer'>
                                    <p className='text-base font-medium'>Show More Details</p>
                                </div>
                            </div>
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
