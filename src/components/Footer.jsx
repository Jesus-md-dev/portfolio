import React from 'react';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import ScienceIcon from '@mui/icons-material/Science';
import config from '../config/index.js';
import Iconlink from "./Iconlink.jsx";
import GitHubLogo from "../files/svg/github.svg?react";
import LinkedinLogo from "../files/svg/linkledin.svg?react";

const Footer = React.memo(() => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="modern-footer">
      <div className="footer-glow"></div>
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-title">
            <span className="footer-highlight">Jesús Márquez</span>
          </div>
          <div className="footer-subtitle">{t('footerSubtitle')}</div>
        </div>
        
        <div className="footer-section">
          <div className="footer-links">
            <div className="social-links">
              <Iconlink 
                svg={<GitHubLogo />} 
                href={config.social.github}
                label={t('githubLink')}
                target="_blank" 
                rel="noopener noreferrer"
                className="modern-social-link"
              />
              <Iconlink 
                svg={<LinkedinLogo />} 
                href={config.social.linkedin}
                label={t('linkedinLink')}
                target="_blank" 
                rel="noopener noreferrer"
                className="modern-social-link"
              />
              <Iconlink
                svg={<ScienceIcon />}
                href={config.social.lab}
                label={t('labLink')}
                target="_blank"
                rel="noopener noreferrer"
                className="modern-social-link"
              />
            </div>
          </div>
        </div>
        
        <div className="footer-section">
          <div className="footer-contact">
            <div className="contact-item">
              <span>{t('footerLocationSpain')}</span>
            </div>
            <div className="contact-item">
              <span>{t('availableForProjects')}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-copyright">
          <span>© {currentYear} {t('allRightsReserved')}</span>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;