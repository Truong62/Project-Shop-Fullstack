import React from 'react';

const Breadcrumb = ({ className = "" }) => {
    return (
        <div className={`action-page ${className}`}>
            <div className='flex'>
                <h3 className='p-2 pl-0'>Women </h3>
                <h3 className='p-2'> / Football </h3>
                <h3 className='p-2 text-gray-500'> / Jerseys </h3>
            </div>
        </div>
    );
};

export default Breadcrumb;