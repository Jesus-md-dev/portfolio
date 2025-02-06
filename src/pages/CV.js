import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MapIcon from '@mui/icons-material/Map';
import PhoneIcon from '@mui/icons-material/Phone';
import Line from "../components/Line.js";
import "./CV.css";

function CV() {
  function handleDownloadCV() {
    window.open("https://drive.google.com/file/d/12n6WRc3-FtLW9Hjlc1ZFb3LkMWSVKqCt/view?usp=sharing", '_blank').focus();
  }

  return (
    <div className='cv-container'>
      <div className={"flex items-center justify-center lg:flex-row"}>
        <div className={"content-width w-full flex flex-col lg:flex-row"}>
          <div className="lg:w-1/2 my-5">
            <span className="flex items-center">
              <h2>
                <Line />
                Experiencia Laboral
              </h2>
            </span>
            <div>
              <div>
                <h3 className='flex'>
                  <a className='flex items-center' href='https://www.1xinternet.de/' target="_blank" rel="noopener noreferrer">
                    1xINTERNET
                  </a>
                  , Desarrollador Web
                </h3>
                <h4>Marzo 2022 - Actualidad</h4>
                <lu>
                  <li>Site building en Drupal</li>
                  <li>Desarrollo en Drupal Backend PHP</li>
                  <li>Diseño en Drupal con React, Twig y Tailwind</li>
                  <li>Definición de tareás a partir de peticiones delcliente</li>
                  <li>Comunicación en Inglés con equipo multicultural</li>
                </lu>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"flex items-center justify-center lg:flex-row bg-neutral-700"}>
        <div className={"content-width w-full flex flex-col lg:flex-row"}>
          <div className="lg:w-1/2 my-5">
            <span className="flex items-center">
              <h2>
                <Line />
                Tecnologías
              </h2>
            </span>
            <div>
              <div>
                <lu>
                  <li>Nivel alto de <b>PHP, Laravel, Symfony y Drupal</b></li>
                  <li>Nivel alto en diseño web: <b>React, Angular, Bootstrap y Tailwind</b></li>
                  <li>Nivel alto en <b>desarrollo web con Django</b></li>
                  <li>Nivel alto en <b>Python</b></li>
                  <li>Nivel alto en <b>Java</b></li>
                  <li>Nivel alto en <b>JavaScript</b></li>
                  <li>Nivel alto en manejo de base de datos <b>MYSQL y MongoDB</b></li>
                </lu>
                <br />
                <lu>
                  <li>Nivel medio en <b>C/C++ y C#</b></li>
                  <li>Nivel medio en <b>Unity</b></li>
                  <li>Nivel medio en desarrollo <b>RV/RA</b> en Unity</li>
                  <li>Nivel medio en <b>Godot</b></li>
                  <li>Nivel medio en manejo de servidores <b>Apache</b></li>
                  <li>Nivel medio en manejo de <b>AWS</b></li>
                </lu>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"flex items-center justify-center lg:flex-row"}>
        <div className={"content-width w-full flex flex-col lg:flex-row"}>
          <div className="lg:w-1/2 my-5">
            <span className="flex items-center">
              <h2>
                <Line />
                Habilidades
              </h2>
            </span>
            <div>
              <div>
                <lu>
                  <li>Trabajo en equipo</li>
                  <li>Autonomía </li>
                  <li>Liderazgo</li>
                  <li>Capacidad para la resolución de problemas</li>
                  <li>Aprendizaje rápido</li>
                  <li>Autodidacta</li>
                </lu>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"flex items-center justify-center lg:flex-row bg-neutral-700"}>
        <div className={"content-width w-full flex flex-col lg:flex-row"}>
          <div className="lg:w-1/2 my-5">
            <span className="flex items-center">
              <h2>
                <Line />
                Datos Academicos
              </h2>
            </span>
            <div>
              <div>
                <h3>Grado en Ingeniería Informática</h3>
                <lu>
                  <li>Universidad de Cádiz | 2017 - 2022</li>
                </lu>
                <h3>English B2 First Certificate</h3>
                <lu>
                  <li>Cambridge | Junio 2022</li>
                </lu>
                <h3>Drupal 10 Developer Certificate</h3>
                <lu>
                  <li>Acquia | Diciembre 2024</li>
                </lu>
                <h3>CISCO - CCNP</h3>
                <lu>
                  <li>Universidad de Cádiz | Mayo 2021</li>
                </lu>
                <h3>CISCO - CCNA</h3>
                <lu>
                  <li>Universidad de Cádiz | Octubre 2019</li>
                </lu>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"flex items-center justify-center lg:flex-row"}>
        <div className={"content-width w-full flex flex-col lg:flex-row"}>
          <div className="lg:w-1/2 my-5">
            <span className="flex items-center">
              <h2>
                <Line />
                Contacto
              </h2>
            </span>
            <div className='contact-info'>
              <div>
                <PhoneIcon /> <a href="tel:+34697394198" target="_blank" rel="noopener noreferrer">+34 697 39 41 98</a>
              </div>
              <div>
                <EmailIcon /> <a href="mailto:jesusmarquezdelgado@gmail.com" target="_blank" rel="noopener noreferrer">jesusmarquezdelgado@gmail.com</a>
              </div>
              <div>
                <MapIcon /> <a href="https://www.google.es/maps/place/Chiclana+de+la+Frontera,+C%C3%A1diz" target="_blank" rel="noopener noreferrer">Chiclana de la Frontera, Cádiz</a>
              </div>
              <div>
                <AccessTimeIcon /> Disponibilidad de 17:00 a 20:00
              </div>
              <div>
                <GitHubIcon /> <a href="https://github.com/Jesus-md-dev" target="_blank" rel="noopener noreferrer">Jesus-md-dev | GitHub</a>
              </div>
              <div>
                <LinkedInIcon /><a href="https://www.linkedin.com/in/jes%C3%BAs-m%C3%A1rquez-delgado-1334531b9/" target="_blank" rel="noopener noreferrer">Jesús Márquez Delgado | Linkedin</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"flex items-center justify-center lg:flex-row"}>
        <a
          className="m-4"
          onClick={handleDownloadCV}
          href="https://drive.google.com/uc?export=download&id=12n6WRc3-FtLW9Hjlc1ZFb3LkMWSVKqCt"
        >
          <button className="my-5 rounded px-3 py-1">
            DESCARGAR CV
          </button>
        </a>
      </div>
    </div>
  );
};

export default CV;