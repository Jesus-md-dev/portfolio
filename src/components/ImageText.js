import PropTypes from 'prop-types';
import React from 'react';
import TwoColumns from "./TwoColumns";

function ImageText({ src, invert, title, text, alt }) {
  return (
    <TwoColumns
      src={src}
      invert={invert}
      title={title}
      text={text}
      alt={alt}
      type="image"
    />
  );
}

ImageText.propTypes = {
  src: PropTypes.string.isRequired,
  invert: PropTypes.bool,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default ImageText;