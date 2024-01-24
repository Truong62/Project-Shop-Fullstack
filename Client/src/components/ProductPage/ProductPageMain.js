import React from 'react';
import Header from '../HomePage/Header';
import ContentProductPage from './ContentProductPage';
import Footer from '../HomePage/Footer';
import Subheader from '../HomePage/Subheader';
import { motion } from "framer-motion";

const ProductPageMain = () => {
    return (
        <div>
            <Header></Header>
            <Subheader></Subheader>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            >
                <ContentProductPage></ContentProductPage>
            </motion.div>
            <Footer></Footer>
        </div>
    );
};

export default ProductPageMain;