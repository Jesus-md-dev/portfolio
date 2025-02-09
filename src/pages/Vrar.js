import VideoText from "../components/VideoText.js";

function Vrar() {
  return (
    <div className="vrar-page">
      <VideoText
        url="https://www.youtube.com/embed/jIragOxu9tA"
        title="Monster War (RA)"
        text={
          <span>
            Videojuego móvil de realidad aumentada, desarrollado en <a target="_blank" rel="noopener noreferrer" href="https://unity.com/">Unity</a> junto con{" "}
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jesus-perinan-davila/">
              Jesús Periñán Dávila
            </a>. La jugabilidad consiste en enfrentarse a enemigos que aparecen en el entorno con los diferentes personajes que se pueden seleccionar.
            <br />
            El videojuego requiere de la utilización de una carta, la cual el juego reconoce como nuestro personaje y esta debe ser colocada junto a los enemigos para poder comenzar un combate.
          </span>
        }
      />
      <VideoText
        url="https://www.youtube.com/embed/CMsBWdokYGc"
        invert={true}
        title="Space Survival (RV)"
        text={
          <span>
            Videojuego de realidad virtual, desarrollado en <a target="_blank" rel="noopener noreferrer" href="https://unity.com/">Unity</a>.
            La jugabilidad consiste en destruir las naves alienígenas que se van acercando hacia la nave antes de que colisionen contra el jugador.
            El sistema de apuntado consiste en mantener la mirada fija en la nave que se quiere destruir durante un tiempo determinado, tras lo cual se dispara automáticamente.
          </span>
        }
      />
      <VideoText
        url="https://www.youtube.com/embed/Jvo3VOHDayM"
        title="Quimicefa (RA)"
        text={
          <span>
            Videojuego móvil de realidad aumentada, desarrollado en <a target="_blank" rel="noopener noreferrer" href="https://unity.com/">Unity</a>.
            La jugabilidad consiste en resolver problemas de química mediante la utilización de la cámara del dispositivo móvil.
            El juego utiliza cuatro diferentes cartas, las cuales serán reconocidas como diferentes elementos químicos y la tarea a entregar.
            Se deberá entregar el compuesto requerido, uniendo cartas y acercándolas a la tarea.
          </span>
        }
      />
    </div>
  );
}

export default Vrar;