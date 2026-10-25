import React from 'react';
import PropTypes from 'prop-types';
import Line from "../components/Line.jsx";
import ProjectCard, { ProjectGrid, ProjectImage } from "../components/ProjectCard.jsx";
import YouTubeFacade from "../components/YouTubeFacade.jsx";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import queTePincho from "../files/images/que-te-pincho.webp";
import queTePinchoSm from "../files/images/que-te-pincho-sm.webp";
import queTePinchoMd from "../files/images/que-te-pincho-md.webp";

const GITHUB = 'https://github.com/Jesus-md-dev';
const COLLABORATOR = 'Jesús Periñán Dávila';
const COLLABORATOR_URL = 'https://www.linkedin.com/in/jesus-perinan-davila/';

// Each game shows either a screenshot (`image`) or a YouTube video (`video`,
// click-to-load). `university` adds the university project badge.
const SECTIONS = [
  {
    id: 'godot',
    titleKey: 'gamesSectionGodot',
    games: [
      {
        id: 'que-te-pincho',
        titleKey: 'queTePinchoTitle',
        textKey: 'queTePinchoText',
        // The text ends with "Made with", followed by the engine link.
        engine: { name: 'Godot 4', href: 'https://godotengine.org/' },
        stack: ['Godot 4', 'WebRTC', 'Web', 'Android'],
        image: { src: queTePincho, srcSm: queTePinchoSm, srcMd: queTePinchoMd },
        imageAltKey: 'queTePinchoScreenshotAlt',
        play: 'https://lab.jzmarquez.com/p-e934da6fe540/',
      },
    ],
  },
  {
    id: 'unity',
    titleKey: 'gamesSectionUnity',
    games: [
      {
        id: 'survival-zombie',
        titleKey: 'survivalZombieTitle',
        textKey: 'survivalZombieText',
        stack: ['Unity', 'C#'],
        video: 'https://www.youtube.com/embed/NsuEjiRypPo',
        repo: `${GITHUB}/Trabajo-FPS-Unity`,
        university: true,
      },
      {
        id: 'wave-shooter',
        titleKey: 'waveShooterTitle',
        textKey: 'waveShooterText',
        stack: ['Unity', 'C#'],
        video: 'https://www.youtube.com/embed/wG-2kG7awZo',
      },
      {
        id: 'space-ball',
        titleKey: 'spaceBallTitle',
        textKey: 'spaceBallText',
        stack: ['Unity', 'C#'],
        video: 'https://www.youtube.com/embed/7Ij2qMfMZoE',
        repo: `${GITHUB}/Juego-Plataformas-Simple-Unity`,
        university: true,
      },
      {
        id: 'zigzag-cube',
        titleKey: 'zigzagCubeTitle',
        textKey: 'zigzagCubeText',
        stack: ['Unity', 'C#'],
        video: 'https://www.youtube.com/embed/CpbWe8kSolI',
      },
    ],
  },
  {
    id: 'ar-vr',
    titleKey: 'gamesSectionArvr',
    games: [
      {
        id: 'monster-war',
        titleKey: 'monsterWarTitle',
        textKey: 'monsterWarText',
        stack: ['Unity', 'C#', 'AR'],
        video: 'https://www.youtube.com/embed/jIragOxu9tA',
        repo: `${GITHUB}/Trabajo-Realidad-Aumentada`,
        university: true,
      },
      {
        id: 'quimicefa',
        titleKey: 'quimicefaTitle',
        textKey: 'quimicefaText',
        stack: ['Unity', 'C#', 'AR'],
        video: 'https://www.youtube.com/embed/Jvo3VOHDayM',
        repo: `${GITHUB}/Trabajo-Realidad-Aumentada`,
        university: true,
      },
      {
        id: 'space-survival',
        titleKey: 'spaceSurvivalTitle',
        textKey: 'spaceSurvivalText',
        stack: ['Unity', 'C#', 'VR'],
        video: 'https://www.youtube.com/embed/CMsBWdokYGc',
        repo: `${GITHUB}/Trabajo-Realidad-Virtual`,
        university: true,
      },
    ],
  },
];

const externalLink = (href, label) => (
  <a target="_blank" rel="noopener noreferrer" href={href}>{label}</a>
);

// The game's text, with the engine link appended or the collaborator's name linked.
function gameText(game, t) {
  const text = t(game.textKey);
  if (game.engine) {
    return <>{text} {externalLink(game.engine.href, game.engine.name)}.</>;
  }
  const [before, after] = text.split(COLLABORATOR);
  if (after === undefined) {
    return text;
  }
  return <>{before}{externalLink(COLLABORATOR_URL, COLLABORATOR)}{after}</>;
}

// One section per engine or platform. Each section title is an h2, so the
// game titles inside it are h3.
function GamesSection({ id, title, children }) {
  return (
    <section className="games-section" id={id} aria-labelledby={`${id}-title`}>
      <h2 className="games-section-title" id={`${id}-title`}>
        <Line />
        {title}
      </h2>
      <ProjectGrid>{children}</ProjectGrid>
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
    <div className="games-page content-width">
      {SECTIONS.map((section) => (
        <GamesSection key={section.id} id={section.id} title={t(section.titleKey)}>
          {section.games.map((game) => {
            const name = t(game.titleKey);
            const links = [];
            if (game.play) {
              links.push({ href: game.play, label: t('playInBrowser'), type: 'play' });
            }
            if (game.repo) {
              links.push({ href: game.repo, label: t('projectsCode'), type: 'code', ariaLabel: `${t('projectsCode')}: ${name} (GitHub)` });
            }
            return (
              <ProjectCard
                key={game.id}
                name={name}
                media={game.image
                  ? <ProjectImage image={game.image} alt={t(game.imageAltKey)} />
                  : <YouTubeFacade url={game.video} title={name} className="project-media" />}
                text={gameText(game, t)}
                stack={game.stack}
                stackLabel={t('projectsStack')}
                links={links}
                badge={game.university ? t('universityProject') : undefined}
              />
            );
          })}
        </GamesSection>
      ))}
    </div>
  );
}

export default Games;
