import React, { useState } from 'react';
import Select from './Select';

const Dropdown = ({ className = "", data, table, status = true, classNameTable, onClick ,classNameItem}) => {
    const [ShowSelec, setShowSelec] = useState(status);
    return (
        <Select className='mb-5'>
            <div
                className={`cursor-pointer flex justify-between items-center ${className}`}
                onClick={() => {
                    setShowSelec(!ShowSelec);
                }}
            >
                <h3 className={` mr-4 w-[100px] ${classNameTable}`}>{table} </h3>
                <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.57575 0.270363C1.21527 -0.090121 0.63081 -0.090121 0.270326 0.270363C-0.0901585 0.630847 -0.0901585 1.21531 0.270326 1.57579L6.42417 7.72964C6.78466 8.09012 7.36912 8.09012 7.7296 7.72964L13.8834 1.57579C14.2439 1.21531 14.2439 0.630847 13.8834 0.270363C13.523 -0.090121 12.9385 -0.090121 12.578 0.270363L7.07689 5.7715L1.57575 0.270363Z" fill="black" />
                </svg>
            </div>
            {ShowSelec &&
                (
                    <div className={`${classNameItem}`}>
                        {data.map((item, index) => (
                            <div className="cursor-pointer" key={item.id}>
                                <div className="flex items-center mt-5 text-black cursor-pointer" >
                                    <input className='w-5 h-5 checked:bg-black focus:bg-black' type="checkbox" id={item.name} name={item.name} value={item.name} />
                                    <label onClick={onClick} className='pl-3' htmlFor={item.name}>{item.name}</label>
                                </div>
                            </div>
                        ))}
                    </div>
                )
            }
        </Select>
    );
};

export default Dropdown;