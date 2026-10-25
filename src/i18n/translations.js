export const translations = {
  es: {
    // Header
    name: "Jesús Márquez Delgado",
    title: "Ingeniero Informático",
    
    // Navigation
    cv: "CV",
    webs: "Webs",
    games: "Games",
    arvr: "AR/VR",
    
    // About section
    aboutMe: "SOBRE MÍ",
    aboutMeText: "Ingeniero informático especializado en desarrollo web enterprise con Drupal, PHP y React. En 1xINTERNET construyo y mantengo sitios corporativos multiidioma para marcas internacionales como Circor, Maggi y Thomy, coordinándome en inglés con un equipo distribuido. Fuera del trabajo desarrollo videojuegos y experiencias de realidad aumentada/virtual en Unity, y disfruto aplicando tecnologías nuevas a proyectos reales.",

    // CV Section
    workExperience: "Experiencia Laboral",
    webDeveloper: "Desarrollador Web",
    workStartDate: "Marzo 2022",
    currentDate: "Actualidad",
    workItems: [
      "Site building y desarrollo backend en Drupal (PHP) para sitios corporativos multiidioma de marcas como Circor, Maggi y Thomy",
      "Desarrollo frontend con React, Twig y Tailwind CSS integrado en temas Drupal",
      "Traducción de peticiones de cliente en tareas técnicas planificadas y estimadas",
      "Comunicación diaria en inglés con un equipo multicultural y distribuido",
      "Mantenimiento y evolución continua de sitios en producción",
      "Desarrollo asistido por IA con Claude Code para acelerar la entrega y la resolución de problemas"
    ],

    technologies: "Conocimientos técnicos",
    techGroups: [
      { label: "Principal", items: "Drupal (backend, site building, theming) · PHP · React · JavaScript · TypeScript · Tailwind CSS · Twig" },
      { label: "También", items: "Symfony · Laravel · Angular · Node.js · Express · Django · React Native · Python · Java · C/C++ · C#" },
      { label: "Datos e infraestructura", items: "MySQL · MongoDB · AWS · Netlify (Functions, Edge Functions) · Apache · Docker · DDEV · Git · GitHub Actions" },
      { label: "Videojuegos y XR", items: "Godot · Unity, incluido desarrollo RV/RA" }
    ],

    skills: "Habilidades",
    strengthsLine: "Trabajo en equipo · Autonomía · Resolución de problemas · Aprendizaje rápido y autodidacta",

    academicData: "Formación",
    education: [
      {
        title: "Grado en Ingeniería Informática",
        details: "Universidad de Cádiz · 2017 – 2022"
      }
    ],

    contact: "Contacto",
    availability: "Empleado en 1xINTERNET — abierto a nuevas oportunidades",
    downloadCV: "DESCARGAR CV",
    workCompanyDescription: "Agencia Drupal que desarrolla webs enterprise para marcas internacionales",
    certificationsTitle: "Certificaciones",
    certifications: [
      { title: "Acquia Certified Drupal 10 Developer", details: "Acquia · Diciembre 2024" },
      { title: "Cambridge B2 First (inglés)", details: "Cambridge · Junio 2022" },
      { title: "Cisco CCNP", details: "Universidad de Cádiz · Mayo 2021" },
      { title: "Cisco CCNA", details: "Universidad de Cádiz · Octubre 2019" }
    ],
    languagesTitle: "Idiomas",
    languagesList: [
      { name: "Español", level: "Nativo" },
      { name: "Inglés", level: "B2 · idioma de trabajo diario" }
    ],
    selectedProjects: "Proyectos destacados",
    projectsList: [
      {
        name: "Pandeconomy",
        url: "https://github.com/Jesus-md-dev/pandeconomy",
        description: "App Android de finanzas personales con gastos recurrentes, gráficas y widgets de pantalla de inicio en cinco idiomas; CI con ESLint, TypeScript y Jest.",
        stack: "React Native · TypeScript · MMKV · GitHub Actions"
      },
      {
        name: "Videoclub Local",
        url: "https://github.com/Jesus-md-dev/videoclub-local",
        description: "Videoteca autoalojada para la red doméstica con interfaz de videoclub retro, carátulas generadas automáticamente y cliente para Android TV.",
        stack: "Node.js · Express · React · Vite · ffmpeg · Android"
      },
      {
        name: "Bahía Lectora",
        url: "https://github.com/Jesus-md-dev/bahia-lectora",
        description: "Web de un club de lectura cuyos datos salen de Google Sheets y la API de Google Books al compilar.",
        stack: "React · Vite · Tailwind CSS · Google APIs · Netlify"
      },
      {
        name: "Gestor de Gastos (TFG)",
        url: "https://github.com/Jesus-md-dev/project-expenses-manager",
        description: "Trabajo de fin de grado: app full-stack para gestionar presupuestos de proyectos compartidos, con notificaciones por e-mail.",
        stack: "Angular · TypeScript · Django REST · MySQL"
      }
    ],
    
    // Webs section
    websAt1xinternet: "Webs en 1xINTERNET",
    websAt1xinternetText: "Actualmente, en mi trabajo como desarrollador web en 1xINTERNET, he tenido la oportunidad de trabajar en diferentes proyectos, tanto en la parte del front-end como en el back-end. Principalmente, he trabajado con Drupal dedicándome al back-end y al site building, pero también he tenido la oportunidad de trabajar como front-end utilizando React y Tailwind CSS. Las webs en las que he trabajado son Circor, Pumps, Maggi y Thomy.",
    
    personalCVWeb: "Mi CV web",
    personalCVWebText: "Web personal en la que muestro mi Currículum Vitae y algunos de los proyectos en los que he trabajado. La web está hecha con React como librería utilizada para el front-end, Tailwind CSS y la librería de componentes MUI.",
    projectsShowcase: "Muestra de proyectos de 1xINTERNET",
    personalWebsiteScreenshot: "Captura de pantalla del sitio web CV personal",

    // Projects section
    projects: "Proyectos",
    projectsTitle: "Proyectos personales",
    projectsIntro: "Proyectos que he diseñado y desarrollado por mi cuenta, de principio a fin. Todos tienen el código público en GitHub.",
    projectsLabLink: "Más experimentos en mi laboratorio público →",
    projectsCode: "Código",
    projectsLive: "Ver web",
    projectsStack: "Tecnologías",
    projectsScreenshotOf: "Captura de pantalla de",
    projectPandeconomyText: "App Android de finanzas personales: alta rápida de gastos, categorías, gastos recurrentes, gráficas mensuales, widgets de pantalla de inicio y 5 idiomas, con CI en GitHub Actions (ESLint, tsc y Jest).",
    projectVideoclubText: "Videoteca autoalojada para la red local con una interfaz de videoclub retro, carátulas generadas con ffmpeg y cliente para Android TV.",
    projectBahiaLectoraText: "Web de un club de lectura que genera sus páginas en cada build a partir de Google Sheets y la API de Google Books.",
    projectExpensesManagerText: "Trabajo Fin de Grado (Universidad de Cádiz, 2022): presupuestos de proyecto compartidos, ingresos y gastos, gráficas y notificaciones por e-mail.",
    projectZomboidStatusText: "Página de estado en directo de un servidor de Project Zomboid: jugadores conectados vía RCON desde una Netlify Function y explorador de mods.",
    projectHeartopiaText: "Aplicación de escritorio para Windows que convierte partituras de Heartopia en las teclas de piano que hay que pulsar.",
    metaTitleProjects: "Proyectos personales - React, React Native, Node.js | Jesús Márquez Delgado",
    metaDescriptionProjects: "Proyectos personales de Jesús Márquez Delgado con código en GitHub: Pandeconomy, Videoclub Local, Bahía Lectora, Project Expenses Manager, Project Zomboid Server Status y Heartopia Piano Translator.",
    
    // Games section
    survivalZombieTitle: "Survival Zombie",
    waveShooterTitle: "Shooter de oleadas",
    spaceBallTitle: "Space Ball",
    zigzagCubeTitle: "Cubo ZigZag",
    survivalZombieText: "Videojuego de disparos en primera persona, desarrollado en equipo junto con Jesús Periñán Dávila. Este proyecto se desarrolló en Unity, durante el proceso, se modeló el mapa, se programó la IA de los zombis y las diferentes mecánicas del juego (botiquines, oleadas, diferentes zombis).",
    
    waveShooterText: "Proyecto de disparos con vista cenital, desarrollado para aprender sobre juegos de oleadas en Unity. La idea era crear un juego en el que el jugador tuviera que sobrevivir a oleadas de enemigos de forma infinita, con lo cual se pondría a prueba la generación de enemigos constante y la dificultad progresiva.",
    
    spaceBallText: "Videojuego de plataformas en 3D para móviles, desarrollado en Unity. En este proyecto se modeló el mapa, se programó la mecánica de salto mediante plataformas, se crearon los diferentes niveles y se implementó un sistema de puntuación.",
    
    zigzagCubeText: "Videojuego móvil desarrollado en Unity, en el que el jugador controla un cubo que se mueve automáticamente, variando la dirección de movimiento con un toque en la pantalla. El mapa se genera de forma aleatoria a partir de un conjunto de piezas prefabricadas, lo que permite que el jugador pueda jugar de forma infinita.",
    
    alTenedorTitle: "¡Al tenedor!",
    alTenedorText: "Juego de cartas para 2 a 6 jugadores. Se puede jugar contra bots con tres niveles de dificultad o en línea con amigos, mediante conexión entre pares (WebRTC) y códigos de sala, desde el navegador o con la versión para Android. Desarrollado en",
    alTenedorScreenshotAlt: "Menú principal de ¡Al tenedor! con las opciones de partida local y online",
    playInBrowser: "Jugar en el navegador",
    viewCode: "Ver código en GitHub",
    universityProject: "Proyecto universitario",

    // VR/AR section
    monsterWarTitle: "Monster War (RA)",
    spaceSurvivalTitle: "Space Survival (RV)",
    quimicefaTitle: "Quimicefa (RA)",
    monsterWarText: "Videojuego móvil de realidad aumentada, desarrollado en Unity junto con Jesús Periñán Dávila. La jugabilidad consiste en enfrentarse a enemigos que aparecen en el entorno con los diferentes personajes que se pueden seleccionar. El videojuego requiere de la utilización de una carta, la cual el juego reconoce como nuestro personaje y esta debe ser colocada junto a los enemigos para poder comenzar un combate.",
    
    spaceSurvivalText: "Videojuego de realidad virtual, desarrollado en Unity. La jugabilidad consiste en destruir las naves alienígenas que se van acercando hacia la nave antes de que colisionen contra el jugador. El sistema de apuntado consiste en mantener la mirada fija en la nave que se quiere destruir durante un tiempo determinado, tras lo cual se dispara automáticamente.",
    
    quimicefaText: "Videojuego móvil de realidad aumentada, desarrollado en Unity. La jugabilidad consiste en resolver problemas de química mediante la utilización de la cámara del dispositivo móvil. El juego utiliza cuatro diferentes cartas, las cuales serán reconocidas como diferentes elementos químicos y la tarea a entregar. Se deberá entregar el compuesto requerido, uniendo cartas y acercándolas a la tarea.",
    
    // Footer
    allRightsReserved: "Jesús Márquez Delgado. Todos los derechos reservados",
    footerSubtitle: "Desarrollador Web · Drupal, PHP y React",
    footerLocationSpain: "📍 Cádiz, España",
    availableForProjects: "🌐 Abierto a nuevas oportunidades",
    
    // Error Boundary
    errorTitle: "Oops! Algo salió mal",
    errorMessage: "Ha ocurrido un error inesperado. Por favor, recarga la página para continuar.",
    reloadPage: "Recargar página",
    errorDetails: "Detalles del error (desarrollo)",
    
    // Language
    language: "Idioma",
    
    // Accessibility
    loading: "Cargando",
    portfolioSections: "Secciones del portafolio",
    portfolioNavigationTabs: "Pestañas de navegación del portafolio",

    // SEO - Page titles and meta descriptions per section
    metaTitleCv: "Jesús Márquez Delgado - Desarrollador Web | CV",
    metaDescriptionCv: "Curriculum Vitae de Jesús Márquez Delgado, Desarrollador Web especializado en Drupal, PHP y React. Experiencia laboral, tecnologías, habilidades y formación.",
    metaTitleWebs: "Proyectos web - React, Drupal, PHP | Jesús Márquez Delgado",
    metaDescriptionWebs: "Proyectos web desarrollados por Jesús Márquez Delgado con React, Drupal, PHP y Tailwind CSS, incluyendo trabajo para 1xINTERNET, Circor, Maggi y Thomy.",
    metaTitleGames: "Proyectos de videojuegos | Jesús Márquez Delgado",
    metaDescriptionGames: "Proyectos de desarrollo de videojuegos de Jesús Márquez Delgado, Desarrollador Web, hechos con Unity y Godot: juegos para móvil, PC y navegador.",
    metaTitleArvr: "Proyectos de Realidad Aumentada y Virtual | Jesús Márquez Delgado",
    metaDescriptionArvr: "Proyectos de Realidad Aumentada (AR) y Realidad Virtual (VR) desarrollados por Jesús Márquez Delgado, Desarrollador Web.",

    // Enlaces sociales
    githubLink: "Jesus-md-dev | GitHub", 
    linkedinLink: "Jesús Márquez Delgado | LinkedIn",
    labLink: "Laboratorio público | lab.jzmarquez.com",
    
    // Banner
    bannerSubtitle: "Desarrollador Web · Drupal, PHP y React",
    bannerDescription: "Construyendo sitios web enterprise para marcas internacionales — y desarrollando videojuegos y experiencias AR/VR en Unity por pasión",
    bannerCtaContact: "Contáctame",
    bannerCtaGithub: "Ver GitHub",
    webDevelopmentTitle: "🌐 Desarrollo Web",
    gameDevelopmentTitle: "🎮 Desarrollo de Juegos",
    technologiesTitle: "🔧 Tecnologías",
    contactEmail: "Email de contacto",
    locationSpain: "Cádiz, España",
    githubProfile: "Perfil de GitHub",
  },
  
  en: {
    // Header
    name: "Jesús Márquez Delgado",
    title: "Computer Engineer",
    
    // Navigation
    cv: "CV",
    webs: "Webs",
    games: "Games",
    arvr: "AR/VR",
    
    // About section
    aboutMe: "ABOUT ME",
    aboutMeText: "Computer engineer specialized in enterprise web development with Drupal, PHP and React. At 1xINTERNET I build and maintain multilingual corporate sites for international brands such as Circor, Maggi and Thomy, working in English with a distributed team. Outside of work I develop games and AR/VR experiences in Unity, and enjoy applying new technologies to real projects.",

    // CV Section
    workExperience: "Work Experience",
    webDeveloper: "Web Developer",
    workStartDate: "March 2022",
    currentDate: "Present",
    workItems: [
      "Drupal site building and backend development (PHP) for multilingual corporate sites of brands such as Circor, Maggi and Thomy",
      "Front-end development with React, Twig and Tailwind CSS integrated into Drupal themes",
      "Turning client requests into planned, estimated technical tasks",
      "Daily communication in English with a multicultural, distributed team",
      "Ongoing maintenance and evolution of production sites",
      "AI-assisted development with Claude Code to speed up delivery and problem solving"
    ],

    technologies: "Technical Skills",
    techGroups: [
      { label: "Core", items: "Drupal (backend, site building, theming) · PHP · React · JavaScript · TypeScript · Tailwind CSS · Twig" },
      { label: "Also", items: "Symfony · Laravel · Angular · Node.js · Express · Django · React Native · Python · Java · C/C++ · C#" },
      { label: "Data & infrastructure", items: "MySQL · MongoDB · AWS · Netlify (Functions, Edge Functions) · Apache · Docker · DDEV · Git · GitHub Actions" },
      { label: "Games & XR", items: "Godot · Unity, including VR/AR development" }
    ],

    skills: "Strengths",
    strengthsLine: "Teamwork · Autonomy · Problem solving · Fast, self-taught learner",

    academicData: "Education",
    education: [
      {
        title: "BSc in Computer Engineering",
        details: "University of Cádiz · 2017 – 2022"
      }
    ],

    contact: "Contact",
    availability: "Employed at 1xINTERNET — open to new opportunities",
    downloadCV: "DOWNLOAD CV",
    workCompanyDescription: "Drupal agency building enterprise websites for international brands",
    certificationsTitle: "Certifications",
    certifications: [
      { title: "Acquia Certified Drupal 10 Developer", details: "Acquia · December 2024" },
      { title: "Cambridge B2 First (English)", details: "Cambridge · June 2022" },
      { title: "Cisco CCNP", details: "University of Cádiz · May 2021" },
      { title: "Cisco CCNA", details: "University of Cádiz · October 2019" }
    ],
    languagesTitle: "Languages",
    languagesList: [
      { name: "Spanish", level: "Native" },
      { name: "English", level: "B2 · daily working language" }
    ],
    selectedProjects: "Selected Projects",
    projectsList: [
      {
        name: "Pandeconomy",
        url: "https://github.com/Jesus-md-dev/pandeconomy",
        description: "Personal finance Android app with recurring expenses, charts and home-screen widgets in five languages; CI with ESLint, TypeScript and Jest.",
        stack: "React Native · TypeScript · MMKV · GitHub Actions"
      },
      {
        name: "Videoclub Local",
        url: "https://github.com/Jesus-md-dev/videoclub-local",
        description: "Self-hosted video library for the home network with a retro video-store UI, auto-generated covers and an Android TV client.",
        stack: "Node.js · Express · React · Vite · ffmpeg · Android"
      },
      {
        name: "Bahía Lectora",
        url: "https://github.com/Jesus-md-dev/bahia-lectora",
        description: "Book club website whose data comes from Google Sheets and the Google Books API at build time.",
        stack: "React · Vite · Tailwind CSS · Google APIs · Netlify"
      },
      {
        name: "Project Expenses Manager",
        url: "https://github.com/Jesus-md-dev/project-expenses-manager",
        description: "Final degree project: full-stack app to manage shared project budgets, with e-mail notifications.",
        stack: "Angular · TypeScript · Django REST · MySQL"
      }
    ],
    
    // Webs section
    websAt1xinternet: "Webs at 1xINTERNET",
    websAt1xinternetText: "Currently, in my job as a web developer at 1xINTERNET, I have had the opportunity to work on different projects, both on the front-end and back-end. I have mainly worked with Drupal focusing on back-end and site building, but I have also had the opportunity to work as a front-end developer using React and Tailwind CSS. The websites I have worked on are Circor, Pumps, Maggi and Thomy.",
    
    personalCVWeb: "My CV website",
    personalCVWebText: "Personal website where I showcase my Curriculum Vitae and some of the projects I have worked on. The website is built with React as the front-end library, Tailwind CSS and the MUI component library.",
    projectsShowcase: "1xINTERNET projects showcase",
    personalWebsiteScreenshot: "Personal CV website screenshot",

    // Projects section
    projects: "Projects",
    projectsTitle: "Side projects",
    projectsIntro: "Projects I have designed and built on my own, end to end. All of them have public source code on GitHub.",
    projectsLabLink: "More experiments in my public lab →",
    projectsCode: "Code",
    projectsLive: "Live",
    projectsStack: "Tech stack",
    projectsScreenshotOf: "Screenshot of",
    projectPandeconomyText: "Personal finance Android app: quick add, categories, recurring expenses, monthly charts, home-screen widgets and 5 languages, with GitHub Actions CI (ESLint, tsc and Jest).",
    projectVideoclubText: "Self-hosted LAN video library with a retro video-store UI, ffmpeg-generated covers and an Android TV client.",
    projectBahiaLectoraText: "Book club website whose pages are built from Google Sheets and the Google Books API at build time.",
    projectExpensesManagerText: "Final degree project (University of Cádiz, 2022): shared project budgets, incomes and expenses, charts and e-mail notifications.",
    projectZomboidStatusText: "Live status page for a Project Zomboid server: players online via RCON from a Netlify Function, plus a mods browser.",
    projectHeartopiaText: "Windows desktop app that converts Heartopia music sheets into the piano keys to press.",
    metaTitleProjects: "Side projects - React, React Native, Node.js | Jesús Márquez Delgado",
    metaDescriptionProjects: "Side projects by Jesús Márquez Delgado with source code on GitHub: Pandeconomy, Videoclub Local, Bahía Lectora, Project Expenses Manager, Project Zomboid Server Status and Heartopia Piano Translator.",
    
    // Games section
    survivalZombieTitle: "Survival Zombie",
    waveShooterTitle: "Wave Shooter",
    spaceBallTitle: "Space Ball",
    zigzagCubeTitle: "ZigZag Cube",
    survivalZombieText: "First-person shooter video game, developed as a team with Jesús Periñán Dávila. This project was developed in Unity, during the process, the map was modeled, zombie AI was programmed and different game mechanics (first aid kits, waves, different zombies) were implemented.",
    
    waveShooterText: "Top-down shooter project, developed to learn about wave games in Unity. The idea was to create a game where the player had to survive infinite waves of enemies, which would test constant enemy generation and progressive difficulty.",
    
    spaceBallText: "3D platform video game for mobile devices, developed in Unity. In this project the map was modeled, platform jumping mechanics were programmed, different levels were created and a scoring system was implemented.",
    
    zigzagCubeText: "Mobile video game developed in Unity, where the player controls a cube that moves automatically, changing the direction of movement with a screen tap. The map is randomly generated from a set of prefab pieces, allowing the player to play infinitely.",
    
    alTenedorTitle: "¡Al tenedor!",
    alTenedorText: "Card game for 2 to 6 players. You can play against bots with three difficulty levels or online with friends, over a peer-to-peer connection (WebRTC) with room codes, in the browser or with the Android build. Made with",
    alTenedorScreenshotAlt: "¡Al tenedor! main menu with the local and online game options",
    playInBrowser: "Play in the browser",
    viewCode: "View code on GitHub",
    universityProject: "University project",

    // VR/AR section
    monsterWarTitle: "Monster War (AR)",
    spaceSurvivalTitle: "Space Survival (VR)",
    quimicefaTitle: "Quimicefa (AR)",
    monsterWarText: "Augmented reality mobile video game, developed in Unity with Jesús Periñán Dávila. The gameplay consists of facing enemies that appear in the environment with different characters that can be selected. The video game requires the use of a card, which the game recognizes as our character and must be placed next to enemies to start combat.",
    
    spaceSurvivalText: "Virtual reality video game, developed in Unity. The gameplay consists of destroying alien ships that approach the ship before they collide with the player. The aiming system consists of keeping your gaze fixed on the ship you want to destroy for a certain time, after which it automatically fires.",
    
    quimicefaText: "Augmented reality mobile video game, developed in Unity. The gameplay consists of solving chemistry problems using the mobile device camera. The game uses four different cards, which will be recognized as different chemical elements and the task to be delivered. The required compound must be delivered by joining cards and bringing them closer to the task.",
    
    // Footer
    allRightsReserved: "Jesús Márquez Delgado. All rights reserved",
    footerSubtitle: "Web Developer · Drupal, PHP & React",
    footerLocationSpain: "📍 Cádiz, Spain",
    availableForProjects: "🌐 Open to new opportunities",
    
    // Error Boundary
    errorTitle: "Oops! Something went wrong",
    errorMessage: "An unexpected error has occurred. Please reload the page to continue.",
    reloadPage: "Reload page",
    errorDetails: "Error details (development)",
    
    // Language
    language: "Language",
    
    // Accessibility
    loading: "Loading",
    portfolioSections: "Portfolio sections",
    portfolioNavigationTabs: "Portfolio navigation tabs",

    // SEO - Page titles and meta descriptions per section
    metaTitleCv: "Jesús Márquez Delgado - Web Developer | CV",
    metaDescriptionCv: "Curriculum Vitae of Jesús Márquez Delgado, Web Developer specialized in Drupal, PHP and React. Work experience, technologies, skills and education.",
    metaTitleWebs: "Web projects - React, Drupal, PHP | Jesús Márquez Delgado",
    metaDescriptionWebs: "Web projects built by Jesús Márquez Delgado with React, Drupal, PHP and Tailwind CSS, including work for 1xINTERNET, Circor, Maggi and Thomy.",
    metaTitleGames: "Game development projects | Jesús Márquez Delgado",
    metaDescriptionGames: "Game development projects by Jesús Márquez Delgado, Web Developer, made with Unity and Godot: games for mobile, PC and the browser.",
    metaTitleArvr: "Augmented and Virtual Reality projects | Jesús Márquez Delgado",
    metaDescriptionArvr: "Augmented Reality (AR) and Virtual Reality (VR) projects developed by Jesús Márquez Delgado, Web Developer.",

    // Social Links
    githubLink: "Jesus-md-dev | GitHub",
    linkedinLink: "Jesús Márquez Delgado | LinkedIn",
    labLink: "Public lab | lab.jzmarquez.com",
    
    // Banner
    bannerSubtitle: "Web Developer · Drupal, PHP & React",
    bannerDescription: "Building enterprise websites for international brands — and crafting games and AR/VR experiences in Unity on the side",
    bannerCtaContact: "Contact me",
    bannerCtaGithub: "View GitHub",
    webDevelopmentTitle: "🌐 Web Development",
    gameDevelopmentTitle: "🎮 Game Development",
    technologiesTitle: "🔧 Technologies",
    contactEmail: "Contact Email",
    locationSpain: "Cádiz, Spain",
    githubProfile: "GitHub Profile",
  }
};