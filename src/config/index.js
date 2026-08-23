/**
 * Application configuration
 * Centralized configuration management using environment variables
 */

const config = {
  app: {
    name: import.meta.env.VITE_NAME || 'Jesús Márquez Delgado - Curriculum Vitae',
    description: import.meta.env.VITE_DESCRIPTION || 'Curriculum Vitae de Jesús Márquez Delgado',
    url: import.meta.env.VITE_URL || 'https://jesusmarquezdelgado.netlify.app',
  },
  contact: {
    email: import.meta.env.VITE_EMAIL || 'jesusmarquezdelgado@gmail.com',
    phone: import.meta.env.VITE_PHONE || '+34697394198',
    location: import.meta.env.VITE_LOCATION || 'Chiclana de la Frontera, Cádiz',
  },
  social: {
    github: import.meta.env.VITE_GITHUB_URL || 'https://github.com/Jesus-md-dev',
    linkedin: import.meta.env.VITE_LINKEDIN_URL || 'https://www.linkedin.com/in/jes%C3%BAs-m%C3%A1rquez-delgado-1334531b9/',
  },
  cv: {
    downloadUrl: {
      es: import.meta.env.VITE_CV_URL_ES || '/cv-jesus-marquez-delgado-es.pdf',
      en: import.meta.env.VITE_CV_URL_EN || '/cv-jesus-marquez-delgado-en.pdf',
    },
  },
  analytics: {
    googleAnalyticsId: import.meta.env.VITE_GOOGLE_ANALYTICS_ID,
    hotjarId: import.meta.env.VITE_HOTJAR_ID,
  },
  isDevelopment: import.meta.env.DEV,
  isProduction: import.meta.env.PROD,
};

export default config;