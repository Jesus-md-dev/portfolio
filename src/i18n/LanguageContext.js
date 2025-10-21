import React, { createContext, useContext, useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import { translations } from './translations.js';

// Language Context
const LanguageContext = createContext();

// Language Reducer
const languageReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LANGUAGE':
      return {
        ...state,
        currentLanguage: action.payload,
        translations: translations[action.payload]
      };
    default:
      return state;
  }
};

// Browser language detection
const getBrowserLanguage = () => {
  const browserLang = navigator.language || navigator.languages[0];
  // Extract language code (e.g., 'en-US' -> 'en')
  const langCode = browserLang.split('-')[0];
  // Return supported language or default to Spanish
  return translations[langCode] ? langCode : 'es';
};

// Get stored language or browser language
const getInitialLanguage = () => {
  const storedLang = localStorage.getItem('preferredLanguage');
  if (storedLang && translations[storedLang]) {
    return storedLang;
  }
  return getBrowserLanguage();
};

// Initial state
const initialState = {
  currentLanguage: getInitialLanguage(),
  translations: translations[getInitialLanguage()],
  availableLanguages: Object.keys(translations)
};

// Language Provider Component
export const LanguageProvider = ({ children }) => {
  const [state, dispatch] = useReducer(languageReducer, initialState);

  // Save language preference to localStorage
  useEffect(() => {
    localStorage.setItem('preferredLanguage', state.currentLanguage);
    
    // Update document language attribute
    document.documentElement.lang = state.currentLanguage;
  }, [state.currentLanguage]);

  const setLanguage = (language) => {
    if (translations[language]) {
      dispatch({ type: 'SET_LANGUAGE', payload: language });
    }
  };

  const toggleLanguage = () => {
    const newLang = state.currentLanguage === 'es' ? 'en' : 'es';
    setLanguage(newLang);
  };

  const value = {
    ...state,
    setLanguage,
    toggleLanguage,
    t: (key) => {
      // Support nested keys with dot notation (e.g., 'education.0.title')
      const keys = key.split('.');
      let result = state.translations;
      
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