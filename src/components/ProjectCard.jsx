import React from 'react';
import PropTypes from 'prop-types';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ResponsiveImg from "./ResponsiveImg.jsx";
import "./ProjectCard.css";

const ICONS = {
  code: GitHubIcon,
  live: OpenInNewIcon,
  play: PlayArrowIcon,
};

/** Grid of project cards, shared by the Projects, Webs and Games & XR pages. */
export function ProjectGrid({ children }) {
  return <ul className="projects-grid">{children}</ul>;
}

ProjectGrid.propTypes = {
  children: PropTypes.node.isRequired,
};

/** Screenshot at the top of a card. */
export function ProjectImage({ image, alt }) {
  return (
    <ResponsiveImg
      className="project-media w-full aspect-video object-cover object-top"
      {...image}
      alt={alt}
      sizes="(max-width: 1024px) 92vw, 400px"
      loading="lazy"
    />
  );
}

ProjectImage.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    srcSm: PropTypes.string,
    srcMd: PropTypes.string,
    srcLg: PropTypes.string,
    srcXl: PropTypes.string,
  }).isRequired,
  alt: PropTypes.string.isRequired,
};

/**
 * One project: media, name, description, stack chips and links. The first
 * link is the main action (filled button), the rest are outlined.
 */
function ProjectCard({ name, media, text, stack = [], stackLabel, links = [], badge }) {
  return (
    <li className="project-card">
      {media}
      <div className="project-body">
        {badge && <span className="project-badge">{badge}</span>}
        <h3 className="project-name">{name}</h3>
        <p className="project-text">{text}</p>
        {stack.length > 0 && (
          <ul className="project-stack" aria-label={stackLabel}>
            {stack.map((tech) => (
              <li key={tech} className="project-chip">{tech}</li>
            ))}
          </ul>
        )}
        {links.length > 0 && (
          <div className="project-actions">
            {links.map(({ href, label, type, ariaLabel }, index) => {
              const Icon = ICONS[type];
              return (
                <a
                  key={href}
                  className={`project-button${index > 0 ? ' project-button-outline' : ''}`}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={ariaLabel}
                >
                  <Icon fontSize="small" aria-hidden="true" />
                  {label}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </li>
  );
}

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  media: PropTypes.node.isRequired,
  text: PropTypes.node.isRequired,
  stack: PropTypes.arrayOf(PropTypes.string),
  stackLabel: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['code', 'live', 'play']).isRequired,
    ariaLabel: PropTypes.string,
  })),
  badge: PropTypes.string,
};

export default ProjectCard;
