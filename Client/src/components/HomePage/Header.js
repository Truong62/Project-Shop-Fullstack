import React, { useState } from 'react';
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux';
import { selectCart } from '../../redux/Slice/cartSlice';
import { selectLike } from '../../redux/Slice/likeSlice';
import lodash from "lodash"
import SreachProduct from '../API/SreachProduct';

const Header = () => {
    const [query, setQuery] = useState("");

    const handleUpdate = lodash.debounce((e) => {
        setQuery(e.target.value)
    }, 200);

    const productCart = useSelector(selectCart);
    const numberProductCart = productCart.cartItems.length;

    const productLike = useSelector(selectLike);
    const numberProductLike = productLike.likeProductItems.length;

    return (
        <header className="sticky top-0 z-50">
            <div className="flex items-center justify-between w-full bg-black px-28 sm:px-5">
                <div className="flex items-center justify-center">
                    <Link to={"/"} className='p-3'>
                        <img src="https://yt3.googleusercontent.com/HnAnUZS7d8LFtPHaHRtPH9nMoUmrsBBy_FDD-T-YQIycPW55peuWo1NO_rxPIswDbukXYlk7=s176-c-k-c0x00ffffff-no-rj"
                            className='h-[50px] rounded-full mr-5' alt="" />
                    </Link>
                    <Link to={"/products-football"} className=' sm:hidden text-white w-[100px] text-center leading-fullheader hover:bg-[#F5F5F5] hover:scale-105 hover:transition-all duration-500 hover:text-black cursor-pointer'>Men</Link>
                    <Link to={"/products-football"} className=' sm:hidden text-white w-[100px] text-center leading-fullheader hover:bg-[#F5F5F5] hover:scale-105 hover:transition-all duration-500 hover:text-black cursor-pointer'>Women</Link>
                </div>
                <div className='relative flex items-center justify-center p-5 sm:hidden'>
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className='m-3 cursor-pointer'>
                        <path fillRule="evenodd" clipRule="evenodd" d="M7.05405 15.1081C3.15821 15.1081 -1.49012e-08 11.9499 -1.49012e-08 8.05405C-1.49012e-08 4.15821 3.15821 1 7.05405 1C10.9499 1 14.1081 4.15821 14.1081 8.05405C14.1081 9.73914 13.5173 11.2862 12.5314 12.4994L17.7863 17.7543C18.0712 18.0392 18.0712 18.5013 17.7863 18.7863C17.5013 19.0712 17.0393 19.0712 16.7543 18.7863L11.4994 13.5314C10.2862 14.5173 8.73914 15.1081 7.05405 15.1081ZM7.05405 13.6486C10.1439 13.6486 12.6486 11.1439 12.6486 8.05405C12.6486 4.96424 10.1439 2.45946 7.05405 2.45946C3.96424 2.45946 1.45946 4.96424 1.45946 8.05405C1.45946 11.1439 3.96424 13.6486 7.05405 13.6486Z" fill="#BEBEBE" />
                        <path d="M12.5314 12.4994L12.3546 12.6762L12.1952 12.5168L12.3374 12.3418L12.5314 12.4994ZM17.7863 17.7543L17.6095 17.931L17.6095 17.931L17.7863 17.7543ZM17.7863 18.7863L17.963 18.963L17.963 18.963L17.7863 18.7863ZM16.7543 18.7863L16.5775 18.963L16.5775 18.963L16.7543 18.7863ZM11.4994 13.5314L11.3418 13.3374L11.5168 13.1952L11.6762 13.3546L11.4994 13.5314ZM0.25 8.05405C0.25 11.8118 3.29628 14.8581 7.05405 14.8581V15.3581C3.02014 15.3581 -0.25 12.088 -0.25 8.05405H0.25ZM7.05405 1.25C3.29628 1.25 0.25 4.29628 0.25 8.05405H-0.25C-0.25 4.02014 3.02014 0.75 7.05405 0.75V1.25ZM13.8581 8.05405C13.8581 4.29628 10.8118 1.25 7.05405 1.25V0.75C11.088 0.75 14.3581 4.02014 14.3581 8.05405H13.8581ZM12.3374 12.3418C13.2883 11.1715 13.8581 9.67965 13.8581 8.05405H14.3581C14.3581 9.79862 13.7462 11.4009 12.7254 12.6571L12.3374 12.3418ZM12.7082 12.3227L17.963 17.5775L17.6095 17.931L12.3546 12.6762L12.7082 12.3227ZM17.963 17.5775C18.3457 17.9601 18.3457 18.5804 17.963 18.963L17.6095 18.6095C17.7968 18.4221 17.7968 18.1184 17.6095 17.931L17.963 17.5775ZM17.963 18.963C17.5804 19.3457 16.9601 19.3457 16.5775 18.963L16.9311 18.6095C17.1184 18.7968 17.4221 18.7968 17.6095 18.6095L17.963 18.963ZM16.5775 18.963L11.3227 13.7082L11.6762 13.3546L16.9311 18.6095L16.5775 18.963ZM7.05405 14.8581C8.67965 14.8581 10.1715 14.2883 11.3418 13.3374L11.6571 13.7254C10.4009 14.7462 8.79862 15.3581 7.05405 15.3581V14.8581ZM12.8986 8.05405C12.8986 11.2819 10.2819 13.8986 7.05405 13.8986V13.3986C10.0058 13.3986 12.3986 11.0058 12.3986 8.05405H12.8986ZM7.05405 2.20946C10.2819 2.20946 12.8986 4.82617 12.8986 8.05405H12.3986C12.3986 5.10232 10.0058 2.70946 7.05405 2.70946V2.20946ZM1.20946 8.05405C1.20946 4.82617 3.82617 2.20946 7.05405 2.20946V2.70946C4.10232 2.70946 1.70946 5.10232 1.70946 8.05405H1.20946ZM7.05405 13.8986C3.82617 13.8986 1.20946 11.2819 1.20946 8.05405H1.70946C1.70946 11.0058 4.10232 13.3986 7.05405 13.3986V13.8986Z" fill="#BEBEBE" />
                    </svg>
                    <input type="text" placeholder='What are you looking for?'
                        className='w-[200px]  h-[30px] text-white bg-transparent focus:outline-none focus:ring-0'
                        onChange={handleUpdate} />
                    {query && <SreachProduct name={query} />}
                </div>
                <div className='flex items-center justify-center '>
                    <Link to={"/cart"} className="relative p-3 cursor-pointer cart">
                        <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.06324 1.5C6.82049 1.5 5.81324 2.505 5.81324 3.75H10.3132C10.3132 2.505 9.30599 1.5 8.06324 1.5ZM10.3132 5.25V6C10.3132 6.4125 10.6492 6.75 11.0632 6.75C11.4772 6.75 11.8132 6.4125 11.8132 6V5.25H12.7297C13.11 5.25 13.4295 5.535 13.4745 5.91L14.6212 15.66C14.6737 16.11 14.3257 16.5 13.8765 16.5H2.24999C1.80074 16.5 1.45274 16.11 1.50524 15.66L2.65199 5.91C2.69699 5.535 3.01649 5.25 3.39674 5.25H4.31324V6C4.31324 6.4125 4.64924 6.75 5.06324 6.75C5.47724 6.75 5.81324 6.4125 5.81324 6V5.25H10.3132ZM4.31324 3.75H3.39674C2.25599 3.75 1.29599 4.605 1.16249 5.7375L0.0157376 15.4875C-0.141762 16.8225 0.902988 18 2.24999 18H13.8765C15.2235 18 16.2682 16.8225 16.1107 15.4875L14.964 5.7375C14.8305 4.605 13.8705 3.75 12.7297 3.75H11.8132C11.8132 1.68 10.134 0 8.06324 0C5.99174 0 4.31324 1.68 4.31324 3.75Z" fill="white" />
                        </svg>
                        <div className='absolute top-0 flex items-center justify-center w-5 h-5 p-1 bg-yellow-400 rounded-full right-1'>
                            <p className='text-sm font-medium text-white'>{`${numberProductCart}`}</p>
                        </div>
                    </Link>
                    <div className="relative p-3 cursor-pointer like-icon">
                        <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="path-1-inside-1_0_87" fill="white">
                                <path fillRule="evenodd" clipRule="evenodd" d="M5.52918 2.11765C4.61435 2.11765 3.75671 2.47129 3.11506 3.114C1.78306 4.44812 1.78306 6.61977 3.11612 7.956L10.5904 15.4429L18.0656 7.956C19.3987 6.61977 19.3987 4.44812 18.0656 3.114C16.7824 1.82753 14.5207 1.82965 13.2374 3.114L11.34 5.01459C10.9419 5.41376 10.2388 5.41376 9.84071 5.01459L7.94329 3.11294C7.30165 2.47129 6.44506 2.11765 5.52918 2.11765ZM10.5904 18C10.3098 18 10.0398 17.8888 9.84176 17.6887L1.61682 9.45106C-0.538941 7.29106 -0.538941 3.77682 1.61682 1.61682C2.65871 0.574941 4.04788 0 5.52918 0C7.01047 0 8.40071 0.574941 9.44153 1.61682L10.5904 2.76776L11.7392 1.61788C12.7811 0.574941 14.1702 0 15.6526 0C17.1328 0 18.5231 0.574941 19.5639 1.61682C21.7207 3.77682 21.7207 7.29106 19.5649 9.45106L11.34 17.6898C11.1409 17.8888 10.872 18 10.5904 18Z" />
                            </mask>
                            <path fillRule="evenodd" clipRule="evenodd" d="M5.52918 2.11765C4.61435 2.11765 3.75671 2.47129 3.11506 3.114C1.78306 4.44812 1.78306 6.61977 3.11612 7.956L10.5904 15.4429L18.0656 7.956C19.3987 6.61977 19.3987 4.44812 18.0656 3.114C16.7824 1.82753 14.5207 1.82965 13.2374 3.114L11.34 5.01459C10.9419 5.41376 10.2388 5.41376 9.84071 5.01459L7.94329 3.11294C7.30165 2.47129 6.44506 2.11765 5.52918 2.11765ZM10.5904 18C10.3098 18 10.0398 17.8888 9.84176 17.6887L1.61682 9.45106C-0.538941 7.29106 -0.538941 3.77682 1.61682 1.61682C2.65871 0.574941 4.04788 0 5.52918 0C7.01047 0 8.40071 0.574941 9.44153 1.61682L10.5904 2.76776L11.7392 1.61788C12.7811 0.574941 14.1702 0 15.6526 0C17.1328 0 18.5231 0.574941 19.5639 1.61682C21.7207 3.77682 21.7207 7.29106 19.5649 9.45106L11.34 17.6898C11.1409 17.8888 10.872 18 10.5904 18Z" fill="white" />
                            <path d="M3.11506 3.114L3.32736 3.32596L3.32737 3.32596L3.11506 3.114ZM3.11612 7.956L2.90373 8.16788L2.90381 8.16795L3.11612 7.956ZM10.5904 15.4429L10.378 15.6549L10.5903 15.8676L10.8027 15.6549L10.5904 15.4429ZM18.0656 7.956L18.2779 8.16797L18.278 8.16788L18.0656 7.956ZM18.0656 3.114L17.8533 3.32587L17.8534 3.32605L18.0656 3.114ZM13.2374 3.114L13.0252 2.90196L13.0251 2.90205L13.2374 3.114ZM11.34 5.01459L11.1277 4.80263L11.1276 4.80274L11.34 5.01459ZM9.84071 5.01459L10.0531 4.80274L10.0531 4.80269L9.84071 5.01459ZM7.94329 3.11294L8.15566 2.90105L8.15543 2.90081L7.94329 3.11294ZM9.84176 17.6887L10.055 17.4777L10.0541 17.4767L9.84176 17.6887ZM1.61682 9.45106L1.40448 9.66298L1.40453 9.66303L1.61682 9.45106ZM1.61682 1.61682L1.40469 1.40469L1.40448 1.4049L1.61682 1.61682ZM9.44153 1.61682L9.65386 1.40489L9.65377 1.4048L9.44153 1.61682ZM10.5904 2.76776L10.378 2.9797L10.5903 3.19232L10.8026 2.9798L10.5904 2.76776ZM11.7392 1.61788L11.9514 1.82992L11.9514 1.82991L11.7392 1.61788ZM19.5639 1.61682L19.7762 1.40485L19.7761 1.4048L19.5639 1.61682ZM19.5649 9.45106L19.7773 9.66301L19.7773 9.66298L19.5649 9.45106ZM11.34 17.6898L11.5521 17.9019L11.5523 17.9017L11.34 17.6898ZM5.52918 1.81765C4.53547 1.81765 3.60122 2.20243 2.90275 2.90204L3.32737 3.32596C3.9122 2.74016 4.69323 2.41765 5.52918 2.41765V1.81765ZM2.90276 2.90204C1.45372 4.35338 1.45396 6.71465 2.90373 8.16788L3.3285 7.74412C2.11216 6.52488 2.1124 4.54286 3.32736 3.32596L2.90276 2.90204ZM2.90381 8.16795L10.378 15.6549L10.8027 15.231L3.32843 7.74405L2.90381 8.16795ZM10.8027 15.6549L18.2779 8.16797L17.8533 7.74403L10.3781 15.231L10.8027 15.6549ZM18.278 8.16788C19.7278 6.71464 19.7281 4.3533 18.2779 2.90195L17.8534 3.32605C19.0694 4.54293 19.0696 6.52489 17.8533 7.74412L18.278 8.16788ZM18.278 2.90213C16.8773 1.49794 14.4254 1.50055 13.0252 2.90196L13.4496 3.32604C14.616 2.15875 16.6874 2.15712 17.8533 3.32587L18.278 2.90213ZM13.0251 2.90205L11.1277 4.80263L11.5523 5.22654L13.4497 3.32595L13.0251 2.90205ZM11.1276 4.80274C10.8467 5.08438 10.334 5.08438 10.0531 4.80274L9.62829 5.22644C10.1436 5.74315 11.0371 5.74315 11.5524 5.22644L11.1276 4.80274ZM10.0531 4.80269L8.15566 2.90105L7.73093 3.32484L9.62834 5.22648L10.0531 4.80269ZM8.15543 2.90081C7.45705 2.20244 6.52396 1.81765 5.52918 1.81765V2.41765C6.36615 2.41765 7.14624 2.74015 7.73116 3.32507L8.15543 2.90081ZM10.5904 17.7C10.3889 17.7 10.196 17.6202 10.055 17.4777L9.62851 17.8997C9.88352 18.1574 10.2306 18.3 10.5904 18.3V17.7ZM10.0541 17.4767L1.82912 9.23909L1.40453 9.66303L9.62947 17.9007L10.0541 17.4767ZM1.82916 9.23913C-0.209721 7.19624 -0.209721 3.87164 1.82916 1.82875L1.40448 1.4049C-0.868161 3.68201 -0.868161 7.38587 1.40448 9.66298L1.82916 9.23913ZM1.82896 1.82896C2.81437 0.843541 4.12715 0.3 5.52918 0.3V-0.3C3.96861 -0.3 2.50304 0.306341 1.40469 1.40469L1.82896 1.82896ZM5.52918 0.3C6.93129 0.3 8.24504 0.843599 9.22929 1.82885L9.65377 1.4048C8.55637 0.306284 7.08965 -0.3 5.52918 -0.3V0.3ZM9.2292 1.82876L10.378 2.9797L10.8027 2.55583L9.65386 1.40489L9.2292 1.82876ZM10.8026 2.9798L11.9514 1.82992L11.5269 1.40585L10.3781 2.55573L10.8026 2.9798ZM11.9514 1.82991C12.9368 0.843546 14.2495 0.3 15.6526 0.3V-0.3C14.091 -0.3 12.6253 0.306336 11.5269 1.40586L11.9514 1.82991ZM15.6526 0.3C17.0536 0.3 18.3674 0.843577 19.3516 1.82885L19.7761 1.4048C18.6787 0.306305 17.212 -0.3 15.6526 -0.3V0.3ZM19.3516 1.8288C21.3915 3.87169 21.3915 7.19625 19.3526 9.23913L19.7773 9.66298C22.0499 7.38586 22.0499 3.68196 19.7762 1.40485L19.3516 1.8288ZM19.3526 9.2391L11.1277 17.4778L11.5523 17.9017L19.7773 9.66301L19.3526 9.2391ZM11.1279 17.4776C10.9852 17.6203 10.7926 17.7 10.5904 17.7V18.3C10.9514 18.3 11.2967 18.1573 11.5521 17.9019L11.1279 17.4776Z" fill="black" mask="url(#path-1-inside-1_0_87)" />
                        </svg>
                        <div className='absolute top-0 flex items-center justify-center w-5 h-5 p-1 bg-yellow-400 rounded-full right-1'>
                            <p className='text-sm font-medium text-white'>{`${numberProductLike}`}</p>
                        </div>
                    </div>
                    <div className="p-3 cursor-pointer about">
                        <div className='block text-sm '>
                            <p className='font-normal text-white sm:text-xs'>Having troubles? Call us: </p>
                            <p className='font-medium text-white sm:text-xs'>+44 (0) 2076604453</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;