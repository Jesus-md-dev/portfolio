import React from 'react';
import ImageText from "../components/ImageText";
import { useLanguage } from "../i18n/LanguageContext.js";
import xprojects from "../files/images/1xprojects-with-logo-transformed.webp";
import xprojectsSm from "../files/images/1xprojects-with-logo-transformed-sm.webp";
import xprojectsMd from "../files/images/1xprojects-with-logo-transformed-md.webp";
import xprojectsLg from "../files/images/1xprojects-with-logo-transformed-lg.webp";
import jmcvweb from "../files/images/jm-cv-web-transformed.webp";
import jmcvwebSm from "../files/images/jm-cv-web-transformed-sm.webp";
import jmcvwebMd from "../files/images/jm-cv-web-transformed-md.webp";
import jmcvwebLg from "../files/images/jm-cv-web-transformed-lg.webp";
import jmcvwebXl from "../files/images/jm-cv-web-transformed-xl.webp";

function Webs() {
  const { t } = useLanguage();
  
  return (
    <div className="webs-page">
      <ImageText
        src={xprojects}
        srcSm={xprojectsSm}
        srcMd={xprojectsMd}
        srcLg={xprojectsLg}
        alt={t('projectsShowcase')}
        title={
          <span>
            {t('websAt1xinternet')} <a target="_blank" rel="noopener noreferrer" href="https://www.1xinternet.de/en">1xINTERNET</a>
          </span>
        }
        text={
          <span>
            {t('websAt1xinternetText')}
            {' '}
            <a target="_blank" rel="noopener noreferrer" href="https://www.1xinternet.de/en">1xINTERNET</a>
            {', '}
            <a target="_blank" rel="noopener noreferrer" href="https://new.drupal.org/">Drupal</a>
            {', '}
            <a target="_blank" rel="noopener noreferrer" href="https://react.dev/">React</a>
            {' y '}
            <a target="_blank" rel="noopener noreferrer" href="https://tailwindcss.com/">Tailwind CSS</a>
            {'. Las webs: '}
            <a target="_blank" rel="noopener noreferrer" href="https://www.circor.com/">Circor</a>
            {', '}
            <a target="_blank" rel="noopener noreferrer" href="https://pumps.circor.com/">Pumps</a>
            {', '}
            <a target="_blank" rel="noopener noreferrer" href="https://www.maggi.de/">Maggi</a>
            {' y '}
            <a target="_blank" rel="noopener noreferrer" href="https://www.thomy.de/">Thomy</a>
            .
          </span>
        }
      />
      <ImageText
        src={jmcvweb}
        srcSm={jmcvwebSm}
        srcMd={jmcvwebMd}
        srcLg={jmcvwebLg}
        srcXl={jmcvwebXl}
        invert={true}
        alt={t('personalWebsiteScreenshot')}
        title={t('personalCVWeb')}
        text={
          <span>
            {t('personalCVWebText')}
            {' '}
            <a target="_blank" rel="noopener noreferrer" href="https://react.dev/">React</a>
            {', '}
            <a target="_blank" rel="noopener noreferrer" href="https://tailwindcss.com/">Tailwind CSS</a>
            {' y '}
            <a target="_blank" rel="noopener noreferrer" href="https://mui.com/">MUI</a>
            .
          </span>
        }
      />
    </div>
  );
}

export default Webs;