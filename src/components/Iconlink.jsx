import PropTypes from 'prop-types';
import React from 'react';

function Iconlink({ href, svg }) {
    return (
        <a href={href} target="_blank" rel="noreferrer">
            {svg}
        </a>
    );
}

Iconlink.propTypes = {
    href: PropTypes.string.isRequired,
    svg: PropTypes.element.isRequired
};

export default Iconlink;