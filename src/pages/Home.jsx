import React, { lazy, Suspense, useCallback, useMemo } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import ArticleIcon from '@mui/icons-material/Article';
import CodeIcon from '@mui/icons-material/Code';
import GamepadIcon from '@mui/icons-material/Gamepad';
import WebIcon from '@mui/icons-material/Web';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Banner from '../components/Banner';
import PageMeta from '../components/PageMeta';
import User from '../components/User';
import useLCPMonitor from '../hooks/useLCPMonitor';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import Logo from "../files/images/fotocvfondo.webp";
import LogoSm from "../files/images/fotocvfondo-sm.webp";
import Logo400 from "../files/images/fotocvfondo-400.webp";
import Logo600 from "../files/images/fotocvfondo-600.webp";
import LogoMd from "../files/images/fotocvfondo-md.webp";
import LogoLg from "../files/images/fotocvfondo-lg.webp";
import "./Home.css";

// Lazy load page components
const CV = lazy(() => import("../pages/CV"));
const Projects = lazy(() => import("../pages/Projects"));
const Games = lazy(() => import("../pages/Games"));
const Webs = lazy(() => import("../pages/Webs"));

const SECTION_META_KEYS = {
  cv: { title: 'metaTitleCv', description: 'metaDescriptionCv' },
  projects: { title: 'metaTitleProjects', description: 'metaDescriptionProjects' },
  webs: { title: 'metaTitleWebs', description: 'metaDescriptionWebs' },
  games: { title: 'metaTitleGames', description: 'metaDescriptionGames' },
};

const sectionFromPath = (pathname) => {
  const path = pathname.replace(/^\//, '');
  return SECTION_META_KEYS[path] ? path : 'cv';
};

const LoadingFallback = () => (
  <div className="flex items-center justify-center py-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-current"></div>
  </div>
);

const Home = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  // Monitor LCP performance improvements
  useLCPMonitor();

  const selectedTab = sectionFromPath(location.pathname);

  const handleChange = useCallback((event, newSelectedTab) => {
    navigate(newSelectedTab === 'cv' ? '/' : `/${newSelectedTab}`);
  }, [navigate]);

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
        path={selectedTab === 'cv' ? '/' : `/${selectedTab}`}
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
          <Tab className='modern-tab' icon={<WebIcon />} iconPosition="start" label={t('webs')} value="webs" aria-controls="webs-panel" />
          <Tab className='modern-tab' icon={<GamepadIcon />} iconPosition="start" label={t('games')} value="games" aria-controls="games-panel" />
        </Tabs>
      </nav>

      {/* Content Section */}
      <section className="content-section" role="tabpanel" aria-label={`${selectedTab} content`} id={`${selectedTab}-panel`}>
        <h2 className="sr-only">{t(selectedTab)} {t('portfolioSections')}</h2>
        <div className="content-container">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/projects" element={<Projects />} />
              <Route path="/webs" element={<Webs />} />
              <Route path="/games" element={<Games />} />
              {/* AR/VR was merged into Games & XR (#30); public/_redirects sends /arvr there with a 301. */}
              <Route path="/arvr" element={<Navigate to="/games" replace />} />
              <Route path="*" element={<CV />} />
            </Routes>
          </Suspense>
        </div>
      </section>
    </main>
  );
};

export default Home;
