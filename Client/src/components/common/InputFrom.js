import React, { Fragment } from 'react';

const InputFrom = ({ nameLabel, type, idInput, name, placeholder, handleInputChange, checkvalidate }) => {

    return (
        <Fragment>
            {checkvalidate ?
                <div className='flex items-center mb-5' >
                    <label htmlFor={idInput} className='w-[120px] mr-5 text-lg font-medium text-black'>{`${nameLabel} :`} </label>
                    <input
                        autoComplete='off'
                        type={type}
                        placeholder={placeholder}
                        id={idInput}
                        onChange={handleInputChange}
                        name={name}
                        className='w-full px-2 py-3 text-base font-normal text-black border border-[#DEDEDE] rounded-md focus:outline-none' />
                </div> :
                <div className='flex items-center mb-5' >
                    <label htmlFor={idInput} className='w-[120px] mr-5 text-lg font-medium text-black'>{`${nameLabel} :`} </label>
                    <input
                        autoComplete='off'
                        type={type}
                        placeholder={placeholder}
                        id={idInput}
                        onChange={handleInputChange}
                        name={name}
                        className='w-full px-2 py-3 text-base font-normal text-black border-[2px] border-[#ff6d6d] rounded-md focus:outline-none' />
                </div>
            }
        </Fragment>
    );
};

export default InputFrom;