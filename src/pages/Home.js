import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import { ReactComponent as GitHubLogo } from "../assets/svg/github.svg";
import User from '../classes/User.js';
import Banner from '../components/Banner.js';
import Line from "../components/Line.js";
import Skill from "../components/Skill.js";
import Technology from "../components/Technology.js";
import "./Home.css";

function Home() {
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
                  <Skill className="col-md-4" name={skill.name} svg={skill.svg} text={skill.text} />
                )}
              </div>
            </div>
          </Container>
        </section>
      </div>
    )
}

export default Home;