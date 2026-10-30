import bahiaLectora from "../files/images/bahia-lectora.webp";
import bahiaLectoraSm from "../files/images/bahia-lectora-sm.webp";
import bahiaLectoraMd from "../files/images/bahia-lectora-md.webp";
import bahiaLectoraLg from "../files/images/bahia-lectora-lg.webp";
import pzServerStatus from "../files/images/pz-server-status.webp";
import pzServerStatusSm from "../files/images/pz-server-status-sm.webp";
import pzServerStatusMd from "../files/images/pz-server-status-md.webp";
import pzServerStatusLg from "../files/images/pz-server-status-lg.webp";
import pandeconomy from "../files/images/pandeconomy.webp";
import pandeconomySm from "../files/images/pandeconomy-sm.webp";
import pandeconomyMd from "../files/images/pandeconomy-md.webp";
import pandeconomyLg from "../files/images/pandeconomy-lg.webp";
import videoclub from "../files/images/videoclub-local.webp";
import videoclubSm from "../files/images/videoclub-local-sm.webp";
import videoclubMd from "../files/images/videoclub-local-md.webp";
import videoclubLg from "../files/images/videoclub-local-lg.webp";
import expensesManager from "../files/images/project-expenses-manager.webp";
import expensesManagerSm from "../files/images/project-expenses-manager-sm.webp";
import expensesManagerMd from "../files/images/project-expenses-manager-md.webp";
import expensesManagerLg from "../files/images/project-expenses-manager-lg.webp";
import heartopia from "../files/images/heartopia-piano-translator.webp";
import heartopiaSm from "../files/images/heartopia-piano-translator-sm.webp";
import heartopiaMd from "../files/images/heartopia-piano-translator-md.webp";
import heartopiaLg from "../files/images/heartopia-piano-translator-lg.webp";
import espacioMetronomo from "../files/images/espacio-metronomo.webp";
import espacioMetronomoSm from "../files/images/espacio-metronomo-sm.webp";
import espacioMetronomoMd from "../files/images/espacio-metronomo-md.webp";
import laravelShop from "../files/images/laravel-shop.webp";
import laravelShopSm from "../files/images/laravel-shop-sm.webp";
import laravelShopMd from "../files/images/laravel-shop-md.webp";
import queTePincho from "../files/images/que-te-pincho.webp";
import queTePinchoSm from "../files/images/que-te-pincho-sm.webp";
import queTePinchoMd from "../files/images/que-te-pincho-md.webp";
import xprojects from "../files/images/1xprojects-with-logo-transformed.webp";
import xprojectsSm from "../files/images/1xprojects-with-logo-transformed-sm.webp";
import xprojectsMd from "../files/images/1xprojects-with-logo-transformed-md.webp";
import xprojectsLg from "../files/images/1xprojects-with-logo-transformed-lg.webp";
import jmcvweb from "../files/images/jm-cv-web-transformed.webp";
import jmcvwebSm from "../files/images/jm-cv-web-transformed-sm.webp";
import jmcvwebMd from "../files/images/jm-cv-web-transformed-md.webp";
import jmcvwebLg from "../files/images/jm-cv-web-transformed-lg.webp";
import pokedex from "../files/images/pokedex-angular.webp";
import pokedexSm from "../files/images/pokedex-angular-sm.webp";
import pokedexMd from "../files/images/pokedex-angular-md.webp";
import pokedexLg from "../files/images/pokedex-angular-lg.webp";
import dockerKubernetes from "../files/images/docker-kubernetes.webp";
import dockerKubernetesSm from "../files/images/docker-kubernetes-sm.webp";
import dockerKubernetesMd from "../files/images/docker-kubernetes-md.webp";
import dockerKubernetesLg from "../files/images/docker-kubernetes-lg.webp";
import millonario from "../files/images/millonario.webp";
import millonarioSm from "../files/images/millonario-sm.webp";
import millonarioMd from "../files/images/millonario-md.webp";
import millonarioLg from "../files/images/millonario-lg.webp";
import phpcms from "../files/images/phpcms.webp";
import phpcmsSm from "../files/images/phpcms-sm.webp";
import phpcmsMd from "../files/images/phpcms-md.webp";
import phpcmsLg from "../files/images/phpcms-lg.webp";

const GITHUB = 'https://github.com/Jesus-md-dev';
const PERINAN = { name: 'Jesús Periñán Dávila', href: 'https://www.linkedin.com/in/jesus-perinan-davila/' };

// Filters shown above the grid, in order. `all` is implicit.
export const PROJECT_TYPES = ['web', 'mobile', 'desktop', 'games', 'xr'];

// Cards shown before "show all" when no filter is picked.
export const FEATURED_COUNT = 10;

// Every card of the Projects page, in display order, by relevance to a
// recruiter: professional work, then personal apps (live or shipped first),
// personal games, university web work and university XR. The type filters
// keep this order; the unfiltered view shows the first FEATURED_COUNT until
// "show all" is pressed. Older work that left this page lives in the lab's
// archive (lab repo, public/projects-data.js, `archive: true`).
//
// - `types`: one or more of PROJECT_TYPES; a card shows under each of them.
// - `origin`: 'personal', 'university' or 'work'; the last two get a badge.
// - `name` is a proper noun; `nameKey` is used instead when it is translated.
// - Media is either `image` (a screenshot) or `video` (a YouTube id).
// - Links: `repo` (GitHub), `live` (website), `play` (playable build: a URL,
//   or { es, en } when it has a page in each language),
//   `demo` (demo with fake data), `download` (latest release) and `sites`
//   (client websites, by name).
// - `coauthor`: { name, href }; href is optional.
export const PROJECTS = [
  {
    id: '1xinternet',
    nameKey: 'websAt1xinternet',
    textKey: 'websAt1xinternetText',
    altKey: 'projectsShowcase',
    types: ['web'],
    origin: 'work',
    stack: ['Drupal 10/11', 'PHP', 'React', 'Twig', 'Tailwind CSS', 'Solr'],
    sites: [
      { name: 'Circor', href: 'https://www.circor.com/' },
      { name: 'Pumps', href: 'https://pumps.circor.com/' },
      { name: 'Maggi', href: 'https://www.maggi.de/' },
      { name: 'Thomy', href: 'https://www.thomy.de/' },
    ],
    image: { src: xprojects, srcSm: xprojectsSm, srcMd: xprojectsMd, srcLg: xprojectsLg },
  },
  {
    id: 'pandeconomy',
    name: 'Pandeconomy',
    textKey: 'projectPandeconomyText',
    types: ['mobile'],
    origin: 'personal',
    stack: ['React Native', 'TypeScript', 'MMKV', 'GitHub Actions'],
    repo: `${GITHUB}/pandeconomy`,
    download: `${GITHUB}/pandeconomy/releases/latest`,
    image: { src: pandeconomy, srcSm: pandeconomySm, srcMd: pandeconomyMd, srcLg: pandeconomyLg },
  },
  {
    id: 'bahia-lectora',
    name: 'Bahía Lectora',
    textKey: 'projectBahiaLectoraText',
    types: ['web'],
    origin: 'personal',
    stack: ['React', 'Vite', 'Tailwind CSS', 'Google APIs', 'Netlify'],
    repo: `${GITHUB}/bahia-lectora`,
    live: 'https://bahia-lectora.jzmarquez.com/',
    image: { src: bahiaLectora, srcSm: bahiaLectoraSm, srcMd: bahiaLectoraMd, srcLg: bahiaLectoraLg },
  },
  {
    id: 'videoclub-local',
    name: 'Videoclub Local',
    textKey: 'projectVideoclubText',
    types: ['web'],
    origin: 'personal',
    stack: ['Node.js', 'Express', 'React', 'Vite', 'ffmpeg', 'Android TV'],
    repo: `${GITHUB}/videoclub-local`,
    demo: 'https://videoclub-demo.netlify.app/',
    image: { src: videoclub, srcSm: videoclubSm, srcMd: videoclubMd, srcLg: videoclubLg },
  },
  {
    id: 'project-zomboid-server-status',
    name: 'Project Zomboid Server Status',
    textKey: 'projectZomboidStatusText',
    types: ['web'],
    origin: 'personal',
    stack: ['Netlify Functions', 'RCON', 'JavaScript'],
    repo: `${GITHUB}/project-zomboid-server-status`,
    live: 'https://pz.jzmarquez.com/',
    image: { src: pzServerStatus, srcSm: pzServerStatusSm, srcMd: pzServerStatusMd, srcLg: pzServerStatusLg },
  },
  {
    id: 'pokedex-tracker',
    nameKey: 'pokedexTitle',
    textKey: 'pokedexText',
    types: ['web'],
    origin: 'personal',
    stack: ['Angular', 'TypeScript', 'Tailwind CSS'],
    live: 'https://pokedex.jzmarquez.com/',
    image: { src: pokedex, srcSm: pokedexSm, srcMd: pokedexMd, srcLg: pokedexLg },
  },
  {
    id: 'heartopia-piano-translator',
    name: 'Heartopia Piano Translator',
    textKey: 'projectHeartopiaText',
    types: ['desktop'],
    origin: 'personal',
    stack: ['Python', 'Tkinter', 'PyInstaller'],
    repo: `${GITHUB}/heartopia-piano-translator`,
    live: 'https://lab.jzmarquez.com/heartopia/',
    download: `${GITHUB}/heartopia-piano-translator/releases/latest`,
    image: { src: heartopia, srcSm: heartopiaSm, srcMd: heartopiaMd, srcLg: heartopiaLg },
  },
  {
    id: 'portfolio',
    name: 'jzmarquez.com',
    textKey: 'personalCVWebText',
    altKey: 'personalWebsiteScreenshot',
    types: ['web'],
    origin: 'personal',
    stack: ['React', 'Vite', 'Tailwind CSS', 'MUI', 'Netlify'],
    repo: `${GITHUB}/portfolio`,
    image: { src: jmcvweb, srcSm: jmcvwebSm, srcMd: jmcvwebMd, srcLg: jmcvwebLg },
  },
  {
    id: 'millonario',
    nameKey: 'millonarioTitle',
    textKey: 'millonarioText',
    altKey: 'millonarioAlt',
    types: ['web', 'games'],
    origin: 'personal',
    stack: ['React', 'TypeScript', 'Google Sheets API'],
    live: 'https://ernarvi-millonario.jzmarquez.com',
    image: { src: millonario, srcSm: millonarioSm, srcMd: millonarioMd, srcLg: millonarioLg },
  },
  {
    id: 'que-te-pincho',
    nameKey: 'queTePinchoTitle',
    textKey: 'queTePinchoText',
    altKey: 'queTePinchoScreenshotAlt',
    types: ['games'],
    origin: 'personal',
    stack: ['Godot 4', 'GDScript', 'WebRTC', 'Android'],
    play: 'https://lab.jzmarquez.com/que-te-pincho/',
    image: { src: queTePincho, srcSm: queTePinchoSm, srcMd: queTePinchoMd },
  },
  {
    id: 'project-expenses-manager',
    name: 'Project Expenses Manager',
    textKey: 'projectExpensesManagerText',
    types: ['web'],
    origin: 'university',
    stack: ['Angular', 'TypeScript', 'Django REST', 'MySQL'],
    repo: `${GITHUB}/project-expenses-manager`,
    demo: 'https://project-expenses-manager-demo.netlify.app/',
    image: { src: expensesManager, srcSm: expensesManagerSm, srcMd: expensesManagerMd, srcLg: expensesManagerLg },
  },
  {
    id: 'espacio-metronomo',
    name: 'Espacio Metrónomo',
    textKey: 'projectEspacioMetronomoText',
    types: ['web', 'mobile'],
    origin: 'university',
    stack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'Android', 'Java'],
    coauthor: { name: 'Claudia Silvestre', href: 'https://github.com/claudiasilvestre' },
    repo: `${GITHUB}/PNET-Project`,
    demo: 'https://lab.jzmarquez.com/espacio-metronomo/',
    image: { src: espacioMetronomo, srcSm: espacioMetronomoSm, srcMd: espacioMetronomoMd },
  },
  {
    id: 'php-cms',
    nameKey: 'phpCmsTitle',
    textKey: 'phpCmsText',
    altKey: 'phpCmsAlt',
    types: ['web'],
    origin: 'university',
    stack: ['PHP', 'MariaDB', 'PHPUnit', 'DDEV', 'AdminLTE'],
    image: { src: phpcms, srcSm: phpcmsSm, srcMd: phpcmsMd, srcLg: phpcmsLg },
  },
  {
    id: 'laravel-shop',
    nameKey: 'laravelShopTitle',
    textKey: 'laravelShopText',
    types: ['web'],
    origin: 'university',
    stack: ['Laravel 8', 'PHP', 'Jetstream', 'Bootstrap', 'MySQL'],
    repo: `${GITHUB}/ine20jmd`,
    image: { src: laravelShop, srcSm: laravelShopSm, srcMd: laravelShopMd },
  },
  {
    id: 'docker-kubernetes',
    nameKey: 'dockerKubernetesTitle',
    textKey: 'dockerKubernetesText',
    altKey: 'dockerKubernetesAlt',
    types: ['web'],
    origin: 'university',
    stack: ['Docker', 'Kubernetes', 'Minikube', 'MariaDB'],
    image: { src: dockerKubernetes, srcSm: dockerKubernetesSm, srcMd: dockerKubernetesMd, srcLg: dockerKubernetesLg },
  },
  {
    id: 'monster-war',
    nameKey: 'monsterWarTitle',
    textKey: 'monsterWarText',
    types: ['games', 'xr'],
    origin: 'university',
    stack: ['Unity', 'C#'],
    coauthor: PERINAN,
    repo: `${GITHUB}/Monster-WAR-DSH2021`,
    download: `${GITHUB}/Monster-WAR-DSH2021/releases/latest`,
    video: 'jIragOxu9tA',
  },
  {
    id: 'quimicefa',
    nameKey: 'quimicefaTitle',
    textKey: 'quimicefaText',
    types: ['games', 'xr'],
    origin: 'university',
    stack: ['Unity', 'C#'],
    repo: `${GITHUB}/quimicefa-ar`,
    download: `${GITHUB}/quimicefa-ar/releases/latest`,
    video: 'Jvo3VOHDayM',
  },
];
