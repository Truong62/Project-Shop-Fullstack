import banner from './img/banner.jpg';
import release1 from "./img/Screenshot.png"
import release2 from "./img/Screenshot2.png"
import { Link } from "react-router-dom"
import FormContainer from '../common/FormContailer';
import GetProduct from '../API/GetProducts';

const Content = () => {
    return (
        <div>
            <div className='relative mt-10 banner '>
                <div className="relative w-full h-full rounded-lg">
                    <img src={banner}
                        alt=""
                        className="object-cover w-full h-full rounded-lg "
                    />
                    <div className="absolute left-5 bottom-5 text-white m-10 w-[350px] ">
                        <h3 className='mb-6 text-2xl font-medium text-shadow'>Sweat-Wicking Performance</h3>
                        <span className='text-xl font-extralight text-shadow'>With a cropped silhouette for modern comfort that's made to move.</span>
                    </div>
                </div>
            </div>
            <div className="mt-16 mb-10 list-product">
                <h1 className='mb-10 text-3xl font-bold'>Selling Fast</h1>
              <GetProduct className='grid-cols-4 gap-x-12 gap-y-10'></GetProduct>
            </div>
            <FormContainer>
                <div className='flex items-center justify-center p-3 border-solid border-2 border-[#DEDEDE] font-medium rounded-lg cursor-pointer'>
                    <Link to={"/products-new-in"} className='mr-3 text-base'>Sell All Products</Link>
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.510466 10.1259C0.240103 10.3963 0.240103 10.8346 0.510466 11.105C0.780829 11.3754 1.21917 11.3754 1.48954 11.105L6.10492 6.48961C6.37528 6.21925 6.37528 5.7809 6.10492 5.51054L1.48954 0.895155C1.21917 0.624792 0.780829 0.624792 0.510466 0.895155C0.240103 1.16552 0.240103 1.60386 0.510466 1.87423L4.63631 6.00008L0.510466 10.1259Z" fill="black" />
                    </svg>
                </div>
            </FormContainer>
            <div className="mt-16 mb-32 new-release">
                <h1 className='mt-10 mb-10 text-3xl font-bold'>New Release</h1>
                <div className='grid grid-cols-2 gap-4'>
                    <div className='relative flex justify-start '>
                        <img className='flex-shrink-0 w-550 h-750' src={release1} alt="" />
                        <div className='absolute bottom-0 flex items-center justify-center p-3 bg-white cursor-pointer drop-shadow-lg right-1'>
                            <Link to={"/products-new-in"} className='pr-3 w-[190px] '>
                                <h3 className='text-xl font-medium'>Paris Saint-Germain Home Kit</h3>
                                <span className='text-[#868686] font-normal text-sm'>20/21</span>
                            </Link>
                            <div className=''>
                                <svg width="25" height="12" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25 6L14.8843 0.431738L15.1199 11.9763L25 6ZM0.520404 7.49979L16.0223 7.18343L15.9815 5.18384L0.479596 5.50021L0.520404 7.49979Z" fill="black" />
                                </svg>

                            </div>
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <img className='flex-shrink-0 w-550 h-750' src={release2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;
