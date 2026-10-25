import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MapIcon from '@mui/icons-material/Map';
import PhoneIcon from '@mui/icons-material/Phone';
import WorkIcon from '@mui/icons-material/Work';
import PropTypes from 'prop-types';
import config from "../config/index.js";
import Line from "../components/Line.jsx";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import "./CV.css";

// Content mirrors the PDF CV sources in cv/cv-{en,es}.html; keep both in sync.
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

  const handleDownloadCV = () => {
    const url = config.cv.downloadUrl[currentLanguage] || config.cv.downloadUrl.es;
    window.open(url, '_blank').focus();
  };

  return (
    <div className='cv-container'>
      <Section title={t('workExperience')}>
        <h3 className='flex'>
          <a className='flex items-center' href='https://www.1xinternet.de/' target="_blank" rel="noopener noreferrer">
            1xINTERNET
          </a>
          , {t('webDeveloper')}
        </h3>
        <h4>{t('workStartDate')} - {t('currentDate')}</h4>
        <p className="cv-muted">{t('workCompanyDescription')}</p>
        <ul className="list-disc list-inside">
          {t('workItems').map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>

      <Section title={t('technologies')}>
        {t('techGroups').map((group) => (
          <p key={group.label} className="cv-skill-group">
            <strong>{group.label}:</strong> {group.items}
          </p>
        ))}
      </Section>

      <Section title={t('selectedProjects')}>
        {t('projectsList').map((project) => (
          <div key={project.url} className="cv-project">
            <h3>
              <a href={project.url} target="_blank" rel="noopener noreferrer">{project.name}</a>
            </h3>
            <p>{project.description}</p>
            <p className="cv-muted">{project.stack}</p>
          </div>
        ))}
      </Section>

      <Section title={t('academicData')}>
        <EntryList entries={t('education')} />
      </Section>

      <Section title={t('certificationsTitle')}>
        <EntryList entries={t('certifications')} />
      </Section>

      <Section title={t('languagesTitle')}>
        <ul className="list-disc list-inside">
          {t('languagesList').map((language) => (
            <li key={language.name}><strong>{language.name}</strong>: {language.level}</li>
          ))}
        </ul>
      </Section>

      <Section title={t('skills')}>
        <p>{t('strengthsLine')}</p>
      </Section>

      <Section title={t('contact')}>
        <div className='contact-info'>
          <div>
            <PhoneIcon /> <a href={`tel:${config.contact.phone}`} target="_blank" rel="noopener noreferrer">{config.contact.phone}</a>
          </div>
          <div>
            <EmailIcon /> <a href={`mailto:${config.contact.email}`} target="_blank" rel="noopener noreferrer">{config.contact.email}</a>
          </div>
          <div>
            <MapIcon /> <a href="https://www.google.es/maps/place/Chiclana+de+la+Frontera,+C%C3%A1diz" target="_blank" rel="noopener noreferrer">{config.contact.location}</a>
          </div>
          <div>
            <WorkIcon /> {t('availability')}
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
          className="my-5 rounded px-3 py-1 download-cv-button"
          aria-label={t('downloadCV')}
        >
          {t('downloadCV')}
        </button>
      </div>
    </div>
  );
};

export default CV;
