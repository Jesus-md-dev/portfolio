import PropTypes from 'prop-types';
import React from 'react';
import TwoColumns from "./TwoColumns";

function VideoText({ url, invert, title, text }) {
  return (
    <TwoColumns
      src={url}
      invert={invert}
      title={title}
      text={text}
      alt="Youtube Video"
      type="video"
    />
  );
}

VideoText.propTypes = {
  url: PropTypes.string.isRequired,
  invert: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired
};

export default VideoText;