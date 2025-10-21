/**
 * Application configuration
 * Centralized configuration management using environment variables
 */

const config = {
  app: {
    name: process.env.REACT_APP_NAME || 'Jesús Márquez Delgado - Curriculum Vitae',
    description: process.env.REACT_APP_DESCRIPTION || 'Curriculum Vitae de Jesús Márquez Delgado',
    url: process.env.REACT_APP_URL || 'https://jesusmarquezdelgado.netlify.app',
  },
  contact: {
    email: process.env.REACT_APP_EMAIL || 'jesusmarquezdelgado@gmail.com',
    phone: process.env.REACT_APP_PHONE || '+34697394198',
    location: process.env.REACT_APP_LOCATION || 'Chiclana de la Frontera, Cádiz',
  },
  social: {
    github: process.env.REACT_APP_GITHUB_URL || 'https://github.com/Jesus-md-dev',
    linkedin: process.env.REACT_APP_LINKEDIN_URL || 'https://www.linkedin.com/in/jes%C3%BAs-m%C3%A1rquez-delgado-1334531b9/',
  },
  cv: {
    downloadUrl: process.env.REACT_APP_CV_URL || 'https://drive.google.com/file/d/12n6WRc3-FtLW9Hjlc1ZFb3LkMWSVKqCt/view?usp=sharing',
  },
  analytics: {
    googleAnalyticsId: process.env.REACT_APP_GOOGLE_ANALYTICS_ID,
    hotjarId: process.env.REACT_APP_HOTJAR_ID,
  },
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
};

export default config;