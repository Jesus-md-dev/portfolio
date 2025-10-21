import React, { useState, lazy, Suspense, useCallback, useMemo } from 'react';
import ArticleIcon from '@mui/icons-material/Article';
import GamepadIcon from '@mui/icons-material/Gamepad';
import WebIcon from '@mui/icons-material/Web';
import SvgIcon from '@mui/material/SvgIcon';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Banner from '../components/Banner';
import ImageText from '../components/ImageText';
import User from '../components/User';
import { useLanguage } from '../i18n/LanguageContext.js';
import AboutMe from "../files/images/aboutme-transformed.jpeg";
import Logo from "../files/images/fotocvfondo.png";
import { ReactComponent as VrIcon } from "../files/svg/vr.svg";
import "./Home.css";

// Lazy load page components
const CV = lazy(() => import("../pages/CV"));
const Games = lazy(() => import("../pages/Games"));
const Vrar = lazy(() => import("../pages/Vrar"));
const Webs = lazy(() => import("../pages/Webs"));

const Home = () => {
  const [selectedTab, setSelectedTab] = useState('cv');
  const { t } = useLanguage();

  const handleChange = useCallback((event, newSelectedTab) => {
    setSelectedTab(newSelectedTab);
  }, []);

  const renderSwitch = useCallback((param) => {
    const LoadingFallback = () => (
      <div className="flex items-center justify-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-current"></div>
      </div>
    );

    switch (param) {
      case 'cv':
        return (
          <Suspense fallback={<LoadingFallback />}>
            <CV />
          </Suspense>
        );
      case 'webs':
        return (
          <Suspense fallback={<LoadingFallback />}>
            <Webs />
          </Suspense>
        );
      case 'games':
        return (
          <Suspense fallback={<LoadingFallback />}>
            <Games />
          </Suspense>
        );
      case 'arvr':
        return (
          <Suspense fallback={<LoadingFallback />}>
            <Vrar />
          </Suspense>
        );
      default:
        return (
          <Suspense fallback={<LoadingFallback />}>
            <CV />
          </Suspense>
        );
    }
  }, []);

  const user = useMemo(() => new User(
    'Jesús',
    'Márquez Delgado',
    { Logo },
    'Ingeniero Informático'
  ), []);

  return (
    <main>
      <Banner user={user} />
      <section className="content-width aboutMe py-5" aria-labelledby="about-me-title">
        <div className="aboutMe-section">
          <div className="text-section">
            <ImageText
              src={AboutMe}
              alt="Computer science workspace with laptop and code"
              title={t('aboutMe')}
              text={t('aboutMeText')}
            />
          </div>
        </div>
      </section>
      <section className='flex flex-col items-center tabs-container' role="tablist" aria-label="Portfolio sections">
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          aria-label="Portfolio navigation tabs"
          variant='fullWidth'
          centered
          className='content-width'
        >
          <Tab className='Tab' icon={<ArticleIcon />} iconPosition="start" label={t('cv')} value="cv" aria-controls="cv-panel" />
          <Tab className='Tab' icon={<WebIcon />} iconPosition="start" label={t('webs')} value="webs" aria-controls="webs-panel" />
          <Tab className='Tab' icon={<GamepadIcon />} iconPosition="start" label={t('games')} value="games" aria-controls="games-panel" />
          <Tab className='Tab' icon={
            <SvgIcon>
              <VrIcon />
            </SvgIcon>
          } iconPosition="start" label={t('arvr')} value="arvr" aria-controls="arvr-panel" />
        </Tabs>
      </section>
      <section role="tabpanel" aria-label={`${selectedTab} content`}>
        {renderSwitch(selectedTab)}
      </section>
    </main>
  );
};

export default Home;