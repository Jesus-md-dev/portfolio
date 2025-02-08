import VideoText from "../components/VideoText.js";

function Games() {
  return (
    <div className="games-page">
      <VideoText
        url="https://www.youtube.com/embed/NsuEjiRypPo"
        title="Survival Zombie"
        text={
          <span>
            Videojuego de de disparos en primera persona, desarrollado en equipo junto con{" "}
            <a href="https://www.linkedin.com/in/jesus-perinan-davila/">
              Jesús Periñán Dávila
            </a>. Este proyecto se desarrolló en Unity, durante el proceso, se modeló el mapa, se programó la IA de los zombies y las diferentes mecanicas del juego (Botiquines, oleadas, diferentes zombies)
          </span>
        }
      />
      <VideoText
        url="https://www.youtube.com/embed/wG-2kG7awZo"
        invert={true}
        title="Shooter de oleadas"
        text={
          <span>
            Proyecto de disparos con vista cenital, desarrollado para aprender sobre juegos de oleadas en Unity.
            <br /> La idea era crear un juego en el que el jugador tuviera que sobrevivir a oleadas de enemigos de forma infinita, con lo cual se pondria a prueba la generación de enemigos constante y la dificultad progresiva.
          </span>
        }
      />
      <VideoText
        url="https://www.youtube.com/embed/7Ij2qMfMZoE"
        title="Space Ball"
        text={
          <span>
            Videojuego de plataformas en 3D para moviles, desarrollado en Unity.
            En este proyecto se modeló el mapa, se programó la mecánica de salto mediante plataformas, se crearon los diferentes niveles y se implementó un sistema de puntuación.
          </span>
        }
      />
      <VideoText
        url="https://www.youtube.com/embed/CpbWe8kSolI"
        invert={true}
        dark={true}
        title="Cubo ZigZag"
        text={
          <span>
            Videojuego movil desarrollado en Unity, en el que el jugador controla un cubo que se mueve de automaticamente, variando la dirección de movimiento con un toque en la pantalla.
            <br />
            El mapa se genera de forma aleatoria a partir de un conjunto de piezas prefabricadas, lo que permite que el jugador pueda jugar de forma infinita.
          </span>
        }
      />
    </div>
  );
};

export default Games;