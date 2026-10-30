export const translations = {
  es: {
    // Header
    name: "Jesús Márquez Delgado",
    title: "Ingeniero Informático",
    
    // Navigation
    cv: "CV",
    
    // About section
    aboutMe: "SOBRE MÍ",
    aboutMeText: "Ingeniero informático especializado en desarrollo web enterprise con Drupal, PHP y React. En 1xINTERNET construyo y mantengo sitios corporativos multiidioma para marcas internacionales como Circor, Maggi y Thomy, coordinándome en inglés con un equipo distribuido. Fuera del trabajo desarrollo videojuegos y experiencias de realidad aumentada/virtual en Unity, y disfruto aplicando tecnologías nuevas a proyectos reales.",

    // CV content lives in src/data/cv.{en,es}.json (shared with the PDF CV).
    downloadCV: "DESCARGAR CV",

    // Project cards that come from the old Webs page
    websAt1xinternet: "Webs en 1xINTERNET",
    websAt1xinternetText: "Como desarrollador full-stack en 1xINTERNET trabajo con Drupal 10/11 y PHP (módulos custom, migraciones, JSON:API, Search API con Solr) y en el front-end con React, Twig y Tailwind CSS. He trabajado en las webs de Circor, Pumps, Maggi y Thomy.",
    
    personalCVWebText: "Mi web personal, con mi currículum y algunos de los proyectos en los que he trabajado. Está hecha con React, Tailwind CSS y la librería de componentes MUI.",
    projectsShowcase: "Muestra de proyectos de 1xINTERNET",
    personalWebsiteScreenshot: "Captura de pantalla de mi web personal",

    // Projects section
    projects: "Proyectos",
    projectsTitle: "Proyectos",
    projectsIntro: "Apps, webs, videojuegos y realidad aumentada y virtual: proyectos personales, de la universidad y de mi trabajo en 1xINTERNET.",
    filterLabel: "Filtrar por tipo",
    filterAll: "Todos",
    filterWeb: "Web",
    filterMobile: "Móvil",
    filterDesktop: "Escritorio",
    filterGames: "Videojuegos",
    filterXr: "XR",
    projectsShown: "proyectos mostrados",
    projectsShownOne: "proyecto mostrado",
    professionalWork: "Trabajo profesional",
    projectsCoauthor: "En equipo con",
    projectsLabLink: "Más experimentos y proyectos antiguos en mi laboratorio público →",
    projectsShowAll: "Ver todos los proyectos",
    projectsCode: "Código",
    projectsLive: "Ver web",
    projectsDemo: "Probar demo",
    projectsDownload: "Descargar",
    projectsStack: "Tecnologías",
    projectsScreenshotOf: "Captura de pantalla de",
    projectPandeconomyText: "App Android de finanzas personales: alta rápida de gastos, categorías, gastos recurrentes, gráficas mensuales, widgets de pantalla de inicio y 5 idiomas, con CI en GitHub Actions (ESLint, tsc y Jest).",
    projectVideoclubText: "Videoteca autoalojada para la red local con una interfaz de videoclub retro, carátulas generadas con ffmpeg y cliente para Android TV.",
    projectBahiaLectoraText: "Web de un club de lectura que genera sus páginas en cada build a partir de Google Sheets y la API de Google Books.",
    projectExpensesManagerText: "Trabajo Fin de Grado (Universidad de Cádiz, 2022): presupuestos de proyecto compartidos, ingresos y gastos, gráficas y notificaciones por e-mail.",
    projectZomboidStatusText: "Página de estado en directo de un servidor de Project Zomboid: jugadores conectados vía RCON desde una Netlify Function y explorador de mods.",
    projectHeartopiaText: "Aplicación de escritorio para Windows que convierte partituras de Heartopia en las teclas de piano que hay que pulsar.",
    projectEspacioMetronomoText: "Sistema de reservas de una sala de ensayo en cuatro entregas: prototipo web responsive, API REST con Node.js y MongoDB, cliente web y app Android con widget.",
    laravelShopTitle: "Tienda online en Laravel",
    laravelShopText: "Tienda online con Laravel 8 y Jetstream: catálogo con ofertas, ficha y edición de productos, carrito por usuario y cuentas con equipos y doble factor.",
    pokedexTitle: "Pokédex de Paldea y Kanto (fan)",
    pokedexText: "Proyecto fan no oficial para marcar qué Pokémon has capturado en las Pokédex de Paldea y Kanto, con imágenes opcionales y el progreso exportable e importable en JSON. Pokémon © Nintendo, Game Freak y The Pokémon Company.",
    dockerKubernetesTitle: "Django en Docker y Kubernetes",
    dockerKubernetesText: "Prácticas de Virtualización de Sistemas: contenerizar con Docker una aplicación de cuestionarios en Django proporcionada por la asignatura y su base de datos MariaDB, y desplegarla en un clúster local de Kubernetes con Minikube.",
    dockerKubernetesAlt: "Editor con los Dockerfile de la base de datos y del servidor, y una terminal con los comandos docker build, create y run",
    phpCmsTitle: "CMS en PHP desde cero",
    phpCmsText: "Gestor de contenidos en PHP sin framework, para entender cómo funcionan por dentro: front controller y router, ORM Active Record con tests de PHPUnit, motor de plantillas, autenticación y validación con reglas intercambiables, y un panel de administración para editar las páginas.",
    phpCmsAlt: "Panel de administración con la lista de páginas y los botones para ver, editar y borrar",
    metaTitleProjects: "Proyectos - Webs, apps, videojuegos y XR | Jesús Márquez Delgado",
    metaDescriptionProjects: "Proyectos de Jesús Márquez Delgado: webs Drupal para 1xINTERNET, apps con React, React Native, Node.js y Angular, y videojuegos y realidad aumentada y virtual con Godot y Unity.",
    
    // Game and XR project cards
    
    
    
    
    millonarioTitle: "Juego de preguntas para Twitch",
    millonarioText: "Juego de preguntas para directos de Twitch con banco de preguntas en Google Sheets, hecho para el canal del streamer Ernarvi. Incluye comodines, cámara del streamer y del jugador, y efectos de sonido propios.",
    millonarioAlt: "Pantalla de inicio del juego de preguntas: cámaras del streamer y del jugador, comodines, la pregunta con cuatro respuestas y el botón de empezar",
    queTePinchoTitle: "¡Que te pincho!",
    queTePinchoText: "Juego de cartas para 2 a 6 jugadores. Se puede jugar contra bots con tres niveles de dificultad o en línea con amigos, mediante conexión entre pares (WebRTC) y códigos de sala, desde el navegador o con la versión para Android. Desarrollado en Godot 4.",
    queTePinchoScreenshotAlt: "Partida de ¡Que te pincho!: platos con albóndigas en una cinta transportadora que sale de un túnel, y una carta de acción seleccionada",
    playInBrowser: "Jugar en el navegador",
    playVideo: "Reproducir vídeo",
    universityProject: "Proyecto universitario",

    monsterWarTitle: "Monster War (RA)",
    quimicefaTitle: "Quimicefa (RA)",
    monsterWarText: "Juego de realidad aumentada para móviles, desarrollado en Unity. El jugador elige un personaje y se enfrenta a los enemigos que aparecen en su entorno. El personaje se representa con una carta física que el juego reconoce: al colocarla junto a los enemigos empieza el combate.",
    
    
    quimicefaText: "Juego de realidad aumentada para móviles, desarrollado en Unity, en el que se resuelven problemas de química con la cámara del móvil. Usa cuatro cartas: unas representan elementos químicos y otra la tarea. Para completarla hay que formar el compuesto pedido juntando cartas de elementos y acercándolas a la carta de la tarea.",
    
    // Footer
    allRightsReserved: "Jesús Márquez Delgado. Todos los derechos reservados",
    footerSubtitle: "Desarrollador Web Full-Stack · Drupal, PHP y React",
    footerLocationSpain: "📍 Cádiz, España",
    availableForProjects: "🌐 Abierto a puestos en remoto (España o UE)",
    
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
    metaTitleCv: "Jesús Márquez Delgado - Desarrollador Drupal, PHP y React | CV",
    metaDescriptionCv: "CV de Jesús Márquez Delgado, desarrollador web full-stack con más de 4 años en Drupal 10/11, PHP, Symfony y React. Acquia Certified Drupal 10 Developer. Remoto desde Cádiz.",

    // Enlaces sociales
    githubLink: "Jesus-md-dev | GitHub", 
    linkedinLink: "Jesús Márquez Delgado | LinkedIn",
    labLink: "Laboratorio público | lab.jzmarquez.com",
    
    // Banner
    bannerSubtitle: "Desarrollador Full-Stack · Drupal, PHP y React",
    bannerDescription: "Más de 4 años creando webs enterprise con Drupal y React para marcas internacionales — y apps, herramientas con IA y videojuegos por pasión",
    bannerCtaContact: "Contáctame",
    bannerCtaGithub: "Ver GitHub",
    webDevelopmentTitle: "🌐 Desarrollo Web",
    gameDevelopmentTitle: "🎮 Desarrollo de Juegos",
    technologiesTitle: "🔧 Herramientas",
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
    
    // About section
    aboutMe: "ABOUT ME",
    aboutMeText: "Computer engineer specialized in enterprise web development with Drupal, PHP and React. At 1xINTERNET I build and maintain multilingual corporate sites for international brands such as Circor, Maggi and Thomy, working in English with a distributed team. Outside of work I develop games and AR/VR experiences in Unity, and enjoy applying new technologies to real projects.",

    // CV content lives in src/data/cv.{en,es}.json (shared with the PDF CV).
    downloadCV: "DOWNLOAD CV",

    // Project cards that come from the old Webs page
    websAt1xinternet: "Websites at 1xINTERNET",
    websAt1xinternetText: "As a full-stack developer at 1xINTERNET I work with Drupal 10/11 and PHP (custom modules, migrations, JSON:API, Search API with Solr) and on the front end with React, Twig and Tailwind CSS. I have worked on the Circor, Pumps, Maggi and Thomy websites.",
    
    personalCVWebText: "My personal website, with my CV and some of the projects I have worked on. Built with React, Tailwind CSS and the MUI component library.",
    projectsShowcase: "1xINTERNET projects showcase",
    personalWebsiteScreenshot: "Screenshot of my personal website",

    // Projects section
    projects: "Projects",
    projectsTitle: "Projects",
    projectsIntro: "Apps, websites, games and augmented and virtual reality: side projects, university projects and my work at 1xINTERNET.",
    filterLabel: "Filter by type",
    filterAll: "All",
    filterWeb: "Web",
    filterMobile: "Mobile",
    filterDesktop: "Desktop",
    filterGames: "Games",
    filterXr: "XR",
    projectsShown: "projects shown",
    projectsShownOne: "project shown",
    professionalWork: "Professional work",
    projectsCoauthor: "Team project with",
    projectsLabLink: "More experiments and older projects in my public lab →",
    projectsShowAll: "Show all projects",
    projectsCode: "Code",
    projectsLive: "Live site",
    projectsDemo: "Try the demo",
    projectsDownload: "Download",
    projectsStack: "Tech stack",
    projectsScreenshotOf: "Screenshot of",
    projectPandeconomyText: "Personal finance Android app: quick add, categories, recurring expenses, monthly charts, home-screen widgets and 5 languages, with GitHub Actions CI (ESLint, tsc and Jest).",
    projectVideoclubText: "Self-hosted LAN video library with a retro video-store UI, ffmpeg-generated covers and an Android TV client.",
    projectBahiaLectoraText: "Book club website whose pages are built from Google Sheets and the Google Books API at build time.",
    projectExpensesManagerText: "Final degree project (University of Cádiz, 2022): shared project budgets, incomes and expenses, charts and e-mail notifications.",
    projectZomboidStatusText: "Live status page for a Project Zomboid server: players online via RCON from a Netlify Function, plus a mods browser.",
    projectHeartopiaText: "Windows desktop app that converts Heartopia music sheets into the piano keys to press.",
    projectEspacioMetronomoText: "Booking system for a music rehearsal space in four milestones: responsive web prototype, Node.js and MongoDB REST API, web client and an Android app with a widget.",
    laravelShopTitle: "Laravel online shop",
    laravelShopText: "Online shop built with Laravel 8 and Jetstream: catalogue with deals, product pages and editing, a cart per user and accounts with teams and two-factor auth.",
    pokedexTitle: "Paldea & Kanto Pokédex (fan project)",
    pokedexText: "Unofficial fan project to track which Pokémon you have caught in the Paldea and Kanto Pokédex, with optional images and progress you can export and import as JSON. Pokémon © Nintendo, Game Freak and The Pokémon Company.",
    dockerKubernetesTitle: "Django on Docker and Kubernetes",
    dockerKubernetesText: "Systems Virtualisation coursework: containerising a course-provided Django quiz app and its MariaDB database with Docker, then deploying it to a local Kubernetes cluster with Minikube.",
    dockerKubernetesAlt: "Editor showing the database and server Dockerfiles, and a terminal with the docker build, create and run commands",
    phpCmsTitle: "PHP CMS from scratch",
    phpCmsText: "A content management system in plain PHP, without a framework, built to learn how frameworks work under the hood: front controller and router, an Active Record ORM covered by PHPUnit tests, a template engine, authentication, validation with pluggable rules, and an admin panel to edit pages.",
    phpCmsAlt: "Admin panel listing the pages with view, edit and delete buttons",
    metaTitleProjects: "Projects - Websites, apps, games and XR | Jesús Márquez Delgado",
    metaDescriptionProjects: "Projects by Jesús Márquez Delgado: Drupal websites for 1xINTERNET, apps built with React, React Native, Node.js and Angular, and games and AR/VR made with Godot and Unity.",
    
    // Game and XR project cards
    
    
    
    
    millonarioTitle: "Twitch quiz game",
    millonarioText: "Twitch quiz game with a Google Sheets question bank, made for the channel of the streamer Ernarvi. It has lifelines, streamer and player cameras, and original sound effects.",
    millonarioAlt: "Start screen of the quiz game: streamer and player cameras, lifelines, the question with four answers and the start button",
    queTePinchoTitle: "¡Que te pincho!",
    queTePinchoText: "Card game for 2 to 6 players. You can play against bots with three difficulty levels or online with friends, over a peer-to-peer connection (WebRTC) with room codes, in the browser or with the Android build. Made with Godot 4.",
    queTePinchoScreenshotAlt: "A game of ¡Que te pincho!: plates of meatballs on a conveyor belt coming out of a tunnel, and a selected action card",
    playInBrowser: "Play in the browser",
    playVideo: "Play video",
    universityProject: "University project",

    monsterWarTitle: "Monster War (AR)",
    quimicefaTitle: "Quimicefa (AR)",
    monsterWarText: "Augmented reality mobile game made in Unity. The player picks a character and fights the enemies that appear in their surroundings. The character is a physical card the game recognizes: placing it next to the enemies starts the fight.",
    
    
    quimicefaText: "Augmented reality mobile game made in Unity where you solve chemistry problems with the phone's camera. It uses four cards: some stand for chemical elements and one for the task. To complete it, you build the requested compound by putting element cards together and bringing them close to the task card.",
    
    // Footer
    allRightsReserved: "Jesús Márquez Delgado. All rights reserved",
    footerSubtitle: "Full-Stack Web Developer · Drupal, PHP & React",
    footerLocationSpain: "📍 Cádiz, Spain",
    availableForProjects: "🌐 Open to remote roles (Spain or EU)",
    
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
    metaTitleCv: "Jesús Márquez Delgado - Drupal, PHP & React Developer | CV",
    metaDescriptionCv: "CV of Jesús Márquez Delgado, full-stack web developer with 4+ years in Drupal 10/11, PHP, Symfony and React. Acquia Certified Drupal 10 Developer. Remote from Spain.",

    // Social Links
    githubLink: "Jesus-md-dev | GitHub",
    linkedinLink: "Jesús Márquez Delgado | LinkedIn",
    labLink: "Public lab | lab.jzmarquez.com",
    
    // Banner
    bannerSubtitle: "Full-Stack Web Developer · Drupal, PHP & React",
    bannerDescription: "4+ years building enterprise Drupal and React websites for international brands — plus apps, AI tooling and games on the side",
    bannerCtaContact: "Contact me",
    bannerCtaGithub: "View GitHub",
    webDevelopmentTitle: "🌐 Web Development",
    gameDevelopmentTitle: "🎮 Game Development",
    technologiesTitle: "🔧 Tooling",
    contactEmail: "Contact Email",
    locationSpain: "Cádiz, Spain",
    githubProfile: "GitHub Profile",
  }
};