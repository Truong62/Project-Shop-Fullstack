import React from 'react';
import PropTypes from 'prop-types';

const FormContainer = ({ children, className = "" }) => {
    return (
        <div className={`max-w-[1280px] my-0 mx-auto ${className}`} >
            {children}
        </div>
    );
};
FormContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

export default FormContainer;
