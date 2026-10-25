import PropTypes from 'prop-types';
import React, { useState } from "react";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Line from "./Line.jsx";
import ResponsiveImg from "./ResponsiveImg.jsx";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import { getYouTubeVideoID, getYouTubeThumbnailSrcSet, getYouTubeThumbnail } from "../utils/helpers.js";

const TwoColumns = ({ src, srcSm, srcMd, srcLg, srcXl, invert, title, text, alt, type, dark, headingLevel = 2 }) => {
  const { t } = useLanguage();
  // Click-to-load facade: the YouTube player (~1 MB of scripts per embed) is
  // only requested once the visitor asks for it.
  const [playing, setPlaying] = useState(false);

  const twoColumnsContent = invert ? "lg:flex-row-reverse" : "lg:flex-row";
  const twoColumns = dark ? "" : "";

  const videoID = getYouTubeVideoID(src);
  // h3 when the block sits under a section h2 (Games & XR page); styled like an h2.
  const Heading = headingLevel === 3 ? 'h3' : 'h2';

  return (
    <div className={twoColumns}>
      <div className={"content-width w-full flex flex-col items-center"}>
        {title &&
          <div className="w-full lg:mb-0 mb-5">
            <span className="flex items-center">
              <Heading className="two-columns-title">
                <Line />
                {title}
              </Heading>
            </span>
          </div>
        }
        <div className={"w-full flex flex-col items-center lg:mt-5 " + twoColumnsContent}>
          <div className="lg:w-1/2 w-full">
            {type === "image" &&
              <ResponsiveImg
                className="w-full aspect-video object-cover rounded-xl"
                src={src}
                srcSm={srcSm}
                srcMd={srcMd}
                srcLg={srcLg}
                srcXl={srcXl}
                alt={alt ?? "Site image"}
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
              />
            }
            {type === "video" && (playing ? (
              <iframe
                className="w-full aspect-video rounded-xl"
                src={`https://www.youtube.com/embed/${videoID}?autoplay=1`}
                title={alt ?? "Youtube Video"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                className="video-facade w-full aspect-video rounded-xl"
                onClick={() => setPlaying(true)}
                aria-label={`${t('playVideo')}: ${typeof title === 'string' ? title : (alt ?? 'YouTube')}`}
              >
                <img
                  className="w-full h-full object-cover rounded-xl"
                  alt=""
                  src={getYouTubeThumbnail(videoID)}
                  srcSet={getYouTubeThumbnailSrcSet(videoID)}
                  // The video column is about 65% of a phone's width and at most ~430 px.
                  sizes="(max-width: 1024px) 65vw, 430px"
                  width="1280"
                  height="720"
                  loading="lazy"
                  decoding="async"
                />
                <span className="video-facade-play" aria-hidden="true">
                  <PlayArrowIcon />
                </span>
              </button>
            ))}
          </div>
          <div className="lg:w-1/2 mx-5 lg:mt-0 mt-5">
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

TwoColumns.propTypes = {
  src: PropTypes.string.isRequired,
  srcSm: PropTypes.string,
  srcMd: PropTypes.string,
  srcLg: PropTypes.string,
  srcXl: PropTypes.string,
  invert: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  alt: PropTypes.string,
  type: PropTypes.oneOf(['image', 'video']).isRequired,
  dark: PropTypes.bool,
  headingLevel: PropTypes.oneOf([2, 3])
};

export default TwoColumns;