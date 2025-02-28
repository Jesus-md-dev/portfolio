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
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default VideoText;