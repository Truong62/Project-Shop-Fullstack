import React, { Fragment } from 'react';
import Header from '../HomePage/Header';
import FormContainer from '../common/FormContailer';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, selectCart, updateQuantity } from '../../redux/Slice/cartSlice';
import Dropdown from '../common/Dropdown';

const CartPageMain = () => {
    const productCart = useSelector(selectCart);
    const dispatch = useDispatch()

    // const totalProduct = productCart.cartItems.reduce((total, item) => total + item.price, 0);
    // console.log(totalProduct)
    const handleQuantityChange = (item, newQuantity) => {
        dispatch(updateQuantity({ _id: item._id, quantity: newQuantity }));
    };
    
    return (
        <Fragment>
            <Header></Header>
            <FormContainer>
                <div className='flex mt-24 '>
                    <div className='w-9/12 mr-3'>
                        <div className='w-full bg-[#F5F5F5] font-medium flex justify-between px-5 py-4 items-center'>
                            <p className='text-[#646464] '>Items in your bag will be reserved for 60 minutes</p>
                            <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M5.56073 4.50022L8.7805 1.28045C9.07375 0.987194 9.07375 0.513191 8.7805 0.219939C8.48725 -0.073313 8.01324 -0.073313 7.71999 0.219939L4.50022 3.43971L1.28045 0.219939C0.987194 -0.073313 0.513191 -0.073313 0.219939 0.219939C-0.073313 0.513191 -0.073313 0.987194 0.219939 1.28045L3.43971 4.50022L0.219939 7.71999C-0.073313 8.01324 -0.073313 8.48725 0.219939 8.7805C0.36619 8.92675 0.558191 9.00025 0.750193 9.00025C0.942194 9.00025 1.1342 8.92675 1.28045 8.7805L4.50022 5.56073L7.71999 8.7805C7.86624 8.92675 8.05824 9.00025 8.25025 9.00025C8.44225 9.00025 8.63425 8.92675 8.7805 8.7805C9.07375 8.48725 9.07375 8.01324 8.7805 7.71999L5.56073 4.50022Z" fill="#868686" />
                            </svg>
                        </div>
                        <p className='text-3xl font-medium text-black my-7'>Bag</p>
                        {productCart.cartItems.map((item, index) => (
                            <div key={index}>
                                <div className='flex justify-start my-8 product-in-cart' >
                                    <div className='w-4/12 h-full mr-8 '>
                                        <img src={`http://localhost:8000/api/products/image/${item.thumbnailURL}`} alt="" className='h-[300px] w-[320px] cursor-pointer object-cover' />
                                    </div>
                                    <div className='flex flex-col justify-between flex-1 w-8/12 h-[300px]'>
                                        <div>
                                            <p className='text-[#B02B2B] font-medium text-2xl'>{`$ ${item.price}`}</p>
                                            <p className='mt-3 text-xl font-normal text-black'>{item.name}</p>
                                        </div>
                                        <div className='flex items-center justify-start mt-12'>
                                            <Dropdown classNameItem="absolute bg-slate-50 px-5 pb-5 w-[210px] border border-[#DEDEDE] shadow-lg"
                                                className="w-[210px] border border-[#DEDEDE] p-4 mr-8" data={item.size} table={"Size"} status={false} tableStaus={true}></Dropdown>
                                            <input type="number" className='p-4 mt-3 mb-5 border border-[#DEDEDE]' placeholder='Quantity' onChange={(e) =>handleQuantityChange(item, e.target.value)} value={item.quantity} name='quantityOder' />
                                        </div>
                                        <div className='mt-auto cursor-pointer' onClick={() => dispatch(deleteProduct(item))}>
                                            <p className='text-[#FF4E4E] font-medium text-lg'>Remove this item</p>
                                        </div>
                                    </div>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="791" height="2" viewBox="0 0 791 2" fill="none">
                                    <path d="M0 1L790.5 1.5" stroke="#F3F3F3" />
                                </svg>
                            </div>
                        ))}
                    </div>
                    <div className='w-4/12 bg-[#F5F5F5] px-5'>
                            <h3 className='text-2xl font-medium mt-7'>Summary</h3>
                            <div className='flex justify-between mt-8'>
                                <p className='text-lg font-medium'>Subtotal</p>
                                <p className='text-lg font-medium'>{``}</p>
                            </div>
                    </div>
                </div>
            </FormContainer>
        </Fragment>
    );
};

export default CartPageMain;