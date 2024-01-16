import React, { Fragment, useEffect } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Subheader from './Subheader';
import FormContainer from '../common/FormContailer';


const HomePageMain = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <Fragment>
            <Header></Header>
            <Subheader></Subheader>
            <FormContainer>
                <Content></Content>
            </FormContainer>
            <Footer></Footer>
        </Fragment>
    );
};

export default HomePageMain;