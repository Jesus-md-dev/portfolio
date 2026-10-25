import React, { createContext, useContext, useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import { THEMES } from '../constants/theme.js';

// Theme Context
const ThemeContext = createContext();

// Theme Reducer
const themeReducer = (state, action) => {
  switch (action.type) {
    case 'SET_THEME':
      return {
        ...state,
        currentTheme: action.payload,
        colors: THEMES[action.payload].colors
      };
    case 'TOGGLE_THEME': {
      const newTheme = state.currentTheme === 'dark' ? 'light' : 'dark';
      return {
        ...state,
        currentTheme: newTheme,
        colors: THEMES[newTheme].colors
      };
    }
    default:
      return state;
  }
};

// Browser preference detection
const getBrowserTheme = () => {
  if (typeof window === 'undefined') {
    // Prerendering (scripts/prerender.mjs): an inline script in index.html sets
    // the body class before the app loads.
    return 'light';
  }
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
};

// Get stored theme or browser preference
const getInitialTheme = () => {
  if (typeof window === 'undefined') return getBrowserTheme();
  const storedTheme = localStorage.getItem('preferredTheme');
  if (storedTheme && THEMES[storedTheme]) {
    return storedTheme;
  }
  return getBrowserTheme();
};

// Initial state
const initialTheme = getInitialTheme();
const initialState = {
  currentTheme: initialTheme,
  colors: THEMES[initialTheme].colors,
  availableThemes: Object.keys(THEMES)
};

// Theme Provider Component
export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  // Save theme preference to localStorage and update body class
  useEffect(() => {
    localStorage.setItem('preferredTheme', state.currentTheme);
    
    // Update body class for global styling
    document.body.className = `${state.currentTheme}-mode`;
    
    // Update meta theme-color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', state.colors.primary);
    }
  }, [state.currentTheme, state.colors.primary]);

  // Listen to browser theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      // Only auto-switch if user hasn't manually set a preference
      const storedTheme = localStorage.getItem('preferredTheme');
      if (!storedTheme) {
        const newTheme = e.matches ? 'dark' : 'light';
        setTheme(newTheme);
      }
    };

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  const setTheme = (theme) => {
    if (THEMES[theme]) {
      dispatch({ type: 'SET_THEME', payload: theme });
    }
  };

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  const value = {
    ...state,
    setTheme,
    toggleTheme,
    isDark: state.currentTheme === 'dark',
    isLight: state.currentTheme === 'light'
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
};

// Custom hook to use theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export default ThemeContext;