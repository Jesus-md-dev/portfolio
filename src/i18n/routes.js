// The language lives in the URL so that each version can be indexed:
// Spanish at / and /projects, English at /en and /en/projects.
export const LANGUAGES = ['es', 'en'];
export const DEFAULT_LANGUAGE = 'es';

const EN_PREFIX = /^\/en(?=\/|$)/;

export const languageFromPath = (pathname) => (EN_PREFIX.test(pathname) ? 'en' : DEFAULT_LANGUAGE);

// '/en/projects' -> '/projects', '/en' -> '/'
export const stripLanguage = (pathname) => pathname.replace(EN_PREFIX, '') || '/';

// ('en', '/projects') -> '/en/projects', ('en', '/') -> '/en', ('es', '/projects') -> '/projects'
export const localizedPath = (language, path) => {
  if (language === DEFAULT_LANGUAGE) return path;
  return path === '/' ? `/${language}` : `/${language}${path}`;
};
