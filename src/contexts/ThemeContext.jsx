import React, { createContext, useContext, useReducer, useEffect, useRef } from 'react';
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

// The theme scripts/prerender.mjs renders with. An inline script in index.html
// sets the visitor's theme on the body before the app loads.
const PRERENDER_THEME = 'light';

// Browser preference detection
const getBrowserTheme = () => {
  if (typeof window === 'undefined') {
    return PRERENDER_THEME;
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
const stateFor = (theme) => ({
  currentTheme: theme,
  colors: THEMES[theme].colors,
  availableThemes: Object.keys(THEMES)
});
const initialTheme = getInitialTheme();

// Theme Provider Component
// When hydrating prerendered HTML, the first render has to match it, so it uses
// PRERENDER_THEME and switches to the visitor's theme right after.
export const ThemeProvider = ({ children, hydrating = false }) => {
  const [state, dispatch] = useReducer(themeReducer, hydrating ? PRERENDER_THEME : initialTheme, stateFor);
  const pendingTheme = useRef(hydrating && initialTheme !== PRERENDER_THEME ? initialTheme : null);

  // Save theme preference to localStorage and update body class
  useEffect(() => {
    if (pendingTheme.current) {
      // The body already has the right class; don't save the prerender theme.
      const theme = pendingTheme.current;
      pendingTheme.current = null;
      dispatch({ type: 'SET_THEME', payload: theme });
      return;
    }

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
  children: PropTypes.node.isRequired,
  hydrating: PropTypes.bool
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