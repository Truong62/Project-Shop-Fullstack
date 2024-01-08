import React, { useEffect, useRef, useState } from 'react';
import FormContainer from '../common/FormContailer';
import GetProduct from '../API/GetProducts';
import Select from '../common/Select';
import Seemore from '../common/Seemore';



const ContentProductPage = () => {
    // const [tabPage, setTabPage] = useState("")
    const [show, setShow] = useState(false);
    const [showSidebarGender, setshowSidebarGender] = useState(true);
    const [showSidebarPrice, setshowSidebarPrice] = useState(true);
    const [showSidebarSize, setshowSidebarSize] = useState(true);
    const [showSidebarFootball, setshowSidebarFootball] = useState(true);
    const [showSidebarType, setshowSidebarType] = useState(true);
    const [arrange, setArrange] = useState("Ascending");
    const RefDrop = useRef(null);

    const ChangeArrange = (value) => {
        setArrange(value)
        setShow(false);
    }

    useEffect(() => {
        const handleClick = (e) => {
            if (RefDrop.current && !RefDrop.current.contains(e.target)) {
                setShow(false);
            }
        };

        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, []);
    return (
        <FormContainer className='pt-10'>
            <div className='flex justify-between'>
                <div className='action-page'>
                    <div className='flex'>
                        <h3 className='p-2 pl-0'>Women </h3>
                        <h3 className='p-2'> / Football </h3>
                        <h3 className='p-2 text-gray-500'> / Jerseys </h3>
                    </div>
                    <h1 className='text-3xl font-bold '>Women's Jerseys</h1>
                </div>
                <div className='relative' ref={RefDrop}>
                    <div
                        className="flex items-center justify-center w-full p-5 border border-gray-400 cursor-pointer"
                        onClick={() => {
                            setShow(!show);
                        }}>
                        <h3 className='font-normal text-base mr-4 w-[100px]'>{arrange}</h3>
                        <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.57575 0.270363C1.21527 -0.090121 0.63081 -0.090121 0.270326 0.270363C-0.0901585 0.630847 -0.0901585 1.21531 0.270326 1.57579L6.42417 7.72964C6.78466 8.09012 7.36912 8.09012 7.7296 7.72964L13.8834 1.57579C14.2439 1.21531 14.2439 0.630847 13.8834 0.270363C13.523 -0.090121 12.9385 -0.090121 12.578 0.270363L7.07689 5.7715L1.57575 0.270363Z" fill="black" />
                        </svg>
                    </div>
                    {show &&
                        (<div className="absolute w-full bg-white border border-gray-400 shadow-lg cursor-pointer">
                            <div className="p-5 cursor-pointer" onClick={() => ChangeArrange("Ascending")}>Ascending</div>
                            <div className="p-5 cursor-pointer" onClick={() => ChangeArrange("Decrease")}>Decrease</div>
                            <div className="p-5 cursor-pointer" onClick={() => ChangeArrange("Hot")}>Hot</div>
                        </div>
                        )}
                </div>
            </div>
            <div className='grid grid-cols-3 gap-4 mt-10'>
                <div className='col-span-1 sidebar'>
                    <Select className='select-gender' >
                        <div
                            className="  cursor-pointer flex justify-between items-center w-[230px]"
                            onClick={() => {
                                setshowSidebarGender(!showSidebarGender);
                            }}>
                            <h3 className='font-normal text-base mr-4 w-[100px]'>Gender</h3>
                            <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.57575 0.270363C1.21527 -0.090121 0.63081 -0.090121 0.270326 0.270363C-0.0901585 0.630847 -0.0901585 1.21531 0.270326 1.57579L6.42417 7.72964C6.78466 8.09012 7.36912 8.09012 7.7296 7.72964L13.8834 1.57579C14.2439 1.21531 14.2439 0.630847 13.8834 0.270363C13.523 -0.090121 12.9385 -0.090121 12.578 0.270363L7.07689 5.7715L1.57575 0.270363Z" fill="black" />
                            </svg>
                        </div>
                        {showSidebarGender &&
                            (<div className="cursor-pointer ">
                                <div className="flex items-center mt-5 text-black cursor-pointer" >
                                    <input className='w-5 h-5 checked:bg-black focus:bg-black' type="checkbox" id="Male" name="Male" value="Male" />
                                    <label className='pl-3' for="Male">Male</label>
                                </div>
                                <div className="flex items-center mt-2 text-black cursor-pointer" >
                                    <input className='w-5 h-5 checked:bg-black focus:bg-black' type="checkbox" id="Female" name="Female" value="Female" />
                                    <label className='pl-3' for="Female">Female</label>
                                </div>
                            </div>
                            )}
                    </Select>
                    <svg width="230" height="2" viewBox="0 0 230 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1H230" stroke="#F3F3F3" />
                    </svg>
                    <Select className='select-price' >
                        <div
                            className="  cursor-pointer flex justify-between items-center w-[230px]"
                            onClick={() => {
                                setshowSidebarPrice(!showSidebarPrice);
                            }}>
                            <h3 className='font-normal text-base mr-4 w-[100px]'>Price Range</h3>
                            <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.57575 0.270363C1.21527 -0.090121 0.63081 -0.090121 0.270326 0.270363C-0.0901585 0.630847 -0.0901585 1.21531 0.270326 1.57579L6.42417 7.72964C6.78466 8.09012 7.36912 8.09012 7.7296 7.72964L13.8834 1.57579C14.2439 1.21531 14.2439 0.630847 13.8834 0.270363C13.523 -0.090121 12.9385 -0.090121 12.578 0.270363L7.07689 5.7715L1.57575 0.270363Z" fill="black" />
                            </svg>
                        </div>
                        {showSidebarPrice &&
                            (<div className="cursor-pointer ">
                                <div className="flex items-center mt-5 text-black cursor-pointer" >
                                    <input className='w-5 h-5 checked:bg-black focus:bg-black' type="checkbox" id="Below $50" name="Below $50" value="Below $50" />
                                    <label className='pl-3' for="Below $50">Below $50</label>
                                </div>
                                <div className="flex items-center mt-2 text-black cursor-pointer" >
                                    <input className='w-5 h-5 checked:bg-black focus:bg-black' type="checkbox" id="Above $50" name="Above $50" value="Above $50" />
                                    <label className='pl-3' for="Above $50">Above $50</label>
                                </div>
                            </div>
                            )}
                    </Select>
                    <svg width="230" height="2" viewBox="0 0 230 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1H230" stroke="#F3F3F3" />
                    </svg>
                    <Select className='select-size' >
                        <div
                            className="  cursor-pointer flex justify-between items-center w-[230px]"
                            onClick={() => {
                                setshowSidebarSize(!showSidebarSize);
                            }}>
                            <h3 className='font-normal text-base mr-4 w-[100px]'>Size</h3>
                            <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.57575 0.270363C1.21527 -0.090121 0.63081 -0.090121 0.270326 0.270363C-0.0901585 0.630847 -0.0901585 1.21531 0.270326 1.57579L6.42417 7.72964C6.78466 8.09012 7.36912 8.09012 7.7296 7.72964L13.8834 1.57579C14.2439 1.21531 14.2439 0.630847 13.8834 0.270363C13.523 -0.090121 12.9385 -0.090121 12.578 0.270363L7.07689 5.7715L1.57575 0.270363Z" fill="black" />
                            </svg>
                        </div>
                        {showSidebarSize &&
                            (<div className="cursor-pointer ">
                                <div className="flex items-center mt-5 text-black cursor-pointer" >
                                    <input className='w-5 h-5 checked:bg-black focus:bg-black' type="checkbox" id="XS (UK 4-6)" name="XS (UK 4-6)" value="XS (UK 4-6)" />
                                    <label className='pl-3' for="XS (UK 4-6)">XS (UK 4-6)</label>
                                </div>
                                <div className="flex items-center mt-2 text-black cursor-pointer" >
                                    <input className='w-5 h-5 checked:bg-black focus:bg-black' type="checkbox" id="S (UK 8-10)" name="S (UK 8-10)" value="S (UK 8-10)" />
                                    <label className='pl-3' for="S (UK 8-10)">S (UK 8-10)</label>
                                </div>
                                <div className="flex items-center mt-2 text-black cursor-pointer" >
                                    <input className='w-5 h-5 checked:bg-black focus:bg-black' type="checkbox" id="M (UK 12-14)" name="M (UK 12-14)" value="M (UK 12-14)" />
                                    <label className='pl-3' for="M (UK 12-14)">M (UK 12-14)</label>
                                </div>
                                <div className="flex items-center mt-2 text-black cursor-pointer" >
                                    <input className='w-5 h-5 checked:bg-black focus:bg-black' type="checkbox" id="L (UK 12-14)" name="L (UK 12-14)" value="L (UK 12-14)" />
                                    <label className='pl-3' for="L (UK 12-14)">L (UK 12-14)</label>
                                </div>
                            </div>
                            )}
                    </Select>

                    <svg width="230" height="2" viewBox="0 0 230 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1H230" stroke="#F3F3F3" />
                    </svg>
                    <Select className='select-football' >
                        <div
                            className="  cursor-pointer flex justify-between items-center w-[230px]"
                            onClick={() => {
                                setshowSidebarFootball(!showSidebarFootball);
                            }}>
                            <h3 className='font-normal text-base mr-4 w-[100px]'>Football Team</h3>
                            <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.57575 0.270363C1.21527 -0.090121 0.63081 -0.090121 0.270326 0.270363C-0.0901585 0.630847 -0.0901585 1.21531 0.270326 1.57579L6.42417 7.72964C6.78466 8.09012 7.36912 8.09012 7.7296 7.72964L13.8834 1.57579C14.2439 1.21531 14.2439 0.630847 13.8834 0.270363C13.523 -0.090121 12.9385 -0.090121 12.578 0.270363L7.07689 5.7715L1.57575 0.270363Z" fill="black" />
                            </svg>
                        </div>
                        {showSidebarFootball &&
                            (<div className="cursor-pointer ">
                                <div className="flex items-center mt-5 text-black cursor-pointer" >
                                    <input className='w-5 h-5 checked:bg-black focus:bg-black' type="checkbox" id="FC Barcelona" name="FC Barcelona" value="FC Barcelona" />
                                    <label className='pl-3' for="FC Barcelona">FC Barcelona</label>
                                </div>
                                <div className="flex items-center mt-2 text-black cursor-pointer" >
                                    <input className='w-5 h-5 checked:bg-black focus:bg-black' type="checkbox" id="AS Roma" name="AS Roma" value="AS Roma" />
                                    <label className='pl-3' for="AS Roma">AS Roma</label>
                                </div>
                                <div className="flex items-center mt-2 text-black cursor-pointer" >
                                    <input className='w-5 h-5 checked:bg-black focus:bg-black' type="checkbox" id="Athletico Madrid" name="Athletico Madrid" value="Athletico Madrid" />
                                    <label className='pl-3' for="Athletico Madrid">Athletico Madrid</label>
                                </div>
                                <div className="flex items-center mt-2 text-black cursor-pointer" >
                                    <input className='w-5 h-5 checked:bg-black focus:bg-black' type="checkbox" id="Paris Saint-Germain" name="Paris Saint-Germain" value="Paris Saint-Germain" />
                                    <label className='pl-3' for="Paris Saint-Germain">Paris Saint-Germain</label>
                                </div>
                            </div>
                            )}
                    </Select>
                    <svg width="230" height="2" viewBox="0 0 230 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1H230" stroke="#F3F3F3" />
                    </svg>
                    <Select className='select-type' >
                        <div
                            className="  cursor-pointer flex justify-between items-center w-[230px]"
                            onClick={() => {
                                setshowSidebarType(!showSidebarType);
                            }}>
                            <h3 className='font-normal text-base w-[100px]'>Jersey Type</h3>
                            <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.57575 0.270363C1.21527 -0.090121 0.63081 -0.090121 0.270326 0.270363C-0.0901585 0.630847 -0.0901585 1.21531 0.270326 1.57579L6.42417 7.72964C6.78466 8.09012 7.36912 8.09012 7.7296 7.72964L13.8834 1.57579C14.2439 1.21531 14.2439 0.630847 13.8834 0.270363C13.523 -0.090121 12.9385 -0.090121 12.578 0.270363L7.07689 5.7715L1.57575 0.270363Z" fill="black" />
                            </svg>
                        </div>
                        {showSidebarType &&
                            (<div className="cursor-pointer ">
                                <div className="flex items-center mt-5 text-black cursor-pointer" >
                                    <input className='w-5 h-5 checked:bg-black focus:bg-black' type="checkbox" id="Home" name="Home" value="Home" />
                                    <label className='pl-3' for="Home">Home</label>
                                </div>
                                <div className="flex items-center mt-2 text-black cursor-pointer" >
                                    <input className='w-5 h-5 checked:bg-black focus:bg-black' type="checkbox" id="Away" name="Away" value="Away" />
                                    <label className='pl-3' for="Away">Away</label>
                                </div>
                                <div className="flex items-center mt-2 text-black cursor-pointer" >
                                    <input className='w-5 h-5 checked:bg-black focus:bg-black' type="checkbox" id="Custom" name="Custom" value="Custom" />
                                    <label className='pl-3' for="Custom">Custom</label>
                                </div>
                            </div>
                            )}
                    </Select>
                </div>
                <div className='col-span-2'>
                    <GetProduct className='grid-cols-3 gap-x-5 gap-y-10'></GetProduct>
                    <Seemore to='/products-new-in' className='flex items-center justify-center p-3 border-solid border-2 border-[#DEDEDE] font-medium rounded-lg cursor-pointer my-10' > Load More Products</Seemore>
                </div>
            </div>
        </FormContainer>

    );
};

export default ContentProductPage;