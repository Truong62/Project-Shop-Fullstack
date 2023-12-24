import React, { Fragment } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';


const HomePageMain = () => {
    return (
        <Fragment>
            <Header></Header>
            <section className='max-w-[1280px] mb-0 mt-0 ml-auto mr-auto'>
                <Content></Content>
            </section>
            <Footer></Footer>
        </Fragment>
    );
};

export default HomePageMain;