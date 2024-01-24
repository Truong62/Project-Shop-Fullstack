import React, { useEffect, Fragment } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Subheader from './Subheader';
import FormContainer from '../common/FormContailer';
import { motion } from "framer-motion";

const HomePageMain = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Fragment>
            <Header></Header>
            <Subheader></Subheader>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
            >
                <FormContainer>
                    <Content></Content>
                </FormContainer>
            </motion.div>
            <Footer></Footer>
        </Fragment>
    );
};

export default HomePageMain;