import PropTypes from 'prop-types';
import React, { lazy, Suspense, useCallback, useMemo } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import ArticleIcon from '@mui/icons-material/Article';
import CodeIcon from '@mui/icons-material/Code';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Banner from '../components/Banner';
import PageMeta from '../components/PageMeta';
import User from '../components/User';
import useLCPMonitor from '../hooks/useLCPMonitor';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { localizedPath, stripLanguage } from '../i18n/routes.js';
import Logo from "../files/images/fotocvfondo.webp";
import LogoSm from "../files/images/fotocvfondo-sm.webp";
import Logo400 from "../files/images/fotocvfondo-400.webp";
import Logo600 from "../files/images/fotocvfondo-600.webp";
import LogoMd from "../files/images/fotocvfondo-md.webp";
import LogoLg from "../files/images/fotocvfondo-lg.webp";
import "./Home.css";

// Lazy load page components. src/index.jsx and src/entry-server.jsx load the
// current section first (preloadSection), so the first render doesn't suspend
// and the prerendered HTML is replaced without a loading spinner in between.
const PAGE_LOADERS = {
  cv: () => import("../pages/CV"),
  projects: () => import("../pages/Projects"),
};
const LAZY_PAGES = {
  cv: lazy(PAGE_LOADERS.cv),
  projects: lazy(PAGE_LOADERS.projects),
};
const loadedPages = {};

const SECTION_META_KEYS = {
  cv: { title: 'metaTitleCv', description: 'metaDescriptionCv' },
  projects: { title: 'metaTitleProjects', description: 'metaDescriptionProjects' },
};

const sectionFromPath = (pathname) => {
  const path = stripLanguage(pathname).replace(/^\//, '');
  return SECTION_META_KEYS[path] ? path : 'cv';
};

const sectionPath = (section) => (section === 'cv' ? '/' : `/${section}`);

export const preloadSection = async (pathname) => {
  const section = sectionFromPath(pathname);
  loadedPages[section] = (await PAGE_LOADERS[section]()).default;
};

const SectionPage = ({ section }) => {
  const Page = loadedPages[section] || LAZY_PAGES[section];
  return <Page />;
};

SectionPage.propTypes = {
  section: PropTypes.oneOf(Object.keys(PAGE_LOADERS)).isRequired,
};

const LoadingFallback = () => (
  <div className="flex items-center justify-center py-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-current"></div>
  </div>
);

const Home = () => {
  const { t, currentLanguage } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  // Monitor LCP performance improvements
  useLCPMonitor();

  const selectedTab = sectionFromPath(location.pathname);

  const handleChange = useCallback((event, newSelectedTab) => {
    navigate(localizedPath(currentLanguage, sectionPath(newSelectedTab)));
  }, [navigate, currentLanguage]);

  const user = useMemo(() => new User(
    t('name').split(' ')[0], // 'Jesús'
    t('name').split(' ').slice(1).join(' '), // 'Márquez Delgado'
    { Logo, LogoSm, Logo400, Logo600, LogoMd, LogoLg },
    t('title') // 'Ingeniero Informático' / 'Computer Engineer'
  ), [t]);

  return (
    <main className="modern-portfolio">
      <PageMeta
        title={t(SECTION_META_KEYS[selectedTab].title)}
        description={t(SECTION_META_KEYS[selectedTab].description)}
        path={localizedPath(currentLanguage, sectionPath(selectedTab))}
      />

      {/* New Banner Header - Full Width */}
      <Banner user={user} />

      {/* Enhanced Navigation */}
      <nav className='navigation-section' role="navigation" aria-label={t('portfolioSections')}>
        <div className="nav-glow"></div>
        <h2 className="sr-only">{t('portfolioSections')}</h2>
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          aria-label={t('portfolioNavigationTabs')}
          variant='fullWidth'
          centered
          className='modern-tabs content-width'
        >
          <Tab className='modern-tab' icon={<ArticleIcon />} iconPosition="start" label={t('cv')} value="cv" aria-controls="cv-panel" />
          <Tab className='modern-tab' icon={<CodeIcon />} iconPosition="start" label={t('projects')} value="projects" aria-controls="projects-panel" />
        </Tabs>
      </nav>

      {/* Content Section */}
      <section className="content-section" role="tabpanel" aria-label={`${selectedTab} content`} id={`${selectedTab}-panel`}>
        <h2 className="sr-only">{t(selectedTab)} {t('portfolioSections')}</h2>
        <div className="content-container">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              {/* Webs, Games & XR and AR/VR are filters of Projects now; public/_redirects sends them there with a 301. */}
              <Route path="/webs" element={<Navigate to="/projects?type=web" replace />} />
              <Route path="/games" element={<Navigate to="/projects?type=games" replace />} />
              <Route path="/arvr" element={<Navigate to="/projects?type=xr" replace />} />
              <Route path="*" element={<SectionPage section={selectedTab} />} />
            </Routes>
          </Suspense>
        </div>
      </section>
    </main>
  );
};

export default Home;
