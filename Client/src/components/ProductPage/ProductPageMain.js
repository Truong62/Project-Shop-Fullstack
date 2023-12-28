import React, { useEffect } from 'react';
import Header from '../HomePage/Header';
import ContentProductPage from './ContentProductPage';
import Footer from '../HomePage/Footer';

const ProductPageMain = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div>
            <Header></Header>
            <ContentProductPage></ContentProductPage>
            <Footer></Footer>
        </div>
    );
};

export default ProductPageMain;