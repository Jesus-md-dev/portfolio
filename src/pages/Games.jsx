import React from 'react';
import ImageText from "../components/ImageText.jsx";
import ProjectLinks, { UniversityBadge } from "../components/ProjectLinks.jsx";
import VideoText from "../components/VideoText.jsx";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import alTenedor from "../files/images/al-tenedor.webp";
import alTenedorSm from "../files/images/al-tenedor-sm.webp";
import alTenedorMd from "../files/images/al-tenedor-md.webp";

function Games() {
  const { t } = useLanguage();
  
  return (
    <div className="games-page">
      <ImageText
        src={alTenedor}
        srcSm={alTenedorSm}
        srcMd={alTenedorMd}
        alt={t('alTenedorScreenshotAlt')}
        title={t('alTenedorTitle')}
        text={
          <>
            {t('alTenedorText')}
            {' '}
            <a target="_blank" rel="noopener noreferrer" href="https://godotengine.org/">Godot 4</a>
            .
            <ProjectLinks
              links={[
                { href: 'https://lab.jzmarquez.com/p-e934da6fe540/', label: t('playInBrowser'), type: 'play' },
              ]}
            />
          </>
        }
      />
      <VideoText
        url="https://www.youtube.com/embed/NsuEjiRypPo"
        invert={true}
        title={t('survivalZombieTitle')}
        text={
          <>
            <UniversityBadge label={t('universityProject')} />
            {t('survivalZombieText')}
            {' '}
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jesus-perinan-davila/">
              Jesús Periñán Dávila
            </a>
            {'. '}
            <a target="_blank" rel="noopener noreferrer" href="https://unity.com/">Unity</a>
            .
            <ProjectLinks
              links={[
                { href: 'https://github.com/Jesus-md-dev/Trabajo-FPS-Unity', label: t('viewCode'), type: 'code' },
              ]}
            />
          </>
        }
      />
      <VideoText
        url="https://www.youtube.com/embed/wG-2kG7awZo"
        title={t('waveShooterTitle')}
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
        invert={true}
        title={t('spaceBallTitle')}
        text={
          <>
            <UniversityBadge label={t('universityProject')} />
            {t('spaceBallText')}
            {' '}
            <a target="_blank" rel="noopener noreferrer" href="https://unity.com/">Unity</a>
            .
            <ProjectLinks
              links={[
                { href: 'https://github.com/Jesus-md-dev/Juego-Plataformas-Simple-Unity', label: t('viewCode'), type: 'code' },
              ]}
            />
          </>
        }
      />
      <VideoText
        url="https://www.youtube.com/embed/CpbWe8kSolI"
        dark={true}
        title={t('zigzagCubeTitle')}
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
