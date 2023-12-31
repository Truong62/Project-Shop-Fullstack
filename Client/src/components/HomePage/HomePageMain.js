import React, { Fragment } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import FormContainer from '../common/FormContailer';


const HomePageMain = () => {
    return (
        <Fragment>
            <Header></Header>
            <FormContainer>
                <Content></Content>
            </FormContainer>
            <Footer></Footer>
        </Fragment>
    );
};

export default HomePageMain;