import React, { useEffect, useRef, useState } from 'react';
import FormContainer from '../common/FormContailer';
import GetProduct from '../API/GetProducts';
import Select from '../common/Select';
import Seemore from '../common/Seemore';
import Breadcrumb from '../common/Breadcrumb';
import Dropdown from '../common/Dropdown';



const ContentProductPage = () => {
    const GenderArr = ["Male", "Female",];
    const PriceRangeArr = ["Below $50", "Above $50",];
    const SizeArr = ["XS (UK 4-6)", "S (UK 8-10)", "M (UK 12-14)", "L (UK 12-14)",];
    const JerseyArr = ["Home", "Away", "Custom",];
    const FootballArr = ["FC Barcelona", "AS Roma", "Athletico Madrid", "Paris Saint-Germain",];

    const [show, setShow] = useState(false);
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
                <div>
                    <Breadcrumb></Breadcrumb>
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
                        <Dropdown onClick={() => { }} className=' w-[230px]  ' classNameTable={"font-medium text-2xl w-full "} data={GenderArr} table={"Gender"}></Dropdown>
                    </Select>
                    <Select className='select-price' >
                        <Dropdown onClick={() => { }} className=' w-[230px]' classNameTable={"font-medium text-2xl w-full "} data={PriceRangeArr} table={"Price Range"} ></Dropdown>
                    </Select>
                    <Select className='select-size' >
                        <Dropdown onClick={() => { }} className=' w-[230px]' classNameTable={"font-medium text-2xl w-full "} data={SizeArr} table={"Size"}></Dropdown>
                    </Select>
                    <Select className='select-football' >
                        <Dropdown onClick={() => { }} className=' w-[230px]' classNameTable={"font-medium text-2xl w-full "} data={FootballArr} table={"Football Team"} ></Dropdown>
                    </Select>
                    <Select className='select-type' >
                        <Dropdown onClick={() => { }} className=' w-[230px]' classNameTable={"font-medium text-2xl w-full "} data={JerseyArr} table={"Jersey Type"} ></Dropdown>
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