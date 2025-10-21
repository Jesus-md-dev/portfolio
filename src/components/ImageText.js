import PropTypes from 'prop-types';
import React from 'react';
import TwoColumns from "./TwoColumns";

function ImageText({ src, srcSm, srcMd, srcLg, srcXl, invert, title, text, alt }) {
  return (
    <TwoColumns
      src={src}
      srcSm={srcSm}
      srcMd={srcMd}
      srcLg={srcLg}
      srcXl={srcXl}
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
  srcSm: PropTypes.string,
  srcMd: PropTypes.string,
  srcLg: PropTypes.string,
  srcXl: PropTypes.string,
  invert: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  alt: PropTypes.string.isRequired
};

export default ImageText;