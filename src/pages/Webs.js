import React from 'react';
import ImageText from "../components/ImageText";
import { useLanguage } from "../i18n/LanguageContext.js";
import xprojects from "../files/images/1xprojects-with-logo-transformed.webp";
import jmcvweb from "../files/images/jm-cv-web-transformed.webp";

function Webs() {
  const { t } = useLanguage();
  
  return (
    <div className="webs-page">
      <ImageText
        src={xprojects}
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