import React from 'react';
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
            {t('monsterWarText')}
            {' '}
            <a target="_blank" rel="noopener noreferrer" href="https://unity.com/">Unity</a>
            {' '}
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jesus-perinan-davila/">
              Jesús Periñán Dávila
            </a>
            .
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
            {t('spaceSurvivalText')}
            {' '}
            <a target="_blank" rel="noopener noreferrer" href="https://unity.com/">Unity</a>
            .
          </span>
        }
      />
      <VideoText
        key="quimicefa"
        url="https://www.youtube.com/embed/Jvo3VOHDayM"
        title={t('quimicefaTitle')}
        text={
          <span>
            {t('quimicefaText')}
            {' '}
            <a target="_blank" rel="noopener noreferrer" href="https://unity.com/">Unity</a>
            .
          </span>
        }
      />
    </div>
  );
}

export default Vrar;