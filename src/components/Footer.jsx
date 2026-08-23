import React from 'react';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import Iconlink from "./Iconlink.jsx";
import GitHubLogo from "../files/svg/github.svg?react";
import LinkedinLogo from "../files/svg/linkledin.svg?react";

const Footer = React.memo(() => {
  const { t } = useLanguage();
  
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
                href="https://github.com/Jesus-md-dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="modern-social-link"
              />
              <Iconlink 
                svg={<LinkedinLogo />} 
                href="https://www.linkedin.com/in/jes%C3%BAs-m%C3%A1rquez-delgado-1334531b9/" 
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
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-copyright">
          <span>{t('allRightsReserved')}</span>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;