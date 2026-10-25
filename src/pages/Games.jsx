import React from 'react';
import PropTypes from 'prop-types';
import ImageText from "../components/ImageText.jsx";
import ProjectLinks, { UniversityBadge } from "../components/ProjectLinks.jsx";
import Line from "../components/Line.jsx";
import VideoText from "../components/VideoText.jsx";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import queTePincho from "../files/images/que-te-pincho.webp";
import queTePinchoSm from "../files/images/que-te-pincho-sm.webp";
import queTePinchoMd from "../files/images/que-te-pincho-md.webp";

// One section per engine or platform. Each section title is an h2, so the
// project titles inside it are h3.
function GamesSection({ id, title, children }) {
  return (
    <section className="games-section" id={id} aria-labelledby={`${id}-title`}>
      <div className="content-width w-full">
        <h2 className="games-section-title" id={`${id}-title`}>
          <Line />
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

GamesSection.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

function Games() {
  const { t } = useLanguage();
  
  return (
    <div className="games-page">
      <GamesSection id="godot" title={t('gamesSectionGodot')}>
        <ImageText
          headingLevel={3}
          src={queTePincho}
          srcSm={queTePinchoSm}
          srcMd={queTePinchoMd}
          alt={t('queTePinchoScreenshotAlt')}
          title={t('queTePinchoTitle')}
          text={
            <>
              {t('queTePinchoText')}
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
      </GamesSection>
      <GamesSection id="unity" title={t('gamesSectionUnity')}>
        <VideoText
          headingLevel={3}
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
          headingLevel={3}
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
          headingLevel={3}
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
          headingLevel={3}
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
      </GamesSection>
      <GamesSection id="ar-vr" title={t('gamesSectionArvr')}>
        <VideoText
          headingLevel={3}
          url="https://www.youtube.com/embed/jIragOxu9tA"
          invert={true}
          title={t('monsterWarTitle')}
          text={
            <>
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
            </>
          }
        />
        <VideoText
          headingLevel={3}
          url="https://www.youtube.com/embed/Jvo3VOHDayM"
          title={t('quimicefaTitle')}
          text={
            <>
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
            </>
          }
        />
        <VideoText
          headingLevel={3}
          url="https://www.youtube.com/embed/CMsBWdokYGc"
          invert={true}
          title={t('spaceSurvivalTitle')}
          text={
            <>
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
            </>
          }
        />
      </GamesSection>
    </div>
  );
}

export default Games;
