/**
 * Application configuration
 * Public, non-sensitive display values — hardcoded since they're shown
 * directly on the page and don't vary by environment.
 */
import contact from '../data/contact.json';

const config = {
  app: {
    name: 'Jesús Márquez Delgado - Web Developer',
    description: 'Portfolio and CV of Jesús Márquez Delgado, Web Developer · Drupal, PHP & React',
    url: 'https://jzmarquez.com',
  },
  // Shared with the PDF CV (scripts/build-cv-pdf.mjs).
  contact: {
    email: contact.email,
    phone: contact.phone,
    phoneDisplay: contact.phoneDisplay,
    location: contact.location,
  },
  social: {
    github: contact.github,
    linkedin: contact.linkedin,
    // Public lab only: never link /proyectos/ or other password-protected pages.
    // By language, like the lab's own pages.
    lab: { es: 'https://lab.jzmarquez.com/', en: 'https://lab.jzmarquez.com/en/' },
    labProjects: { es: 'https://lab.jzmarquez.com/proyectos-publicos/', en: 'https://lab.jzmarquez.com/en/projects/' },
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
