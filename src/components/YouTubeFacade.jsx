import PropTypes from 'prop-types';
import React, { useState } from "react";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useLanguage } from "../i18n/LanguageContext.jsx";
import { getYouTubeVideoID, getYouTubeThumbnailSrcSet, getYouTubeThumbnail } from "../utils/helpers.js";

/**
 * Click-to-load facade: the YouTube player (~1 MB of scripts per embed) is
 * only requested once the visitor asks for it. Never render the iframe on
 * page load: it took mobile performance down to 57 (#18).
 */
function YouTubeFacade({ url, title, className = '' }) {
  const { t } = useLanguage();
  const [playing, setPlaying] = useState(false);
  const videoID = getYouTubeVideoID(url);

  if (playing) {
    return (
      <iframe
        className={`w-full aspect-video ${className}`}
        src={`https://www.youtube.com/embed/${videoID}?autoplay=1`}
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
        src={getYouTubeThumbnail(videoID)}
        srcSet={getYouTubeThumbnailSrcSet(videoID)}
        // Same width as a card's screenshot.
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
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default YouTubeFacade;
