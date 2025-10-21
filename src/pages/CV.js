import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MapIcon from '@mui/icons-material/Map';
import PhoneIcon from '@mui/icons-material/Phone';
import config from "../config/index.js";
import Line from "../components/Line.js";
import "./CV.css";

function CV() {
  const handleDownloadCV = () => {
    window.open(config.cv.downloadUrl, '_blank').focus();
  };

  return (
    <div className='cv-container'>
      <div className="flex items-center justify-center lg:flex-row">
        <div className="content-width w-full flex flex-col lg:flex-row">
          <div>
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
                <ul className="list-disc list-inside">
                  <li>Site building en Drupal</li>
                  <li>Desarrollo en Drupal Backend PHP</li>
                  <li>Diseño en Drupal con React, Twig y Tailwind</li>
                  <li>Definición de tareas a partir de peticiones del cliente</li>
                  <li>Comunicación en inglés con equipo multicultural</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center lg:flex-row">
        <div className="content-width w-full flex flex-col lg:flex-row">
          <div>
            <span className="flex items-center">
              <h2>
                <Line />
                Tecnologías
              </h2>
            </span>
            <div>
              <div>
                <ul className="list-disc list-inside">
                  <li>Nivel alto de <b>PHP, Laravel, Symfony y Drupal</b></li>
                  <li>Nivel alto en diseño web: <b>React, Angular, Bootstrap y Tailwind</b></li>
                  <li>Nivel alto en <b>desarrollo web con Django</b></li>
                  <li>Nivel alto en <b>Python</b></li>
                  <li>Nivel alto en <b>Java</b></li>
                  <li>Nivel alto en <b>JavaScript</b></li>
                  <li>Nivel alto en manejo de bases de datos <b>MySQL y MongoDB</b></li>
                </ul>
                <br />
                <ul className="list-disc list-inside">
                  <li>Nivel medio en <b>C/C++ y C#</b></li>
                  <li>Nivel medio en <b>Unity</b></li>
                  <li>Nivel medio en desarrollo <b>RV/RA</b> en Unity</li>
                  <li>Nivel medio en <b>Godot</b></li>
                  <li>Nivel medio en manejo de servidores <b>Apache</b></li>
                  <li>Nivel medio en manejo de <b>AWS</b></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center lg:flex-row">
        <div className="content-width w-full flex flex-col lg:flex-row">
          <div>
            <span className="flex items-center">
              <h2>
                <Line />
                Habilidades
              </h2>
            </span>
            <div>
              <div>
                <ul className="list-disc list-inside">
                  <li>Trabajo en equipo</li>
                  <li>Autonomía</li>
                  <li>Liderazgo</li>
                  <li>Capacidad para la resolución de problemas</li>
                  <li>Aprendizaje rápido</li>
                  <li>Autodidacta</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center lg:flex-row">
        <div className="content-width w-full flex flex-col lg:flex-row">
          <div>
            <span className="flex items-center">
              <h2>
                <Line />
                Datos Académicos
              </h2>
            </span>
            <div>
              <div>
                <h3>Grado en Ingeniería Informática</h3>
                <ul className="list-disc list-inside">
                  <li>Universidad de Cádiz | 2017 - 2022</li>
                </ul>
                <h3>English B2 First Certificate</h3>
                <ul className="list-disc list-inside">
                  <li>Cambridge | Junio 2022</li>
                </ul>
                <h3>Drupal 10 Developer Certificate</h3>
                <ul className="list-disc list-inside">
                  <li>Acquia | Diciembre 2024</li>
                </ul>
                <h3>CISCO - CCNP</h3>
                <ul className="list-disc list-inside">
                  <li>Universidad de Cádiz | Mayo 2021</li>
                </ul>
                <h3>CISCO - CCNA</h3>
                <ul className="list-disc list-inside">
                  <li>Universidad de Cádiz | Octubre 2019</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center lg:flex-row">
        <div className="content-width w-full flex flex-col lg:flex-row">
          <div>
            <span className="flex items-center">
              <h2>
                <Line />
                Contacto
              </h2>
            </span>
            <div className='contact-info'>
              <div>
                <PhoneIcon /> <a href={`tel:${config.contact.phone}`} target="_blank" rel="noopener noreferrer">{config.contact.phone}</a>
              </div>
              <div>
                <EmailIcon /> <a href={`mailto:${config.contact.email}`} target="_blank" rel="noopener noreferrer">{config.contact.email}</a>
              </div>
              <div>
                <MapIcon /> <a href="https://www.google.es/maps/place/Chiclana+de+la+Frontera,+C%C3%A1diz" target="_blank" rel="noopener noreferrer">{config.contact.location}</a>
              </div>
              <div>
                <AccessTimeIcon /> Disponibilidad de 17:00 a 20:00
              </div>
              <div>
                <GitHubIcon /> <a href={config.social.github} target="_blank" rel="noopener noreferrer">Jesus-md-dev | GitHub</a>
              </div>
              <div>
                <LinkedInIcon /><a href={config.social.linkedin} target="_blank" rel="noopener noreferrer">Jesús Márquez Delgado | LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center lg:flex-row">
        <button
          onClick={handleDownloadCV}
          className="my-5 rounded px-3 py-1"
          aria-label="Descargar CV en formato PDF"
        >
          DESCARGAR CV
        </button>
      </div>
    </div>
  );
};

export default CV;