import PropTypes from 'prop-types';
import React from 'react';

function Line({ className }) {
    return (
        <div className={`line mx-2 mb-[0.4rem] border-b-[0.15rem] w-4 inline-flex ${className}`}></div>
    );
}

Line.propTypes = {
    className: PropTypes.string
};

export default Line;