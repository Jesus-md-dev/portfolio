import PropTypes from 'prop-types';
import React, { useState } from "react";
import Line from "./Line.jsx";
import ResponsiveImg from "./ResponsiveImg.jsx";
import { getYouTubeVideoID, getYouTubeThumbnail } from "../utils/helpers.js";

const TwoColumns = ({ src, srcSm, srcMd, srcLg, srcXl, invert, title, text, alt, type, dark }) => {
  const [loading, setLoading] = useState(true);

  const twoColumnsContent = invert ? "lg:flex-row-reverse" : "lg:flex-row";
  const twoColumns = dark ? "" : "";

  const hideThumbnail = () => {
    setLoading(false);
  };

  const videoID = getYouTubeVideoID(src);

  return (
    <div className={twoColumns}>
      <div className={"content-width w-full flex flex-col items-center"}>
        {title &&
          <div className="w-full lg:mb-0 mb-5">
            <span className="flex items-center">
              <h2>
                <Line />
                {title}
              </h2>
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
            {type === "video" &&
              <span className="aspect-video w-auto relative">
                {loading && (
                  <div className="fit-content absolute">
                    <img
                      className="object-cover rounded-xl h-full"
                      alt={alt ?? "Youtube Video Thumbnail"}
                      src={getYouTubeThumbnail(videoID)}
                      loading="lazy"
                    />
                  </div>
                )}
                <iframe
                  className={`w-full aspect-video rounded-xl ${loading ? 'invisible' : ''}`}
                  src={"https://www.youtube.com/embed/" + videoID}
                  title={alt ?? "Youtube Video"}
                  onLoad={hideThumbnail}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </span>
            }
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
  dark: PropTypes.bool
};

export default TwoColumns;