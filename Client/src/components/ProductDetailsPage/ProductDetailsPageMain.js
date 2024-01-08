import React, { useEffect } from 'react';
import FormContainer from '../common/FormContailer'
import GetProductById from '../API/GetProductById';

const ProductDetailsPageMain = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <FormContainer>
            <h1>dhasdasdsadsa</h1>
            <GetProductById></GetProductById>
        </FormContainer>
    );
};

export default ProductDetailsPageMain;