import ImageText from "../components/ImageText";
import xprojects from "../files/images/1xprojects-with-logo.png";
import jmcvweb from "../files/images/jm-cv-web.png";

function Webs() {
  return (
    <div className="webs-page">
      <ImageText
        src={xprojects}
        alt="Computer science picture"
        title={
          <span>
            Webs en <a target="_blank" rel="noopener noreferrer" href="https://www.1xinternet.de/en">1xINTERNET</a>
          </span>
        }
        text={
          <span>
            Actualmente, en mi trabajo como desarrollador web en <a target="_blank" rel="noopener noreferrer" href="https://www.1xinternet.de/en">1xINTERNET</a>, he tenido la oportunidad de trabajar en diferentes proyectos, tanto en la parte del front-end como en el back-end.
            Principalmente, he trabajado con <a target="_blank" rel="noopener noreferrer" href="https://new.drupal.org/">Drupal</a> dedicándome al back-end y al site building, pero también he tenido la oportunidad de trabajar como front-end utilizando <a target="_blank" rel="noopener noreferrer" href="https://react.dev/">React</a> y <a target="_blank" rel="noopener noreferrer" href="https://tailwindcss.com/">Tailwind CSS</a>.
            Las webs en las que he trabajado son <a target="_blank" rel="noopener noreferrer" href="https://www.circor.com/">Circor</a>, <a target="_blank" rel="noopener noreferrer" href="https://pumps.circor.com/">Pumps</a>, <a target="_blank" rel="noopener noreferrer" href="https://www.maggi.de/">Maggi</a> y <a target="_blank" rel="noopener noreferrer" href="https://www.thomy.de/">Thomy</a>.
          </span>
        }
      />
      <ImageText
        src={jmcvweb}
        invert={true}
        alt="Computer science picture"
        title="Mi CV web"
        text={
          <span>
            Web personal en la que muestro mi Currículum Vitae y algunos de los proyectos en los que he trabajado.
            La web está hecha con <a target="_blank" rel="noopener noreferrer" href="https://react.dev/">React</a> como librería utilizada para el front-end, <a target="_blank" rel="noopener noreferrer" href="https://tailwindcss.com/">Tailwind CSS</a> y la librería de componentes <a target="_blank" rel="noopener noreferrer" href="https://mui.com/">MUI</a>.
          </span>
        }
      />
    </div>
  );
};

export default Webs;