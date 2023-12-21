import React, { Fragment } from 'react';
import Header from './Header';
import Content from './Content';


const HomePageMain = () => {
    return (
        <Fragment>
            <Header></Header>
            <section className='max-w-[1280px] mb-0 mt-0 ml-auto mr-auto'>
                <Content></Content>
            </section>
        </Fragment>
    );
};

export default HomePageMain;