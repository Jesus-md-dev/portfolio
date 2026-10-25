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

const GITHUB = 'https://github.com/Jesus-md-dev';
const PERINAN = { name: 'Jesús Periñán Dávila', href: 'https://www.linkedin.com/in/jesus-perinan-davila/' };

// Filters shown above the grid, in order. `all` is implicit.
export const PROJECT_TYPES = ['web', 'mobile', 'desktop', 'games', 'xr'];

// Every card of the Projects page, in display order: personal apps first,
// then professional work, then games and XR.
//
// - `types`: one or more of PROJECT_TYPES; a card shows under each of them.
// - `origin`: 'personal', 'university' or 'work'; the last two get a badge.
// - `name` is a proper noun; `nameKey` is used instead when it is translated.
// - Media is either `image` (a screenshot) or `video` (a YouTube id).
// - Links: `repo` (GitHub), `live` (website), `play` (playable build) and
//   `sites` (client websites, by name).
export const PROJECTS = [
  {
    id: 'pandeconomy',
    name: 'Pandeconomy',
    textKey: 'projectPandeconomyText',
    types: ['mobile'],
    origin: 'personal',
    stack: ['React Native', 'TypeScript', 'MMKV', 'GitHub Actions'],
    repo: `${GITHUB}/pandeconomy`,
    image: { src: pandeconomy, srcSm: pandeconomySm, srcMd: pandeconomyMd, srcLg: pandeconomyLg },
  },
  {
    id: 'videoclub-local',
    name: 'Videoclub Local',
    textKey: 'projectVideoclubText',
    types: ['web'],
    origin: 'personal',
    stack: ['Node.js', 'Express', 'React', 'Vite', 'ffmpeg', 'Android TV'],
    repo: `${GITHUB}/videoclub-local`,
    image: { src: videoclub, srcSm: videoclubSm, srcMd: videoclubMd, srcLg: videoclubLg },
  },
  {
    id: 'que-te-pincho',
    nameKey: 'queTePinchoTitle',
    textKey: 'queTePinchoText',
    altKey: 'queTePinchoScreenshotAlt',
    types: ['games'],
    origin: 'personal',
    stack: ['Godot 4', 'GDScript', 'WebRTC', 'Android'],
    play: 'https://lab.jzmarquez.com/p-e934da6fe540/',
    image: { src: queTePincho, srcSm: queTePinchoSm, srcMd: queTePinchoMd },
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
    id: 'project-zomboid-server-status',
    name: 'Project Zomboid Server Status',
    textKey: 'projectZomboidStatusText',
    types: ['web'],
    origin: 'personal',
    stack: ['Netlify Functions', 'RCON', 'JavaScript'],
    repo: `${GITHUB}/project-zomboid-server-status`,
    live: 'https://pz-server-status.netlify.app/',
    image: { src: pzServerStatus, srcSm: pzServerStatusSm, srcMd: pzServerStatusMd, srcLg: pzServerStatusLg },
  },
  {
    id: 'heartopia-piano-translator',
    name: 'Heartopia Piano Translator',
    textKey: 'projectHeartopiaText',
    types: ['desktop'],
    origin: 'personal',
    stack: ['Python', 'Tkinter', 'PyInstaller'],
    repo: `${GITHUB}/heartopia-piano-translator`,
    image: { src: heartopia, srcSm: heartopiaSm, srcMd: heartopiaMd, srcLg: heartopiaLg },
  },
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
    id: 'project-expenses-manager',
    name: 'Project Expenses Manager',
    textKey: 'projectExpensesManagerText',
    types: ['web'],
    origin: 'university',
    stack: ['Angular', 'TypeScript', 'Django REST', 'MySQL'],
    repo: `${GITHUB}/project-expenses-manager`,
    image: { src: expensesManager, srcSm: expensesManagerSm, srcMd: expensesManagerMd, srcLg: expensesManagerLg },
  },
  {
    id: 'survival-zombie',
    nameKey: 'survivalZombieTitle',
    textKey: 'survivalZombieText',
    types: ['games'],
    origin: 'university',
    stack: ['Unity', 'C#'],
    coauthor: PERINAN,
    repo: `${GITHUB}/Trabajo-FPS-Unity`,
    video: 'NsuEjiRypPo',
  },
  {
    id: 'wave-shooter',
    nameKey: 'waveShooterTitle',
    textKey: 'waveShooterText',
    types: ['games'],
    origin: 'personal',
    stack: ['Unity', 'C#'],
    video: 'wG-2kG7awZo',
  },
  {
    id: 'space-ball',
    nameKey: 'spaceBallTitle',
    textKey: 'spaceBallText',
    types: ['games'],
    origin: 'university',
    stack: ['Unity', 'C#'],
    repo: `${GITHUB}/Juego-Plataformas-Simple-Unity`,
    video: '7Ij2qMfMZoE',
  },
  {
    id: 'zigzag-cube',
    nameKey: 'zigzagCubeTitle',
    textKey: 'zigzagCubeText',
    types: ['games'],
    origin: 'personal',
    stack: ['Unity', 'C#'],
    video: 'CpbWe8kSolI',
  },
  {
    id: 'monster-war',
    nameKey: 'monsterWarTitle',
    textKey: 'monsterWarText',
    types: ['games', 'xr'],
    origin: 'university',
    stack: ['Unity', 'C#'],
    coauthor: PERINAN,
    repo: `${GITHUB}/Trabajo-Realidad-Aumentada`,
    video: 'jIragOxu9tA',
  },
  {
    id: 'quimicefa',
    nameKey: 'quimicefaTitle',
    textKey: 'quimicefaText',
    types: ['games', 'xr'],
    origin: 'university',
    stack: ['Unity', 'C#'],
    repo: `${GITHUB}/Trabajo-Realidad-Aumentada`,
    video: 'Jvo3VOHDayM',
  },
  {
    id: 'space-survival',
    nameKey: 'spaceSurvivalTitle',
    textKey: 'spaceSurvivalText',
    types: ['games', 'xr'],
    origin: 'university',
    stack: ['Unity', 'C#'],
    repo: `${GITHUB}/Trabajo-Realidad-Virtual`,
    video: 'CMsBWdokYGc',
  },
];
