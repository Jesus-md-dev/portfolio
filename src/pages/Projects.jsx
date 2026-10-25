import React from 'react';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Line from "../components/Line";
import ResponsiveImg from "../components/ResponsiveImg";
import YouTubeFacade from "../components/YouTubeFacade";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import config from "../config/index.js";
import { PROJECTS, PROJECT_TYPES } from "../data/projects.js";
import "./Projects.css";

const FILTER_LABEL_KEYS = {
  all: 'filterAll',
  web: 'filterWeb',
  mobile: 'filterMobile',
  desktop: 'filterDesktop',
  games: 'filterGames',
  xr: 'filterXr',
};

const ORIGIN_BADGE_KEYS = {
  university: 'universityProject',
  work: 'professionalWork',
};

function ProjectMedia({ project, name, alt }) {
  if (project.video) {
    return <YouTubeFacade className="project-media" videoId={project.video} title={name} />;
  }
  return (
    <ResponsiveImg
      className="project-media w-full aspect-video object-cover object-top"
      {...project.image}
      alt={alt}
      sizes="(max-width: 1024px) 92vw, 400px"
      loading="lazy"
    />
  );
}

ProjectMedia.propTypes = {
  project: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

function ProjectLink({ href, label, ariaLabel, Icon, outline }) {
  return (
    <a
      className={`project-button${outline ? ' project-button-outline' : ''}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
    >
      {Icon && <Icon fontSize="small" />}
      {label}
    </a>
  );
}

ProjectLink.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string,
  Icon: PropTypes.elementType,
  outline: PropTypes.bool,
};

function ProjectCard({ project }) {
  const { t } = useLanguage();
  const name = project.nameKey ? t(project.nameKey) : project.name;
  const alt = project.altKey ? t(project.altKey) : `${t('projectsScreenshotOf')} ${name}`;
  const badgeKey = ORIGIN_BADGE_KEYS[project.origin];

  return (
    <li className="project-card">
      <ProjectMedia project={project} name={name} alt={alt} />
      <div className="project-body">
        <h3 className="project-name">{name}</h3>
        {badgeKey && <span className="project-badge">{t(badgeKey)}</span>}
        <p className="project-text">{t(project.textKey)}</p>
        {project.coauthor && (
          <p className="project-text">
            {t('projectsCoauthor')}{' '}
            <a href={project.coauthor.href} target="_blank" rel="noopener noreferrer">{project.coauthor.name}</a>
          </p>
        )}
        <ul className="project-stack" aria-label={t('projectsStack')}>
          {project.stack.map((tech) => (
            <li key={tech} className="project-chip">{tech}</li>
          ))}
        </ul>
        <div className="project-actions">
          {project.play && (
            <ProjectLink href={project.play} label={t('playInBrowser')} ariaLabel={`${t('playInBrowser')}: ${name}`} Icon={PlayArrowIcon} />
          )}
          {project.repo && (
            <ProjectLink
              href={project.repo}
              label={t('projectsCode')}
              ariaLabel={`${t('projectsCode')}: ${name} (GitHub)`}
              Icon={GitHubIcon}
              outline={Boolean(project.play)}
            />
          )}
          {project.live && (
            <ProjectLink href={project.live} label={t('projectsLive')} ariaLabel={`${t('projectsLive')}: ${name}`} Icon={OpenInNewIcon} outline />
          )}
          {project.sites?.map((site) => (
            <ProjectLink key={site.href} href={site.href} label={site.name} Icon={OpenInNewIcon} outline />
          ))}
        </div>
      </div>
    </li>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
};

function Projects() {
  const { t } = useLanguage();
  // The filter lives in the URL (/projects?type=games) so it can be linked;
  // /webs, /games and /arvr redirect to their filtered views.
  const [searchParams, setSearchParams] = useSearchParams();
  const requested = searchParams.get('type');
  const filter = PROJECT_TYPES.includes(requested) ? requested : 'all';
  const visible = filter === 'all' ? PROJECTS : PROJECTS.filter((project) => project.types.includes(filter));

  const selectFilter = (type) => {
    setSearchParams(type === 'all' ? {} : { type }, { replace: true });
  };

  return (
    <div className="projects-page content-width">
      <h2>
        <Line />
        {t('projectsTitle')}
      </h2>
      <p className="projects-intro">
        {t('projectsIntro')}{' '}
        <a href={config.social.labProjects} target="_blank" rel="noopener noreferrer">{t('projectsLabLink')}</a>
      </p>

      <div className="projects-filters" role="group" aria-label={t('filterLabel')}>
        {['all', ...PROJECT_TYPES].map((type) => (
          <button
            key={type}
            type="button"
            className="projects-filter"
            aria-pressed={filter === type}
            onClick={() => selectFilter(type)}
          >
            {t(FILTER_LABEL_KEYS[type])}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">{`${visible.length} ${t('projectsShown')}`}</p>

      <ul className="projects-grid">
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ul>
    </div>
  );
}

export default Projects;
