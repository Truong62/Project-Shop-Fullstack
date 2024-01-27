import React, { Fragment, useEffect, useState } from 'react';
import Header from '../HomePage/Header';
import FormContainer from '../common/FormContailer';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, selectCart, updateQuantity, updateSizeProduct } from '../../redux/Slice/cartSlice';
import Dropdown from '../common/Dropdown';
import { Link } from 'react-router-dom';
import Footer from '../HomePage/Footer';

const CartPageMain = () => {
    const [isShow, setShow] = useState(true)
    const [isCheckSize, setCheckSize] = useState()
    const productCart = useSelector(selectCart);
    const dispatch = useDispatch()

    useEffect(() => {
        productCart.cartItems.forEach((item, index) => {
            if (item.sizeOrder === "" || item.sizeOrder === undefined || item.sizeOrder == null) {
                setCheckSize(false);
            } else {
                setCheckSize(true);
            }
        });
    }, [productCart.cartItems]);


    const totalAmount = productCart.cartItems.reduce((total, product) => {
        const price = parseFloat(product.price);
        const quantity = product.quantity;
        return total + price * quantity;
    }, 0);
    const handleQuantityChange = (item, newQuantity) => {
        dispatch(updateQuantity({ _id: item._id, quantity: newQuantity }));
    };
    const handleSizeChange = (item, newSize) => {
        dispatch(updateSizeProduct({ _id: item._id, sizeOrder: newSize }));
    };
    return (
        <Fragment>
            <Header></Header>
            <FormContainer>
                <div className='flex mt-24 sm:mt-12 sm:flex-col'>
                    <div className='w-9/12 mr-3 sm:w-full'>
                        <div className={isShow ? 'w-full bg-[#F5F5F5] font-medium flex justify-between px-5 py-4 items-center' : 'hidden'}>
                            <p className='text-[#646464] '>Items in your bag will be reserved for 60 minutes</p>
                            <svg onClick={() => { setShow(!isShow) }} className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M5.56073 4.50022L8.7805 1.28045C9.07375 0.987194 9.07375 0.513191 8.7805 0.219939C8.48725 -0.073313 8.01324 -0.073313 7.71999 0.219939L4.50022 3.43971L1.28045 0.219939C0.987194 -0.073313 0.513191 -0.073313 0.219939 0.219939C-0.073313 0.513191 -0.073313 0.987194 0.219939 1.28045L3.43971 4.50022L0.219939 7.71999C-0.073313 8.01324 -0.073313 8.48725 0.219939 8.7805C0.36619 8.92675 0.558191 9.00025 0.750193 9.00025C0.942194 9.00025 1.1342 8.92675 1.28045 8.7805L4.50022 5.56073L7.71999 8.7805C7.86624 8.92675 8.05824 9.00025 8.25025 9.00025C8.44225 9.00025 8.63425 8.92675 8.7805 8.7805C9.07375 8.48725 9.07375 8.01324 8.7805 7.71999L5.56073 4.50022Z" fill="#868686" />
                            </svg>
                        </div>
                        <p className='text-3xl font-medium text-black my-7'>Bag</p>
                        {productCart.cartItems.map((item, index) => (
                            <div key={index}>
                                <div className='flex justify-start my-8 product-in-cart' >
                                    <div className='w-4/12 h-full mr-8 sm:mr-4 sm:h-[150px]'>
                                        <img src={`https://nntshop.onrender.com/api/products/image/${item.thumbnailURL}`} alt="" className='h-[300px] sm:h-[150px] w-[320px] cursor-pointer object-cover' />
                                    </div>
                                    <div className='flex flex-col justify-between flex-1 w-8/12 h-[300px] sm:h-[150px]'>
                                        <div>
                                            <p className='text-xl font-normal text-black sm:text-base'>{item.name}</p>
                                            <p className='mt-3 text-[#B02B2B] font-medium text-2xl sm:text-lg sm:mt-2'>{`$ ${item.price}`}</p>
                                        </div>
                                        <div className='flex items-center justify-start mt-12 sm:mt-1'>
                                            <Dropdown
                                                classNameItem="absolute bg-slate-50 px-5 pb-5 sm:w-[100px] w-[220px] border border-[#DEDEDE] shadow-lg"
                                                onClick={(size) => handleSizeChange(item, size)}
                                                className="sm:w-[100px] w-[220px] border border-[#DEDEDE] p-4 mr-8 sm:p-1"
                                                data={item.size}
                                                table={"Size"}
                                                status={false}
                                                classNameTable="sm:text-sm"
                                                tableStaus={true}></Dropdown>
                                            <input type="number" className='p-4 sm:text-sm sm:p-1 sm:w-[100px] mt-3 mb-5 sm:m-0 border border-[#DEDEDE]' placeholder='Quantity' onChange={(e) => handleQuantityChange(item, e.target.value)} value={item.quantity} name='quantityOder' />
                                        </div>
                                        <div className='mt-auto cursor-pointer' onClick={() => dispatch(deleteProduct(item))}>
                                            <p className='text-[#FF4E4E] font-medium text-lg sm:text-base'>Remove this item</p>
                                        </div>
                                    </div>
                                </div>
                                <svg className='sm:w-full sm:mb-6' xmlns="http://www.w3.org/2000/svg" width="791" height="2" viewBox="0 0 791 2" fill="none">
                                    <path d="M0 1L790.5 1.5" stroke="#F3F3F3" />
                                </svg>
                            </div>
                        ))}
                    </div>
                    <div className='w-4/12 h-[450px] bg-[#F5F5F5] px-5 sm:w-full'>
                        <h3 className='text-2xl font-medium mt-7'>Summary</h3>
                        <div className='flex justify-between mt-8'>
                            <p className='text-lg font-medium'>Subtotal</p>
                            <p className='text-lg font-normal'>{`$ ${totalAmount.toFixed(2)}`}</p>
                        </div>
                        <div className='flex justify-between mt-5 mb-8'>
                            <p className='text-lg font-medium'>Delivery</p>
                            <p className='text-lg font-normal'>{`$ 0`}</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="340" height="3" viewBox="0 0 340 3" fill="none">
                            <path d="M0 1.39247L340 1.60753" stroke="#DADADA" />
                        </svg>
                        <div className='flex justify-between mt-5'>
                            <p className='text-lg font-medium'>Total</p>
                            <p className='text-lg font-medium'>{`$ ${totalAmount.toFixed(2)}`}</p>
                        </div>
                        {isCheckSize ?
                            <Link to={"/checkout"} >
                                <div className='py-4 text-center text-white bg-black cursor-pointer mt-9'>
                                    <button className='text-base font-medium'>Checkout</button>
                                </div>
                            </Link>
                            :
                            <div className='py-4 text-center text-black bg-gray-300 border border-red-400 cursor-not-allowed mt-9'>
                                <button className='text-base font-medium cursor-not-allowed'>Checkout</button>
                            </div>
                        }
                        <div className='flex items-center justify-center py-4 mt-6 bg-white cursor-pointer'>
                            <img srcSet="./Bitmap.png 2x" alt="" />
                        </div>
                    </div>
                </div>
                <Link to={"/products-new-in"} className='flex items-center mt-5'>
                    <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.55824 0.231232C5.86655 0.53954 5.86655 1.03941 5.55824 1.34772L2.69543 4.21053H15.5263C15.9623 4.21053 16.3158 4.56399 16.3158 5C16.3158 5.43601 15.9623 5.78947 15.5263 5.78947H2.69543L5.55824 8.65228C5.86655 8.96059 5.86655 9.46046 5.55824 9.76877C5.24993 10.0771 4.75007 10.0771 4.44176 9.76877L0.231231 5.55824C0.0789305 5.40594 0.00186445 5.2069 3.31491e-05 5.00729C1.12027e-05 5.00486 0 5.00243 0 5C0 4.99757 1.12027e-05 4.99514 3.3149e-05 4.99271C0.000977177 4.88832 0.022181 4.78877 0.059904 4.6978C0.0984301 4.60469 0.155539 4.51745 0.231231 4.44176L4.44176 0.231232C4.75007 -0.077077 5.24993 -0.077077 5.55824 0.231232Z" fill="#868686" />
                    </svg>
                    <p className='text-[#868686] font-medium text-sm ml-4'>Continue shopping</p>
                </Link>
            </FormContainer>
            <Footer className={"mt-44 sm:mt-20"}></Footer>
        </Fragment>
    );
};

export default CartPageMain;