import React, { Fragment } from 'react';

const InputFrom = ({ nameLabel, type, className, idInput, name, placeholder, handleInputChange, checkvalidate }) => {

    return (
        <Fragment>
            {checkvalidate ?
                <div className='flex items-center mb-5 sm:block sm:mb-3' >
                    <label htmlFor={idInput} className={`w-[120px] sm:text-base  mr-5 text-lg font-medium text-black ${className}`}>{`${nameLabel} :`} </label>
                    <input
                        autoComplete='off'
                        type={type}
                        placeholder={placeholder}
                        id={idInput}
                        onChange={handleInputChange}
                        name={name}
                        className='w-full px-2 py-3 text-base font-normal sm:mt-1 sm:py-2 sm:px-1 sm:text-sm text-black border border-[#DEDEDE] rounded-md focus:outline-none' />
                </div> :
                <div className='flex items-center mb-5 sm:block sm:mb-3'>
                    <label htmlFor={idInput} className={`w-[120px] sm:text-base  mr-5 text-lg font-medium text-black ${className}`}>{`${nameLabel} :`} </label>
                    <input
                        autoComplete='off'
                        type={type}
                        placeholder={placeholder}
                        id={idInput}
                        onChange={handleInputChange}
                        name={name}
                        className='w-full px-2 py-3 text-base font-normal sm:mt-1 sm:py-2 sm:px-1 sm:text-sm text-black border-[2px] border-[#ff6d6d] rounded-md focus:outline-none' />
                </div>
            }
        </Fragment>
    );
};

export default InputFrom;