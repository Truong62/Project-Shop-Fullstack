import React from 'react';
import Header from '../HomePage/Header';
import ContentProductPage from './ContentProductPage';
import Footer from '../HomePage/Footer';

const ProductPageMain = () => {
    return (
        <div>
            <Header></Header>
            <ContentProductPage></ContentProductPage>
            <Footer></Footer>
        </div>
    );
};

export default ProductPageMain;