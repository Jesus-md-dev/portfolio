/**
 * Application configuration
 * Public, non-sensitive display values — hardcoded since they're shown
 * directly on the page and don't vary by environment.
 */

const config = {
  app: {
    name: 'Jesús Márquez Delgado - Web Developer',
    description: 'Portfolio and CV of Jesús Márquez Delgado, Web Developer · Drupal, PHP & React',
    url: 'https://jzmarquez.com',
  },
  contact: {
    email: 'jesusmarquezdelgado@gmail.com',
    phone: '+34697394198',
    location: 'Cádiz, Spain',
  },
  social: {
    github: 'https://github.com/Jesus-md-dev',
    linkedin: 'https://www.linkedin.com/in/jes%C3%BAs-m%C3%A1rquez-delgado-1334531b9/',
    // Public lab only: never link /proyectos/ or other password-protected pages.
    lab: 'https://lab.jzmarquez.com/',
    labProjects: 'https://lab.jzmarquez.com/proyectos-publicos/',
  },
  cv: {
    downloadUrl: {
      es: '/cv-jesus-marquez-delgado-es.pdf',
      en: '/cv-jesus-marquez-delgado-en.pdf',
    },
  },
  isDevelopment: import.meta.env.DEV,
  isProduction: import.meta.env.PROD,
};

export default config;
