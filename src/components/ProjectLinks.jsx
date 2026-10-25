import PropTypes from 'prop-types';
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const ICONS = {
  code: GitHubIcon,
  play: PlayArrowIcon,
};

/**
 * Row of call-to-action links (repository, playable build) shown under a project's text.
 * Rendered with inline elements because it sits inside the <p> of TwoColumns.
 */
function ProjectLinks({ links }) {
  return (
    <span className="project-links">
      {links.map(({ href, label, type }) => {
        const Icon = ICONS[type];
        return (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`project-link${type === 'code' ? ' project-link-secondary' : ''}`}
          >
            {Icon && <Icon fontSize="small" aria-hidden="true" />}
            {label}
          </a>
        );
      })}
    </span>
  );
}

ProjectLinks.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['code', 'play']).isRequired,
  })).isRequired,
};

/** Small pill that marks a university project. */
export function UniversityBadge({ label }) {
  return <span className="project-badge">{label}</span>;
}

UniversityBadge.propTypes = {
  label: PropTypes.string.isRequired,
};

export default ProjectLinks;
