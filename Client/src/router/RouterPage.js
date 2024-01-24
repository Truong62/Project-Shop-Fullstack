import React, { Fragment } from 'react';
import HomePageMain from "../components/HomePage/HomePageMain";
import { Routes, Route, useLocation } from "react-router-dom";
import ProductPageMain from "../components/ProductPage/ProductPageMain";
import ProductDetailsPageMain from "../components/ProductDetailsPage/ProductDetailsPageMain";
import CartPageMain from "../components/CartPage/CartPageMain";
import Checkout from "../components/CheckOut/Checkout";
import { AnimatePresence } from "framer-motion"
import ScrollToTopOnPathChange from '../components/common/ScrollToTop';

const RouterPage = () => {
    const location = useLocation()
    return (
        <Fragment>
            <AnimatePresence>
                <ScrollToTopOnPathChange>
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<HomePageMain></HomePageMain>}></Route>
                        <Route path="/products-new-in" element={<ProductPageMain></ProductPageMain>}></Route>
                        <Route path="/products-football" element={<ProductPageMain></ProductPageMain>}></Route>
                        <Route path="/products-basketball" element={<ProductPageMain></ProductPageMain>}></Route>
                        <Route path="/products-badminton" element={<ProductPageMain></ProductPageMain>}></Route>
                        <Route path="/products-rugby" element={<ProductPageMain></ProductPageMain>}></Route>
                        <Route path="/products-tennis" element={<ProductPageMain></ProductPageMain>}></Route>
                        <Route path="/products-hockey" element={<ProductPageMain></ProductPageMain>}></Route>
                        <Route path="/products-lifestyle" element={<ProductPageMain></ProductPageMain>}></Route>
                        <Route path="/products-american-football" element={<ProductPageMain></ProductPageMain>}></Route>
                        <Route path="/products-sales" element={<ProductPageMain></ProductPageMain>}></Route>
                        <Route path="/products-details/:id" element={<ProductDetailsPageMain ></ProductDetailsPageMain>}></Route>
                        <Route path="/cart" element={<CartPageMain></CartPageMain>}></Route>
                        <Route path="/checkout" element={<Checkout></Checkout>}></Route>
                        <Route path="*" element={<h1>page does not exist</h1>}></Route>
                    </Routes>
                </ScrollToTopOnPathChange>
            </AnimatePresence>
        </Fragment>
    );
};

export default RouterPage;