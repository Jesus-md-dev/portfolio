import React from 'react';
import PropTypes from 'prop-types';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import PianoIcon from '@mui/icons-material/Piano';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
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
import "./Projects.css";

const GITHUB = 'https://github.com/Jesus-md-dev';

// Projects without a screenshot get a placeholder: a gradient themed after
// their stack, with an icon and the project name.
const PROJECTS = [
  {
    id: 'pandeconomy',
    name: 'Pandeconomy',
    textKey: 'projectPandeconomyText',
    stack: ['React Native', 'TypeScript', 'MMKV', 'GitHub Actions'],
    repo: `${GITHUB}/pandeconomy`,
    placeholder: { Icon: PhoneAndroidIcon, gradient: 'linear-gradient(135deg, #0b3954 0%, #1f6f8b 55%, #61dafb 100%)' },
  },
  {
    id: 'videoclub-local',
    name: 'Videoclub Local',
    textKey: 'projectVideoclubText',
    stack: ['Node.js', 'Express', 'React', 'Vite', 'ffmpeg', 'Android TV'],
    repo: `${GITHUB}/videoclub-local`,
    placeholder: { Icon: LocalMoviesIcon, gradient: 'linear-gradient(135deg, #2b0a3d 0%, #7b1e5a 55%, #e0533d 100%)' },
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
    placeholder: { Icon: AccountBalanceWalletIcon, gradient: 'linear-gradient(135deg, #0c2e22 0%, #1f5c45 50%, #c3002f 100%)' },
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
    placeholder: { Icon: PianoIcon, gradient: 'linear-gradient(135deg, #1b3a5c 0%, #3776ab 55%, #e8c547 100%)' },
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
