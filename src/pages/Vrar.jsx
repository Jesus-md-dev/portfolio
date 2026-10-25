import React from 'react';
import ProjectLinks, { UniversityBadge } from "../components/ProjectLinks.jsx";
import VideoText from "../components/VideoText.jsx";
import { useLanguage } from "../i18n/LanguageContext.jsx";

function Vrar() {
  const { t } = useLanguage();
  
  return (
    <div className="vrar-page">
      <VideoText
        key="monster-war"
        url="https://www.youtube.com/embed/jIragOxu9tA"
        title={t('monsterWarTitle')}
        text={
          <span>
            <UniversityBadge label={t('universityProject')} />
            {t('monsterWarText')}
            {' '}
            <a target="_blank" rel="noopener noreferrer" href="https://unity.com/">Unity</a>
            {' '}
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jesus-perinan-davila/">
              Jesús Periñán Dávila
            </a>
            .
            <ProjectLinks
              links={[
                { href: 'https://github.com/Jesus-md-dev/Trabajo-Realidad-Aumentada', label: t('viewCode'), type: 'code' },
              ]}
            />
          </span>
        }
      />
      <VideoText
        key="space-survival"
        url="https://www.youtube.com/embed/CMsBWdokYGc"
        invert={true}
        title={t('spaceSurvivalTitle')}
        text={
          <span>
            <UniversityBadge label={t('universityProject')} />
            {t('spaceSurvivalText')}
            {' '}
            <a target="_blank" rel="noopener noreferrer" href="https://unity.com/">Unity</a>
            .
            <ProjectLinks
              links={[
                { href: 'https://github.com/Jesus-md-dev/Trabajo-Realidad-Virtual', label: t('viewCode'), type: 'code' },
              ]}
            />
          </span>
        }
      />
      <VideoText
        key="quimicefa"
        url="https://www.youtube.com/embed/Jvo3VOHDayM"
        title={t('quimicefaTitle')}
        text={
          <span>
            <UniversityBadge label={t('universityProject')} />
            {t('quimicefaText')}
            {' '}
            <a target="_blank" rel="noopener noreferrer" href="https://unity.com/">Unity</a>
            .
            <ProjectLinks
              links={[
                { href: 'https://github.com/Jesus-md-dev/Trabajo-Realidad-Aumentada', label: t('viewCode'), type: 'code' },
              ]}
            />
          </span>
        }
      />
    </div>
  );
}

export default Vrar;