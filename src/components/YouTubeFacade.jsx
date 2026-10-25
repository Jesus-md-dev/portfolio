import PropTypes from 'prop-types';
import React, { useState } from "react";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useLanguage } from "../i18n/LanguageContext.jsx";
import { getYouTubeThumbnailSrcSet, getYouTubeThumbnail } from "../utils/helpers.js";

// Click-to-load facade: the YouTube player (~1 MB of scripts per embed) is
// only requested once the visitor asks for it.
function YouTubeFacade({ videoId, title, className = '' }) {
  const { t } = useLanguage();
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        className={`w-full aspect-video ${className}`}
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      className={`video-facade w-full aspect-video ${className}`}
      onClick={() => setPlaying(true)}
      aria-label={`${t('playVideo')}: ${title}`}
    >
      <img
        className="w-full h-full object-cover"
        alt=""
        src={getYouTubeThumbnail(videoId)}
        srcSet={getYouTubeThumbnailSrcSet(videoId)}
        // Same width as a project card's screenshot.
        sizes="(max-width: 1024px) 92vw, 400px"
        width="1280"
        height="720"
        loading="lazy"
        decoding="async"
      />
      <span className="video-facade-play" aria-hidden="true">
        <PlayArrowIcon />
      </span>
    </button>
  );
}

YouTubeFacade.propTypes = {
  videoId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default YouTubeFacade;
