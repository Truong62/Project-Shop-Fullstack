import React from 'react';
import {NavLink} from "react-router-dom"

const Subheader = () => {
    return (
        <div className='bg-[#F3F3F3] pl-28 pr-28 h-[60px] flex items-center justify-start'>
            <div className='text-[#868686]'>
                <NavLink to={"/products-new-in"}  className={({isActive}) => isActive ? "text-black border-b-2 border-black m-3" : 'm-3 cursor-pointer'}>New In</NavLink>
                <NavLink to={"/products-football"}  className={({isActive}) => isActive ? "text-black border-b-2 border-black m-3" : 'm-3 cursor-pointer'}>Football</NavLink>
                <NavLink to={"/products-basketball"}  className={({isActive}) => isActive ? "text-black border-b-2 border-black m-3" : 'm-3 cursor-pointer'}>Basketball</NavLink>
                <NavLink to={"/products-badminton"}  className={({isActive}) => isActive ? "text-black border-b-2 border-black m-3" : 'm-3 cursor-pointer'}>Badminton</NavLink>
                <NavLink to={"/products-rugby"}  className={({isActive}) => isActive ? "text-black border-b-2 border-black m-3" : 'm-3 cursor-pointer'}>Rugby</NavLink>
                <NavLink to={"/products-tennis"}  className={({isActive}) => isActive ? "text-black border-b-2 border-black m-3" : 'm-3 cursor-pointer'}>Tennis</NavLink>
                <NavLink to={"/products-hockey"}  className={({isActive}) => isActive ? "text-black border-b-2 border-black m-3" : 'm-3 cursor-pointer'}>Hockey</NavLink>
                <NavLink to={"/products-lifestyle"}  className={({isActive}) => isActive ? "text-black border-b-2 border-black m-3" : 'm-3 cursor-pointer'}>Lifestyle</NavLink>
                <NavLink to={"/products-american-football"}  className={({isActive}) => isActive ? "text-black border-b-2 border-black m-3" : 'm-3 cursor-pointer'}>American Football</NavLink>
                <NavLink to={"/products-sales"}  className={({isActive}) => isActive ? "text-black border-b-2 border-black m-3" : 'm-3 cursor-pointer'}>Sales</NavLink>
            </div>
        </div>
    );
};

export default Subheader;