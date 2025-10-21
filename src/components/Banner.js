import PropTypes from 'prop-types';
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import Avatar from "../components/Avatar.js";
import { useLanguage } from "../i18n/LanguageContext.js";

const Banner = React.memo(({ className, user }) => {
    const { t } = useLanguage();
    
    return (
        <header className={`banner-header ${className}`}>
            {/* Grid overlay effect from thumbnail */}
            <div className="banner-grid-overlay"></div>
            <div className="banner-glow-effect"></div>
            
            {/* Floating tech icons */}
            <div className="banner-floating-icons">
                <div className="banner-floating-icon" style={{"--delay": "0s", "--top": "15%", "--left": "8%"}}>⚛️</div>
                <div className="banner-floating-icon" style={{"--delay": "2s", "--top": "25%", "--right": "12%"}}>🎮</div>
                <div className="banner-floating-icon" style={{"--delay": "4s", "--bottom": "30%", "--left": "10%"}}>🌐</div>
                <div className="banner-floating-icon" style={{"--delay": "1s", "--top": "70%", "--right": "15%"}}>📱</div>
                <div className="banner-floating-icon" style={{"--delay": "3s", "--top": "45%", "--left": "5%"}}>🚀</div>
                <div className="banner-floating-icon" style={{"--delay": "5s", "--bottom": "25%", "--right": "8%"}}>💻</div>
                <div className="banner-floating-icon" style={{"--delay": "2.5s", "--top": "80%", "--left": "85%"}}>🥽</div>
                <div className="banner-floating-icon" style={{"--delay": "4.5s", "--top": "10%", "--left": "85%"}}>⚡</div>
            </div>

            {/* Main content with profile picture */}
            <div className="banner-main-content">
                <div className="banner-content-grid">
                    {/* Left side - Profile picture */}
                    <div className="banner-profile-section">
                        <div className="banner-avatar-container">
                            <Avatar user={user} />
                            <div className="banner-avatar-glow"></div>
                        </div>
                    </div>
                    
                    {/* Right side - Text content */}
                    <div className="banner-text-section">
                        <div className="banner-portfolio-label">{t('developerPortfolio')}</div>
                        <h1 className="banner-name">JESÚS MÁRQUEZ</h1>
                        <h2 className="banner-subtitle">{t('bannerSubtitle')}</h2>
                        <p className="banner-description">
                            {t('bannerDescription')}
                        </p>
                        
                        {/* Skills section from thumbnail */}
                        <div className="banner-skills-section">
                            <div className="banner-skill-category">
                                <h3>{t('webDevelopmentTitle')}</h3>
                                <div className="banner-skill-items">
                                    <span className="banner-skill-tag">React</span>
                                    <span className="banner-skill-tag">Drupal</span>
                                    <span className="banner-skill-tag">PHP</span>
                                    <span className="banner-skill-tag">JavaScript</span>
                                    <span className="banner-skill-tag">Python</span>
                                </div>
                            </div>
                            <div className="banner-skill-category">
                                <h3>{t('gameDevelopmentTitle')}</h3>
                                <div className="banner-skill-items">
                                    <span className="banner-skill-tag">Unity</span>
                                    <span className="banner-skill-tag">C#</span>
                                    <span className="banner-skill-tag">AR/VR</span>
                                    <span className="banner-skill-tag">Godot</span>
                                </div>
                            </div>
                            <div className="banner-skill-category">
                                <h3>{t('technologiesTitle')}</h3>
                                <div className="banner-skill-items">
                                    <span className="banner-skill-tag">AWS</span>
                                    <span className="banner-skill-tag">Netlify</span>
                                    <span className="banner-skill-tag">MySQL</span>
                                    <span className="banner-skill-tag">Tailwind</span>
                                    <span className="banner-skill-tag">Django</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Contact info from thumbnail */}
            <div className="banner-contact-info">
                <GitHubIcon className="banner-contact-icon" /> <a href="https://github.com/Jesus-md-dev" alt={t('githubProfile')} target="_blank" rel="noopener noreferrer">Jesus-md-dev</a>  •  📧 <a href="mailto:jesusmarquezdelgado@gmail.com"> {t('contactEmail')}</a>  •  📍 {t('locationSpain')}
            </div>
        </header>
    );
});

Banner.displayName = 'Banner';

Banner.propTypes = {
    className: PropTypes.string,
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        surname: PropTypes.string.isRequired,
        degree: PropTypes.string.isRequired
    }).isRequired
};

export default Banner;