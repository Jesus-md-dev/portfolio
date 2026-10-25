import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from "./App.jsx";
import { DEFAULT_LANGUAGE, languageFromPath, localizedPath, stripLanguage } from "./i18n/routes.js";
import { preloadSection } from "./pages/Home.jsx";

const BOT_PATTERN = /bot|crawl|spider|slurp|lighthouse|headless/i;

// Spanish pages send visitors to English when they chose it last, or, on a
// first visit, when the browser is in English. Crawlers are never redirected,
// so each language keeps its own indexable URL. English pages never redirect.
function preferredLanguagePath() {
  const { pathname, search, hash } = window.location;
  if (languageFromPath(pathname) !== DEFAULT_LANGUAGE) return null;
  let stored = null;
  try {
    stored = localStorage.getItem('preferredLanguage');
  } catch {
    // Storage blocked: fall back to the browser language.
  }
  const browserEnglish = !BOT_PATTERN.test(navigator.userAgent)
    && (navigator.language || '').toLowerCase().startsWith('en');
  if (stored === 'en' || (!stored && browserEnglish)) {
    return localizedPath('en', stripLanguage(pathname)) + search + hash;
  }
  return null;
}

const redirect = preferredLanguagePath();
if (redirect) {
  window.history.replaceState(null, '', redirect);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
preloadSection(window.location.pathname)
  .catch(() => {
    // The lazy page loads on render instead.
  })
  .then(() => root.render(<App Router={BrowserRouter} />));


// Register service worker for PWA functionality
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js', { updateViaCache: 'none' })
      .then((registration) => {
        // eslint-disable-next-line no-console
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        // eslint-disable-next-line no-console
        console.log('SW registration failed: ', registrationError);
      });
  });
}