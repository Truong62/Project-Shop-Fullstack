import React, { Fragment, useEffect, useRef } from 'react';
import FormContainer from '../common/FormContailer'
import GetProductById from '../API/GetProductById';
import Header from '../HomePage/Header';
import Breadcrumb from '../common/Breadcrumb';
import GetProduct from '../API/GetProducts';
import Footer from '../HomePage/Footer';
import Subheader from '../HomePage/Subheader';

const ProductDetailsPageMain = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const topRef = useRef(null);

    useEffect(() => {
        if (topRef.current) {
            topRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [topRef]);
    return (
        <Fragment>
            <div ref={topRef}></div>
            <Header></Header>
            <Subheader></Subheader>
            <FormContainer>
                <Breadcrumb className='py-6'></Breadcrumb>
                <GetProductById ></GetProductById>
                <div className='mt-24 my-52 sm:mt-10 sm:my-20'>
                    <h3 className='pb-8 text-3xl font-medium sm:text-2xl'>You Might Also Like</h3>
                    <GetProduct topRef={topRef} className='grid-cols-4 gap-x-5 gap-y-10 sm:grid-cols-2' page={1} limit={4}></GetProduct>
                </div>
            </FormContainer>
            <Footer className="mt-24"></Footer>
        </Fragment>
    );
};

export default ProductDetailsPageMain;