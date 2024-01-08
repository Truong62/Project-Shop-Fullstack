import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ children, className = "" }) => {
    return (
        <div className={`mt-3 mb-10 ${className}`}>
            {children}
        </div>
    );
};

Select.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Select;