import { ReactComponent as GitHubLogo } from "../assets/svg/github.svg";
import Line from "../components/Line.js";
import Skill from "../components/Skill.js";
import Technology from "../components/Technology.js";

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

function CV() {
    function handleDownloadCV(params) {
        console.log('Test2')
        window.open("https://drive.google.com/file/d/12n6WRc3-FtLW9Hjlc1ZFb3LkMWSVKqCt/view?usp=sharing", '_blank').focus();
      }
    function randomNumberInRange() { return Math.random() * (4 - 1 + 1) + 1; }

  return (
    <div>
        <div className="technologies-section">
            <div className="content-width grid rounded">
                {technologies.map((technology, index) =>
                <Technology key={technology.name + '-' + index} name={technology.name} level={randomNumberInRange()} />
                )}
            </div>
        </div>
        <section className="skills py-5">
          <div className="content-width">
            <h5>
              <Line />
              MIS HABILIDADES
            </h5>
            <h4>QUÉ PUEDO HACER</h4>
            <div className="skills-section container">
              <div className="row justify-content-center">
                {skills.map((skill, index) =>
                  <Skill key={skill.name + '-' + index} className="col-md-4" name={skill.name} svg={skill.svg} text={skill.text} />
                )}
              </div>
            </div>
          </div>
        </section>
        <div className="text-center mt-3">
              <a
                className="m-4"
                onClick={handleDownloadCV}
                href="https://drive.google.com/uc?export=download&id=12n6WRc3-FtLW9Hjlc1ZFb3LkMWSVKqCt"
              >
                <button className="mt-4 rounded-pill px-3 py-1">
                  DESCARGAR CV
                </button>
              </a>
            </div>
    </div>
  );
};

export default CV;