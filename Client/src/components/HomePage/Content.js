import banner from './img/banner.jpg';
import release1 from "./img/Screenshot.png"
import release2 from "./img/Screenshot2.png"
import { Link } from "react-router-dom"
import FormContainer from '../common/FormContailer';
import GetProduct from '../API/GetProducts';
import Seemore from '../common/Seemore';
import { motion } from "framer-motion";

const Content = () => {

    return (
        <div>
            <div className='relative mt-10 banner '>
                <div className="box relative w-full h-full rounded-lg mix-blend-overlay -z-10 bg-gradient-to-t to-[#1a1919] from-[#1a1919] ">
                    <img src={banner}
                        alt=""
                        className="object-cover w-full h-full rounded-lg opacity-85"
                    />
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2 }}
                        className="absolute left-5 bottom-5 text-white m-10 w-[350px] ">
                        <h3 className='mb-6 text-2xl font-medium text-shadow'>Sweat-Wicking Performance</h3>
                        <span className='text-xl font-extralight text-shadow'>With a cropped silhouette for modern comfort that's made to move.</span>
                    </motion.div>
                </div>
            </div>
            <div className="mt-16 mb-10 list-product">
                <h1 className='mb-10 text-3xl font-bold'>Selling Fast</h1>
                <GetProduct className='grid-cols-4 gap-x-12 gap-y-10'></GetProduct>
            </div>
            <FormContainer>
                <Seemore to="/products-new-in" className='flex items-center justify-center p-3 border-solid border-2 border-[#DEDEDE] font-medium rounded-lg cursor-pointer' >Sell All Products</Seemore>
            </FormContainer>
            <div className="mt-16 mb-32 new-release">
                <h1 className='mt-10 mb-10 text-3xl font-bold'>New Release</h1>
                <div className='grid grid-cols-2 gap-4'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.9 }}
                        className='relative flex justify-start '>
                        <img className='flex-shrink-0 w-550 h-750' src={release1} alt="" />
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.2 }}
                            className='absolute bottom-0 flex items-center justify-center p-3 bg-white cursor-pointer drop-shadow-lg right-1'>
                            <Link to={"/products-new-in"} className='pr-3 w-[190px] '>
                                <h3 className='text-xl font-medium'>Paris Saint-Germain Home Kit</h3>
                                <span className='text-[#868686] font-normal text-sm'>20/21</span>
                            </Link>
                            <div className=''>
                                <svg width="25" height="12" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25 6L14.8843 0.431738L15.1199 11.9763L25 6ZM0.520404 7.49979L16.0223 7.18343L15.9815 5.18384L0.479596 5.50021L0.520404 7.49979Z" fill="black" />
                                </svg>

                            </div>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.9 }}
                        className='flex justify-end'>
                        <img className='flex-shrink-0 w-550 h-750' src={release2} alt="" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Content;
