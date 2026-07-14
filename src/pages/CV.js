import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MapIcon from '@mui/icons-material/Map';
import PhoneIcon from '@mui/icons-material/Phone';
import config from "../config/index.js";
import Line from "../components/Line.js";
import { useLanguage } from "../i18n/LanguageContext.js";
import "./CV.css";

function CV() {
  const { t, currentLanguage } = useLanguage();

  const handleDownloadCV = () => {
    const url = config.cv.downloadUrl[currentLanguage] || config.cv.downloadUrl.es;
    window.open(url, '_blank').focus();
  };

  return (
    <div className='cv-container'>
      <div className="flex items-center justify-center lg:flex-row">
        <div className="content-width w-full flex flex-col lg:flex-row">
          <div>
            <span className="flex items-center">
              <h2>
                <Line />
                {t('workExperience')}
              </h2>
            </span>
            <div>
              <div>
                <h3 className='flex'>
                  <a className='flex items-center' href='https://www.1xinternet.de/' target="_blank" rel="noopener noreferrer">
                    1xINTERNET
                  </a>
                  , {t('webDeveloper')}
                </h3>
                <h4>{t('workStartDate')} - {t('currentDate')}</h4>
                <ul className="list-disc list-inside">
                  {t('workItems').map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center lg:flex-row">
        <div className="content-width w-full flex flex-col lg:flex-row">
          <div>
            <span className="flex items-center">
              <h2>
                <Line />
                {t('technologies')}
              </h2>
            </span>
            <div>
              <div>
                <ul className="list-disc list-inside">
                  {t('techHighLevel').map((item, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
                <br />
                <ul className="list-disc list-inside">
                  {t('techMediumLevel').map((item, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center lg:flex-row">
        <div className="content-width w-full flex flex-col lg:flex-row">
          <div>
            <span className="flex items-center">
              <h2>
                <Line />
                {t('skills')}
              </h2>
            </span>
            <div>
              <div>
                <ul className="list-disc list-inside">
                  {t('skillsList').map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center lg:flex-row">
        <div className="content-width w-full flex flex-col lg:flex-row">
          <div>
            <span className="flex items-center">
              <h2>
                <Line />
                {t('academicData')}
              </h2>
            </span>
            <div>
              <div>
                {t('education').map((edu, index) => (
                  <div key={index}>
                    <h3>{edu.title}</h3>
                    <ul className="list-disc list-inside">
                      <li>{edu.details}</li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center lg:flex-row">
        <div className="content-width w-full flex flex-col lg:flex-row">
          <div>
            <span className="flex items-center">
              <h2>
                <Line />
                {t('contact')}
              </h2>
            </span>
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
                <AccessTimeIcon /> {t('availability')}
              </div>
              <div>
                <GitHubIcon /> <a href={config.social.github} target="_blank" rel="noopener noreferrer">{t('githubLink')}</a>
              </div>
              <div>
                <LinkedInIcon /><a href={config.social.linkedin} target="_blank" rel="noopener noreferrer">{t('linkedinLink')}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
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