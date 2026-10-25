import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MapIcon from '@mui/icons-material/Map';
import PhoneIcon from '@mui/icons-material/Phone';
import WorkIcon from '@mui/icons-material/Work';
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import config from "../config/index.js";
import Line from "../components/Line.jsx";
import cvEn from "../data/cv.en.json";
import cvEs from "../data/cv.es.json";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import "./CV.css";

// The CV content lives in src/data/cv.{en,es}.json, which also fills the PDF
// template (cv/cv.template.html, npm run cv:pdf).
const cvData = { en: cvEn, es: cvEs };

function Section({ title, children }) {
  return (
    <div className="flex items-center justify-center lg:flex-row">
      <div className="content-width w-full flex flex-col lg:flex-row">
        <div className="w-full">
          <span className="flex items-center">
            <h2>
              <Line />
              {title}
            </h2>
          </span>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.node,
};

function EntryList({ entries }) {
  return entries.map((entry) => (
    <div key={entry.title}>
      <h3>{entry.title}</h3>
      <ul className="list-disc list-inside">
        <li>{entry.details}</li>
      </ul>
    </div>
  ));
}

EntryList.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    details: PropTypes.string,
  })).isRequired,
};

function CV() {
  const { t, currentLanguage } = useLanguage();
  const cv = cvData[currentLanguage] || cvData.es;

  const handleDownloadCV = () => {
    const url = config.cv.downloadUrl[currentLanguage] || config.cv.downloadUrl.es;
    window.open(url, '_blank').focus();
  };

  return (
    <div className='cv-container'>
      <Section title={cv.headings.experience}>
        {cv.experience.map((job) => (
          <Fragment key={job.company}>
            <h3 className='flex'>
              <a className='flex items-center' href={job.url} target="_blank" rel="noopener noreferrer">
                {job.company}
              </a>
              , {job.role}
            </h3>
            <h4>{job.start} - {job.end}</h4>
            <p className="cv-muted">{job.description}</p>
            <ul className="list-disc list-inside">
              {job.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Fragment>
        ))}
      </Section>

      <Section title={cv.headings.skills}>
        {cv.skillGroups.map((group) => (
          <p key={group.label} className="cv-skill-group">
            <strong>{group.label}:</strong> {group.items}
          </p>
        ))}
      </Section>

      <Section title={cv.headings.projects}>
        {cv.projects.map((project) => (
          <div key={project.url} className="cv-project">
            <h3>
              <a href={project.url} target="_blank" rel="noopener noreferrer">{project.name}</a>
            </h3>
            <p>{project.description}</p>
            <p className="cv-muted">{project.stack}</p>
          </div>
        ))}
      </Section>

      <Section title={cv.headings.education}>
        <EntryList entries={cv.education} />
      </Section>

      <Section title={cv.headings.certifications}>
        <EntryList entries={cv.certifications} />
      </Section>

      <Section title={cv.headings.languages}>
        <ul className="list-disc list-inside">
          {cv.languages.map((language) => (
            <li key={language.name}><strong>{language.name}</strong>: {language.level}</li>
          ))}
        </ul>
      </Section>

      <Section title={cv.headings.strengths}>
        <p>{cv.strengths}</p>
      </Section>

      <Section title={cv.headings.contact}>
        <div className='contact-info'>
          <div>
            <PhoneIcon /> <a href={`tel:${config.contact.phone}`} target="_blank" rel="noopener noreferrer">{config.contact.phoneDisplay}</a>
          </div>
          <div>
            <EmailIcon /> <a href={`mailto:${config.contact.email}`} target="_blank" rel="noopener noreferrer">{config.contact.email}</a>
          </div>
          <div>
            <MapIcon /> <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(config.contact.location)}`} target="_blank" rel="noopener noreferrer">{config.contact.location}</a>
          </div>
          <div>
            <WorkIcon /> {cv.contact.availability}
          </div>
          <div>
            <GitHubIcon /> <a href={config.social.github} target="_blank" rel="noopener noreferrer">{t('githubLink')}</a>
          </div>
          <div>
            <LinkedInIcon /><a href={config.social.linkedin} target="_blank" rel="noopener noreferrer">{t('linkedinLink')}</a>
          </div>
        </div>
      </Section>

      <div className="flex items-center justify-center lg:flex-row">
        <button
          onClick={handleDownloadCV}
          className="my-5 rounded-sm px-3 py-1 download-cv-button"
          aria-label={t('downloadCV')}
        >
          {t('downloadCV')}
        </button>
      </div>
    </div>
  );
};

export default CV;
