import ArticleIcon from '@mui/icons-material/Article';
import GamepadIcon from '@mui/icons-material/Gamepad';
import WebIcon from '@mui/icons-material/Web';
import SvgIcon from '@mui/material/SvgIcon';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import React, { useState } from 'react';
import AboutMe from "../assets/images/aboutme.jpg";
import { ReactComponent as VrIcon } from "../assets/svg/vr.svg";
import User from '../classes/User.js';
import Banner from '../components/Banner.js';
import ImageText from '../components/ImageText.js';
import CV from "../pages/CV.js";
import Games from "../pages/Games.js";
import Vrar from "../pages/Vrar.js";
import Webs from "../pages/Webs.js";
import "./Home.css";

function Home() {
  function renderSwitch(param) {
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
  }

  let user = new User(
    'Jesús',
    'Márquez Delgado',
    'https://upload.wikimedia.org/wikipedia/commons/b/b5/Windows_10_Default_Profile_Picture.svg',
    'Ingeniero Informático'
  )

  const [selectedTab, setSelectedTab] = useState('cv');

  const handleChange = (event, newSelectedTab) => {
    setSelectedTab(newSelectedTab);
  };

  return (
    <div>
      <Banner className='bg-zinc-900' user={user} />
      <section className="content-width aboutMe py-5">
        <div>
          <div className="aboutMe-section">
            <div className="text-section">
              <ImageText
                src={AboutMe}
                alt="Computer science picture"
                title="SOBRE MÍ"
                text="Ingeniero informático, especializado en tecnologías de la información,
                    con experiencia en el desarrollo web y un gran interés en el desarrollo software.
                    Con capacidad para aprender y aplicar mis conocimientos al ámbito profesional."
              />
            </div>
          </div>
        </div>
      </section>
      <section className='flex flex-col items-center bg-zinc-900'>
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          aria-label="icon position tabs example"
          variant='fullWidth'
          centered
          className='content-width '
        >
          <Tab className='Tab' icon={<ArticleIcon />} iconPosition="start" label="CV" value="cv" />
          <Tab className='Tab' icon={<WebIcon />} iconPosition="start" label="Webs" value="webs" />
          <Tab className='Tab' icon={<GamepadIcon />} iconPosition="start" label="Games" value="games" />
          <Tab className='Tab' icon={
            <SvgIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <VrIcon />
              </svg>
            </SvgIcon>
          } iconPosition="start" label="AR/VR" value="arvr" />
        </Tabs>
      </section>
      {renderSwitch(selectedTab)}
    </div>
  )
}

export default Home;