import React from 'react';
import PropTypes from 'prop-types';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Line from "../components/Line";
import ResponsiveImg from "../components/ResponsiveImg";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import config from "../config/index.js";
import bahiaLectora from "../files/images/bahia-lectora.webp";
import bahiaLectoraSm from "../files/images/bahia-lectora-sm.webp";
import bahiaLectoraMd from "../files/images/bahia-lectora-md.webp";
import bahiaLectoraLg from "../files/images/bahia-lectora-lg.webp";
import pzServerStatus from "../files/images/pz-server-status.webp";
import pzServerStatusSm from "../files/images/pz-server-status-sm.webp";
import pzServerStatusMd from "../files/images/pz-server-status-md.webp";
import pzServerStatusLg from "../files/images/pz-server-status-lg.webp";
import pandeconomy from "../files/images/pandeconomy.webp";
import pandeconomySm from "../files/images/pandeconomy-sm.webp";
import pandeconomyMd from "../files/images/pandeconomy-md.webp";
import pandeconomyLg from "../files/images/pandeconomy-lg.webp";
import videoclub from "../files/images/videoclub-local.webp";
import videoclubSm from "../files/images/videoclub-local-sm.webp";
import videoclubMd from "../files/images/videoclub-local-md.webp";
import videoclubLg from "../files/images/videoclub-local-lg.webp";
import expensesManager from "../files/images/project-expenses-manager.webp";
import expensesManagerSm from "../files/images/project-expenses-manager-sm.webp";
import expensesManagerMd from "../files/images/project-expenses-manager-md.webp";
import expensesManagerLg from "../files/images/project-expenses-manager-lg.webp";
import heartopia from "../files/images/heartopia-piano-translator.webp";
import heartopiaSm from "../files/images/heartopia-piano-translator-sm.webp";
import heartopiaMd from "../files/images/heartopia-piano-translator-md.webp";
import heartopiaLg from "../files/images/heartopia-piano-translator-lg.webp";
import "./Projects.css";

const GITHUB = 'https://github.com/Jesus-md-dev';

// Each project shows a screenshot (`image`). A project without one can set
// `placeholder` instead: a gradient themed after its stack, with an icon and
// the project name.
const PROJECTS = [
  {
    id: 'pandeconomy',
    name: 'Pandeconomy',
    textKey: 'projectPandeconomyText',
    stack: ['React Native', 'TypeScript', 'MMKV', 'GitHub Actions'],
    repo: `${GITHUB}/pandeconomy`,
    image: { src: pandeconomy, srcSm: pandeconomySm, srcMd: pandeconomyMd, srcLg: pandeconomyLg },
  },
  {
    id: 'videoclub-local',
    name: 'Videoclub Local',
    textKey: 'projectVideoclubText',
    stack: ['Node.js', 'Express', 'React', 'Vite', 'ffmpeg', 'Android TV'],
    repo: `${GITHUB}/videoclub-local`,
    image: { src: videoclub, srcSm: videoclubSm, srcMd: videoclubMd, srcLg: videoclubLg },
  },
  {
    id: 'bahia-lectora',
    name: 'Bahía Lectora',
    textKey: 'projectBahiaLectoraText',
    stack: ['React', 'Vite', 'Tailwind CSS', 'Google APIs', 'Netlify'],
    repo: `${GITHUB}/bahia-lectora`,
    live: 'https://bahia-lectora.jzmarquez.com/',
    image: { src: bahiaLectora, srcSm: bahiaLectoraSm, srcMd: bahiaLectoraMd, srcLg: bahiaLectoraLg },
  },
  {
    id: 'project-expenses-manager',
    name: 'Project Expenses Manager',
    textKey: 'projectExpensesManagerText',
    stack: ['Angular', 'TypeScript', 'Django REST', 'MySQL'],
    repo: `${GITHUB}/project-expenses-manager`,
    image: { src: expensesManager, srcSm: expensesManagerSm, srcMd: expensesManagerMd, srcLg: expensesManagerLg },
  },
  {
    id: 'project-zomboid-server-status',
    name: 'Project Zomboid Server Status',
    textKey: 'projectZomboidStatusText',
    stack: ['Netlify Functions', 'RCON', 'JavaScript'],
    repo: `${GITHUB}/project-zomboid-server-status`,
    live: 'https://pz-server-status.netlify.app/',
    image: { src: pzServerStatus, srcSm: pzServerStatusSm, srcMd: pzServerStatusMd, srcLg: pzServerStatusLg },
  },
  {
    id: 'heartopia-piano-translator',
    name: 'Heartopia Piano Translator',
    textKey: 'projectHeartopiaText',
    stack: ['Python', 'Tkinter', 'PyInstaller'],
    repo: `${GITHUB}/heartopia-piano-translator`,
    image: { src: heartopia, srcSm: heartopiaSm, srcMd: heartopiaMd, srcLg: heartopiaLg },
  },
];

function ProjectMedia({ project, alt }) {
  if (project.image) {
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

  const { Icon, gradient } = project.placeholder;
  return (
    <div className="project-media project-placeholder w-full aspect-video" style={{ background: gradient }} aria-hidden="true">
      <Icon className="project-placeholder-icon" />
      <span className="project-placeholder-name">{project.name}</span>
    </div>
  );
}

ProjectMedia.propTypes = {
  project: PropTypes.object.isRequired,
  alt: PropTypes.string.isRequired,
};

function Projects() {
  const { t } = useLanguage();

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

      <ul className="projects-grid">
        {PROJECTS.map((project) => (
          <li key={project.id} className="project-card">
            <ProjectMedia project={project} alt={`${t('projectsScreenshotOf')} ${project.name}`} />
            <div className="project-body">
              <h3 className="project-name">{project.name}</h3>
              <p className="project-text">{t(project.textKey)}</p>
              <ul className="project-stack" aria-label={t('projectsStack')}>
                {project.stack.map((tech) => (
                  <li key={tech} className="project-chip">{tech}</li>
                ))}
              </ul>
              <div className="project-actions">
                <a
                  className="project-button"
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${t('projectsCode')}: ${project.name} (GitHub)`}
                >
                  <GitHubIcon fontSize="small" />
                  {t('projectsCode')}
                </a>
                {project.live && (
                  <a
                    className="project-button project-button-outline"
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${t('projectsLive')}: ${project.name}`}
                  >
                    <OpenInNewIcon fontSize="small" />
                    {t('projectsLive')}
                  </a>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
