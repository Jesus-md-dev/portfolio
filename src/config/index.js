/**
 * Application configuration
 * Public, non-sensitive display values — hardcoded since they're shown
 * directly on the page and don't vary by environment.
 */

const config = {
  app: {
    name: 'Jesús Márquez Delgado - Curriculum Vitae',
    description: 'Curriculum Vitae de Jesús Márquez Delgado',
    url: 'https://jesusmarquezdelgado.netlify.app',
  },
  contact: {
    email: 'jesusmarquezdelgado@gmail.com',
    phone: '+34697394198',
    location: 'Chiclana de la Frontera, Cádiz',
  },
  social: {
    github: 'https://github.com/Jesus-md-dev',
    linkedin: 'https://www.linkedin.com/in/jes%C3%BAs-m%C3%A1rquez-delgado-1334531b9/',
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
