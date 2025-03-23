import React, { useState } from 'react';
import ArticleIcon from '@mui/icons-material/Article';
import GamepadIcon from '@mui/icons-material/Gamepad';
import WebIcon from '@mui/icons-material/Web';
import SvgIcon from '@mui/material/SvgIcon';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Banner from '../components/Banner';
import ImageText from '../components/ImageText';
import User from '../components/User';
import AboutMe from "../files/images/aboutme-transformed.jpeg";
import Logo from "../files/images/fotocvfondo.png";
import { ReactComponent as VrIcon } from "../files/svg/vr.svg";
import CV from "../pages/CV";
import Games from "../pages/Games";
import Vrar from "../pages/Vrar";
import Webs from "../pages/Webs";
import "./Home.css";

const Home = () => {
  const [selectedTab, setSelectedTab] = useState('cv');

  const handleChange = (event, newSelectedTab) => {
    setSelectedTab(newSelectedTab);
  };

  const renderSwitch = (param) => {
    switch (param) {
      case 'cv':
        return <CV />;
      case 'webs':
        return <Webs />;
      case 'games':
        return <Games />;
      case 'arvr':
        return <Vrar />;
      default:
        return <CV />;
    }
  };

  const user = new User(
    'Jesús',
    'Márquez Delgado',
    { Logo },
    'Ingeniero Informático'
  );

  return (
    <div>
      <Banner user={user} />
      <section className="content-width aboutMe py-5">
        <div className="aboutMe-section">
          <div className="text-section">
            <ImageText
              src={AboutMe}
              alt="Computer science picture"
              title="SOBRE MÍ"
              text="Ingeniero informático, especializado en tecnologías de la información,
                    con experiencia en el desarrollo web y un gran interés en el desarrollo de software.
                    Con capacidad para aprender y aplicar mis conocimientos al ámbito profesional."
            />
          </div>
        </div>
      </section>
      <section className='flex flex-col items-center tabs-container'>
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          aria-label="icon position tabs example"
          variant='fullWidth'
          centered
          className='content-width'
        >
          <Tab className='Tab' icon={<ArticleIcon />} iconPosition="start" label="CV" value="cv" />
          <Tab className='Tab' icon={<WebIcon />} iconPosition="start" label="Webs" value="webs" />
          <Tab className='Tab' icon={<GamepadIcon />} iconPosition="start" label="Games" value="games" />
          <Tab className='Tab' icon={
            <SvgIcon>
              <VrIcon />
            </SvgIcon>
          } iconPosition="start" label="AR/VR" value="arvr" />
        </Tabs>
      </section>
      {renderSwitch(selectedTab)}
    </div>
  );
};

export default Home;