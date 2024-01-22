
import React, { Fragment, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectCart, resetCart } from '../../redux/Slice/cartSlice';
import FormContainer from '../common/FormContailer';
import InputFrom from '../common/InputFrom';
import CreateOrder from '../API/CreateOrder';

const Checkout = () => {
    const dispatch = useDispatch()
    const productCart = useSelector(selectCart);
    const totalAmount = productCart.cartItems.reduce((total, product) => {
        const price = parseFloat(product.price);
        const quantity = product.quantity;
        return total + price * quantity;
    }, 0);
    const [checkDataCustomers, setCheckDataCustomers] = useState(true)
    const [Customers, setCustomers] = useState({
        name: "",
        address: "",
        phone: "",
        email: "",
    })
    const [validation, setValidation] = useState({
        name: true,
        address: true,
        phone: true,
        email: true,
    });
    const handleInputChange = (e) => {
        setCustomers({
            ...Customers,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        const newValidation = {
            name: Customers.name !== "",
            address: Customers.address !== "",
            phone: /^\d{10}$/.test(Customers.phone),
            email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Customers.email),
        };
        setValidation(newValidation);
    };
    const history = useNavigate();
    useEffect(() => {
        if (validation.name && validation.address && validation.phone && validation.email) {
            setCheckDataCustomers(true)
            let orderSuccess = CreateOrder(Customers, productCart);
            orderSuccess.then((r) => {
                if (r === undefined || r === "" || r === null) {
                    console.log("hahah")
                } else {
                    dispatch(resetCart());
                    history('/');
                }
            })

        }
        if (!validation.name || !validation.address || !validation.phone || !validation.email) {
            setCheckDataCustomers(false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [validation]);

    const handleConfirmPayment = async () => {
        await handleSubmit();
    };

    return (
        <Fragment>
            <div className='flex items-center justify-between px-20 border-b border-[#DEDEDE]'>
                <Link to={"/"} className='p-3'>
                    <img src="https://yt3.googleusercontent.com/HnAnUZS7d8LFtPHaHRtPH9nMoUmrsBBy_FDD-T-YQIycPW55peuWo1NO_rxPIswDbukXYlk7=s176-c-k-c0x00ffffff-no-rj" className='h-[50px] rounded-full mr-8' alt="" />
                </Link>
                <h3 className='text-2xl font-medium text-black'>CHECKOUT</h3>
                <div className='flex text-sm'>
                    <p className='text-[#646464] font-normal '>Having troubles? Call us: </p>
                    <p className='font-medium text-black'>+44 (0) 2076604453</p>
                </div>
            </div>
            <FormContainer>
                <div className='flex justify-between mt-9 '>
                    <div className='w-9/12 px-5 py-8 mr-3 border border-[#DEDEDE] rounded-md'>
                        <p className='mb-5 text-lg font-medium text-black'>Payment method</p>
                        <div className='flex mb-8 select-none'>
                            <div className='flex items-center justify-center border border-[#DEDEDE] p-4 cursor-not-allowed mr-8'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.3387 0C11.5587 0 13.1475 0.5375 14.0575 1.59625C14.9275 2.60625 15.1962 3.73125 14.9587 5.36L14.895 5.72125C14.1762 9.49125 11.7975 11.4038 7.82995 11.4038H6.19745C6.11995 11.4038 6.0512 11.4637 6.03245 11.5475L5.1137 17.5H1.14245C0.822454 17.5 0.517454 17.36 0.308704 17.115C0.0962039 16.8675 0.00245392 16.54 0.0512039 16.2162L2.3687 1.21625C2.4787 0.51125 3.0687 0 3.7737 0H9.3387ZM13.6675 5.48375L13.7237 5.165C13.9062 3.91375 13.7362 3.1375 13.1112 2.41125C12.4475 1.64 11.1775 1.25 9.33745 1.25H3.7737C3.6887 1.25 3.61745 1.31625 3.6037 1.4075L1.3112 16.25H4.04245L4.7962 11.3675C4.7962 11.365 4.7962 11.3638 4.79745 11.3625L4.8237 11.1912L4.8337 11.1938C5.0062 10.5813 5.55495 10.1525 6.1987 10.1525H7.8312C11.16 10.1525 13.0687 8.625 13.6675 5.48375Z" fill="#646464" />
                                    <path d="M7.29404 13.873L7.31916 13.6985L8.55641 13.8766L8.53129 14.0511L7.29404 13.873Z" fill="#646464" />
                                    <path d="M16.5588 4.08875C16.0663 3.52375 15.3713 3.1025 14.4926 2.83875L14.1338 4.03625C14.7826 4.23125 15.2813 4.525 15.6138 4.9075C16.2326 5.6275 16.4076 6.4275 16.2226 7.65875C16.2226 7.65875 16.1888 7.85999 16.1613 7.98375C15.5688 11.1237 13.6613 12.65 10.3263 12.65H8.70131C8.00131 12.65 7.41006 13.16 7.29631 13.8675L6.54131 18.75H3.80631L4.08131 16.97L2.84631 16.78L2.54381 18.735C2.50381 19.06 2.60381 19.385 2.81756 19.6275C3.02756 19.865 3.32631 20 3.63881 20H7.61256L8.53006 14.0625C8.54381 13.9812 8.60631 13.9 8.70131 13.9H10.3263C14.3026 13.9 16.6788 11.9875 17.3838 8.23875C17.4126 8.115 17.4551 7.86625 17.4563 7.855C17.6976 6.25375 17.4213 5.09375 16.5588 4.08875Z" fill="#646464" />
                                </svg>
                                <p className='ml-3 text-[#646464] font-medium text-sm'>Paypal</p>
                            </div>
                            <div className='flex items-center justify-center border border-[#DEDEDE] p-4 cursor-not-allowed mr-8'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 20 15" fill="none" style={{ fill: 'gray' }}>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M2.14226 0.0112305H17.8522C19.0353 0.0112305 19.9944 0.970352 19.9944 2.15349V12.1507C19.9944 13.3338 19.0353 14.2929 17.8522 14.2929H2.14226C0.959121 14.2929 0 13.3338 0 12.1507V2.15349C0 0.970352 0.959121 0.0112305 2.14226 0.0112305ZM17.8521 12.8648C18.2465 12.8648 18.5662 12.5451 18.5662 12.1507V7.86617H1.42816V12.1507C1.42816 12.5451 1.74787 12.8648 2.14226 12.8648H17.8521ZM18.5662 6.43801H1.42816V5.00985H18.5662V6.43801ZM1.42816 3.58165H18.5662H18.5663V2.15349C18.5663 1.7591 18.2466 1.43939 17.8522 1.43939H2.14226C1.74787 1.43939 1.42816 1.7591 1.42816 2.15349V3.58165Z" fill="gray" />
                                    <path d="M16.424 9.29431H13.5676C13.1732 9.29431 12.8535 9.61402 12.8535 10.0084C12.8535 10.4028 13.1732 10.7225 13.5676 10.7225H16.424C16.8184 10.7225 17.1381 10.4028 17.1381 10.0084C17.1381 9.61402 16.8184 9.29431 16.424 9.29431Z" fill="gray" />
                                </svg>

                                <p className='ml-3 text-[#646464] font-medium text-sm'>Credit Card</p>
                            </div>
                            <div className='flex items-center justify-center border border-[#000] p-4 cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ fill: 'black' }}>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M2.92891 17.0711C4.81766 18.9598 7.32891 20 10 20C12.6711 20 15.1824 18.9599 17.0711 17.0711C18.9598 15.1823 20 12.6711 20 10C20 7.32891 18.9598 4.81766 17.0711 2.92891C15.1823 1.04016 12.6711 0 10 0C7.32891 0 4.81762 1.04012 2.92891 2.92891C1.0402 4.8177 0 7.32891 0 10C0 12.6711 1.04016 15.1823 2.92891 17.0711ZM1.25 10C1.25 5.17523 5.17523 1.25 10 1.25C14.8248 1.25 18.75 5.17523 18.75 10C18.75 14.8248 14.8248 18.75 10 18.75C5.17523 18.75 1.25 14.8248 1.25 10Z" fill="black" />
                                    <path d="M10 9.375C9.13844 9.375 8.4375 8.67406 8.4375 7.8125C8.4375 6.95094 9.13844 6.25 10 6.25C10.8616 6.25 11.5625 6.95094 11.5625 7.8125C11.5625 8.15766 11.8423 8.4375 12.1875 8.4375C12.5327 8.4375 12.8125 8.15766 12.8125 7.8125C12.8125 6.47652 11.8759 5.35594 10.625 5.07086V4.375C10.625 4.02984 10.3452 3.75 10 3.75C9.6548 3.75 9.375 4.02984 9.375 4.375V5.07086C8.12414 5.35594 7.1875 6.47652 7.1875 7.8125C7.1875 9.36332 8.44918 10.625 10 10.625C10.8616 10.625 11.5625 11.3259 11.5625 12.1875C11.5625 13.0491 10.8616 13.75 10 13.75C9.13844 13.75 8.4375 13.0491 8.4375 12.1875C8.4375 11.8423 8.1577 11.5625 7.8125 11.5625C7.4673 11.5625 7.1875 11.8423 7.1875 12.1875C7.1875 13.5235 8.12414 14.6441 9.375 14.9291V15.625C9.375 15.9702 9.6548 16.25 10 16.25C10.3452 16.25 10.625 15.9702 10.625 15.625V14.9291C11.8759 14.6441 12.8125 13.5235 12.8125 12.1875C12.8125 10.6367 11.5508 9.375 10 9.375Z" fill="black" />
                                </svg>
                                <p className='ml-3 text-[#000] font-medium text-sm'>Cash On Delivery</p>
                            </div>
                        </div>
                        <p className='mb-5 text-lg font-medium text-black'>Add Payment Details</p>
                        <InputFrom checkvalidate={validation.name} nameLabel="Customers" type="text" idInput="customerName" name="name" placeholder="input mame customer ..." handleInputChange={handleInputChange}></InputFrom>
                        <InputFrom checkvalidate={validation.address} nameLabel="Address" type="text" idInput="customerAddress" name="address" placeholder="input address customer ..." handleInputChange={handleInputChange}></InputFrom>
                        <InputFrom checkvalidate={validation.phone} nameLabel="Phone" type="text" idInput="customerPhone" name="phone" placeholder="input phone customer ..." handleInputChange={handleInputChange}></InputFrom>
                        <InputFrom checkvalidate={validation.email} nameLabel="Email" type="email" idInput="customerEmail" name="email" placeholder="input email customer..." handleInputChange={handleInputChange}></InputFrom>
                    </div>
                    <div className='w-4/12 px-5 border border-[#DEDEDE] rounded-md'>
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
                            <p className='text-lg font-medium'>Total to pay</p>
                            <p className='text-lg font-semibold text-[#B02B2B] pb-8'>{`$ ${totalAmount.toFixed(2)}`}</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-6 cursor-pointer">
                    <div className="px-6 py-4 text-white bg-black rounded-sm">
                        <Link to={"/cart"} className="font-normal">BACK</Link>
                    </div>
                    {!checkDataCustomers && <div>ERROR</div>}
                    <div onClick={handleConfirmPayment} className="px-6 py-4 text-white bg-black rounded-sm">
                        <p className="font-normal">Confirm Payment: {totalAmount.toFixed(2)}</p>
                    </div>
                </div>
            </FormContainer>
        </Fragment>
    );
};

export default Checkout;
