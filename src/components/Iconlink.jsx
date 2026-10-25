import PropTypes from 'prop-types';
import React from 'react';

function Iconlink({ href, svg, label }) {
    return (
        <a href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}>
            {svg}
        </a>
    );
}

Iconlink.propTypes = {
    href: PropTypes.string.isRequired,
    svg: PropTypes.element.isRequired,
    label: PropTypes.string
};

export default Iconlink;