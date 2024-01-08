import React from 'react';
import { Link } from 'react-router-dom';

const Seemore = ({ children, to = "" , className="" }) => {
    return (
        <div className={className}>
            <Link to={to} className='mr-3 text-base'>{children}</Link>
            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.510466 10.1259C0.240103 10.3963 0.240103 10.8346 0.510466 11.105C0.780829 11.3754 1.21917 11.3754 1.48954 11.105L6.10492 6.48961C6.37528 6.21925 6.37528 5.7809 6.10492 5.51054L1.48954 0.895155C1.21917 0.624792 0.780829 0.624792 0.510466 0.895155C0.240103 1.16552 0.240103 1.60386 0.510466 1.87423L4.63631 6.00008L0.510466 10.1259Z" fill="black" />
            </svg>
        </div>
    );
};


export default Seemore;