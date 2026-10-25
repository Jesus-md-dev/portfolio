// Server entry for scripts/prerender.mjs, which renders each page to static
// HTML at build time so crawlers and AI tools that don't run JavaScript see the
// content. The browser then hydrates it or renders over it (src/index.jsx).
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App.jsx';
import cvEn from './data/cv.en.json';
import cvEs from './data/cv.es.json';
import contact from './data/contact.json';
import { translations } from './i18n/translations.js';
import { preloadSection } from './pages/Home.jsx';

export { contact, translations };
export const cvData = { en: cvEn, es: cvEs };

export async function render(url) {
  await preloadSection(url);
  return renderToString(<App Router={StaticRouter} routerProps={{ location: url }} />);
}
