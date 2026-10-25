import React, { createContext, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';
import { languageFromPath, LANGUAGES, localizedPath, stripLanguage } from './routes.js';
import { translations } from './translations.js';

// Language Context
const LanguageContext = createContext();

// Language Provider Component
// The language comes from the URL (see routes.js); src/index.jsx sends returning
// visitors to the language they chose last.
export const LanguageProvider = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentLanguage = languageFromPath(location.pathname);

  // Save language preference to localStorage
  useEffect(() => {
    localStorage.setItem('preferredLanguage', currentLanguage);
    
    // Update document language attribute
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  const setLanguage = (language) => {
    if (translations[language] && language !== currentLanguage) {
      navigate(localizedPath(language, stripLanguage(location.pathname)) + location.search);
    }
  };

  const toggleLanguage = () => {
    const newLang = currentLanguage === 'es' ? 'en' : 'es';
    setLanguage(newLang);
  };

  const value = {
    currentLanguage,
    translations: translations[currentLanguage],
    availableLanguages: LANGUAGES,
    setLanguage,
    toggleLanguage,
    t: (key) => {
      // Support nested keys with dot notation (e.g., 'education.0.title')
      const keys = key.split('.');
      let result = translations[currentLanguage];
      
      for (const k of keys) {
        if (result && typeof result === 'object' && k in result) {
          result = result[k];
        } else {
          // eslint-disable-next-line no-console
          console.warn(`Translation key not found: ${key}`);
          return key;
        }
      }
      
      return result;
    }
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired
};

// Custom hook to use language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;