import React from 'react';
import Line from "../components/Line";
import ProjectCard, { ProjectGrid, ProjectImage } from "../components/ProjectCard.jsx";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import xprojects from "../files/images/1xprojects-with-logo-transformed.webp";
import xprojectsSm from "../files/images/1xprojects-with-logo-transformed-sm.webp";
import xprojectsMd from "../files/images/1xprojects-with-logo-transformed-md.webp";
import xprojectsLg from "../files/images/1xprojects-with-logo-transformed-lg.webp";
import jmcvweb from "../files/images/jm-cv-web-transformed.webp";
import jmcvwebSm from "../files/images/jm-cv-web-transformed-sm.webp";
import jmcvwebMd from "../files/images/jm-cv-web-transformed-md.webp";
import jmcvwebLg from "../files/images/jm-cv-web-transformed-lg.webp";
import jmcvwebXl from "../files/images/jm-cv-web-transformed-xl.webp";

// The client sites built at 1xINTERNET, one button each.
const CLIENT_SITES = [
  { name: 'Circor', href: 'https://www.circor.com/' },
  { name: 'Pumps', href: 'https://pumps.circor.com/' },
  { name: 'Maggi', href: 'https://www.maggi.de/' },
  { name: 'Thomy', href: 'https://www.thomy.de/' },
];

function Webs() {
  const { t } = useLanguage();

  return (
    <div className="webs-page content-width">
      <h2>
        <Line />
        {t('webs')}
      </h2>

      <ProjectGrid>
        <ProjectCard
          name={t('websAt1xinternet')}
          media={
            <ProjectImage
              image={{ src: xprojects, srcSm: xprojectsSm, srcMd: xprojectsMd, srcLg: xprojectsLg }}
              alt={t('projectsShowcase')}
            />
          }
          text={t('websAt1xinternetText')}
          stack={['Drupal', 'PHP', 'React', 'Tailwind CSS']}
          stackLabel={t('projectsStack')}
          links={CLIENT_SITES.map(({ name, href }) => ({
            href,
            label: name,
            type: 'live',
            ariaLabel: `${t('projectsLive')}: ${name}`,
          }))}
        />
        <ProjectCard
          name={t('personalCVWeb')}
          media={
            <ProjectImage
              image={{ src: jmcvweb, srcSm: jmcvwebSm, srcMd: jmcvwebMd, srcLg: jmcvwebLg, srcXl: jmcvwebXl }}
              alt={t('personalWebsiteScreenshot')}
            />
          }
          text={t('personalCVWebText')}
          stack={['React', 'Vite', 'Tailwind CSS', 'MUI', 'Netlify']}
          stackLabel={t('projectsStack')}
          links={[
            {
              href: 'https://github.com/Jesus-md-dev/portfolio',
              label: t('projectsCode'),
              type: 'code',
              ariaLabel: `${t('projectsCode')}: ${t('personalCVWeb')} (GitHub)`,
            },
          ]}
        />
      </ProjectGrid>
    </div>
  );
}

export default Webs;
