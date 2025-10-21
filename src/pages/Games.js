import React from 'react';
import VideoText from "../components/VideoText.js";
import { useLanguage } from "../i18n/LanguageContext.js";

function Games() {
  const { t } = useLanguage();
  
  return (
    <div className="games-page">
      <VideoText
        url="https://www.youtube.com/embed/NsuEjiRypPo"
        title="Survival Zombie"
        text={
          <>
            {t('survivalZombieText')}
            {' '}
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jesus-perinan-davila/">
              Jesús Periñán Dávila
            </a>
            {'. '}
            <a target="_blank" rel="noopener noreferrer" href="https://unity.com/">Unity</a>
            .
          </>
        }
      />
      <VideoText
        url="https://www.youtube.com/embed/wG-2kG7awZo"
        invert={true}
        title="Shooter de oleadas"
        text={
          <>
            {t('waveShooterText')}
            {' '}
            <a target="_blank" rel="noopener noreferrer" href="https://unity.com/">Unity</a>
            .
          </>
        }
      />
      <VideoText
        url="https://www.youtube.com/embed/7Ij2qMfMZoE"
        title="Space Ball"
        text={
          <>
            {t('spaceBallText')}
            {' '}
            <a target="_blank" rel="noopener noreferrer" href="https://unity.com/">Unity</a>
            .
          </>
        }
      />
      <VideoText
        url="https://www.youtube.com/embed/CpbWe8kSolI"
        invert={true}
        dark={true}
        title="Cubo ZigZag"
        text={
          <>
            {t('zigzagCubeText')}
            {' '}
            <a target="_blank" rel="noopener noreferrer" href="https://unity.com/">Unity</a>
            .
          </>
        }
      />
    </div>
  );
}

export default Games;