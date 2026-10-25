export const THEMES = {
  dark: {
    name: 'dark',
    colors: {
      primary: '#ab9470', // Gold/Bronze (4.5:1 or more on the dark background and cards)
      primaryHover: '#96794b', // Darker gold
      secondary: '#ffffff',
      background: '#1f2937', // bg-gray-800 (Blue-grey)
      backgroundSecondary: '#111827', // bg-gray-900 (Darker blue-grey)
      surface: '#374151', // bg-gray-700 (Lighter blue-grey surface)
      text: '#ffffff',
      textSecondary: '#d1d5db', // text-gray-300
      border: 'rgba(161, 138, 102, 0.3)',
      scrollbar: '#1e2225',
      scrollbarThumb: '#a18a66',
      accent: '#f59e0b', // amber-500
    }
  },
  light: {
    name: 'light',
    colors: {
      primary: '#0f766e', // teal-700 (sophisticated, modern)
      primaryHover: '#0d5c55', // teal-800
      secondary: '#1f2937', // gray-800
      background: '#f9fafb', // bg-gray-50 - Clean light background
      backgroundSecondary: '#ffffff', // white - Pure white for cards
      surface: '#f3f4f6', // bg-gray-100 - Subtle surface
      text: '#111827', // gray-900 - Dark text for readability
      textSecondary: '#4b5563', // gray-600 - Secondary text
      border: 'rgba(15, 118, 110, 0.2)', // teal with opacity
      scrollbar: '#e5e7eb', // gray-200
      scrollbarThumb: '#0f766e', // teal-700
      accent: '#14b8a6', // teal-500
    }
  }
};

export const APP_CONFIG = {
  NAME: 'Jesús Márquez Delgado - Curriculum Vitae',
  DESCRIPTION: 'Curriculum Vitae de Jesús Márquez Delgado',
  AUTHOR: 'Jesús Márquez Delgado',
  MAX_CONTENT_WIDTH: '50rem'
};