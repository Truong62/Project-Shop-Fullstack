import React, { useEffect } from 'react';
import Header from '../HomePage/Header';
import ContentProductPage from './ContentProductPage';
import Footer from '../HomePage/Footer';
import Subheader from '../HomePage/Subheader';

const ProductPageMain = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div>
            <Header></Header>
            <Subheader></Subheader>
            <ContentProductPage></ContentProductPage>
            <Footer></Footer>
        </div>
    );
};

export default ProductPageMain;