import React from 'react';
import { NavLink } from "react-router-dom";

const products = [
    { to: "/products-new-in", text: "New In" },
    { to: "/products-football", text: "Football" },
    { to: "/products-basketball", text: "Basketball" },
    { to: "/products-badminton", text: "Badminton" },
    { to: "/products-rugby", text: "Rugby" },
    { to: "/products-tennis", text: "Tennis" },
    { to: "/products-hockey", text: "Hockey" },
    { to: "/products-lifestyle", text: "Lifestyle" },
    { to: "/products-american-football", text: "American Football" },
    { to: "/products-sales", text: "Sales" }
];

const Subheader = () => {
    return (
        <div className='bg-[#F3F3F3] pl-28 pr-28 h-[60px] flex items-center justify-start sm:hidden'>
            <div className='text-[#868686]'>
                {products.map((product, index) => (
                    <NavLink
                        key={index}
                        to={product.to}
                        className={({ isActive }) =>
                            isActive ? "text-black border-b-2 border-black m-3" : "m-3 cursor-pointer hover:border-b-2 hover:text-black hover:border-black hover:transition-all duration-300 ease-in-out"
                        }
                    >
                        {product.text}
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default Subheader;
