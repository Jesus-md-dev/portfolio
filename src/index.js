import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ReactDOM from 'react-dom/client';
import { ReactComponent as GitHubLogo } from "./assets/svg/github.svg";
import { ReactComponent as LinkedinLogo } from "./assets/svg/linkledin.svg";
import User from './classes/User.js';
import Banner from './components/Banner.js';
import Iconlink from "./components/Iconlink.js";
import Line from "./components/Line.js";
import Skill from "./components/Skill.js";
import Technology from "./components/Technology.js";
import "./index.css";


const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  const technologies = [
    { name: 'JavaScript', level: 4 },
    { name: 'JavaScript', level: 4 },
    { name: 'JavaScript', level: 4 },
    { name: 'JavaScript', level: 4 },
    { name: 'JavaScript', level: 4 },
    { name: 'JavaScript', level: 4 },
    { name: 'JavaScript', level: 4 },
    { name: 'JavaScript', level: 4 },
  ];

  const skills = [
    { name: 'JavaScript', svg: <GitHubLogo />, text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, nascetur tristique erat iaculis euismod nostra dapibus pulvinar' },
    { name: 'JavaScript', svg: <GitHubLogo />, text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, nascetur tristique erat iaculis euismod nostra dapibus pulvinar' },
    { name: 'JavaScript', svg: <GitHubLogo />, text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, nascetur tristique erat iaculis euismod nostra dapibus pulvinar' },
    { name: 'JavaScript', svg: <GitHubLogo />, text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, nascetur tristique erat iaculis euismod nostra dapibus pulvinar' },
    { name: 'JavaScript', svg: <GitHubLogo />, text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, nascetur tristique erat iaculis euismod nostra dapibus pulvinar' },
    { name: 'JavaScript', svg: <GitHubLogo />, text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, nascetur tristique erat iaculis euismod nostra dapibus pulvinar' },
    { name: 'JavaScript', svg: <GitHubLogo />, text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, nascetur tristique erat iaculis euismod nostra dapibus pulvinar' },
  ];
  function randomNumberInRange() { return Math.random() * (4 - 1 + 1) + 1; }
  let user = new User(
    'Jesús', 
    'Márquez Delgado', 
    'https://avatars.githubusercontent.com/u/33559839?s=400&u=27ac4daecfe8a93e221135353da375f1fd8b06d2&v=4',
    'Licenciado en Ingeniería Informática'
  )
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark" className="custom-navbar">
        <Container>
          <Navbar.Brand className="mr-100" href="/">
            React-Bootstrap
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <span className="w-100"></span>
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="main">
        <Banner user={user} />
        <section className="aboutMe py-5">
          <Container>
            <h5>
              <Line />
              SOBRE MÍ
            </h5>
            <h4>QUIÉN SOY YO</h4>
            <div className="aboutMe-section">
              <div className="text-section">
                Joven ingeniero informático, especializado en tecnologías de la
                información, con un gran interés en el desarrollo software. Con
                capacidad para aprender y aplicar mis conocimientos al ámbito
                profesional.
              </div>
              <div className="technologies-section">
                <div className="grid rounded">
                  {technologies.map((technology) => 
                    <Technology name={technology.name} level={randomNumberInRange()} />
                  )}
                </div>
              </div>
            </div>
            <div className="text-center mt-3">
              <a
                className="m-4"
                href="https://drive.google.com/uc?export=download&id=12n6WRc3-FtLW9Hjlc1ZFb3LkMWSVKqCt"
              >
                <button className="mt-4 rounded-pill px-3 py-1">
                  DESCARGAR CV
                </button>
              </a>
            </div>
          </Container>
        </section>
        <section className="skills py-5">
          <Container>
            <h5>
              <Line />
              MIS HABILIDADES
            </h5>
            <h4>QUÉ PUEDO HACER</h4>
            <div className="skills-section container">
              <div className="row justify-content-center">
                {skills.map((skill) =>
                  <Skill class="col-md-4" name={skill.name} svg={skill.svg} text={skill.text} />
                )}
              </div>
            </div>
          </Container>
        </section>
      </div>

      <div
        bg="dark"
        expand="lg"
        variant="dark"
        className="custom-navbar navbar-fixed-bottom footer bg-dark"
      >
        <div className="text-center w-100">
          <Iconlink svg={<GitHubLogo />} href="https://github.com/Jezusito" />
          <Iconlink svg={<LinkedinLogo />} href="https://www.linkedin.com/in/jes%C3%BAs-m%C3%A1rquez-delgado-1334531b9/" />
        </div>
        <div>
          <span>© 2022 Jesús Márquez Delgado. All Rights Reserved</span>
        </div>
      </div>
    </div>
  );
}

root.render(App())
