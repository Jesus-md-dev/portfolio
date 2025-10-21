import React from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { IconButton, Tooltip } from '@mui/material';
import { useTheme } from '../contexts/ThemeContext.js';
import { useLanguage } from '../i18n/LanguageContext.js';

const ThemeToggle = React.memo(() => {
  const { currentTheme, toggleTheme, colors } = useTheme();
  const { currentLanguage } = useLanguage();

  const getTooltipText = () => {
    if (currentLanguage === 'es') {
      return currentTheme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro';
    } else {
      return currentTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
    }
  };

  const getAriaLabel = () => {
    if (currentLanguage === 'es') {
      return `Tema ${currentTheme === 'dark' ? 'oscuro' : 'claro'} - cambiar`;
    } else {
      return `${currentTheme === 'dark' ? 'Dark' : 'Light'} theme - toggle`;
    }
  };

  return (
    <Tooltip title={getTooltipText()} arrow>
      <IconButton
        onClick={toggleTheme}
        aria-label={getAriaLabel()}
        sx={{
          color: colors.primary,
          backgroundColor: `${colors.primary}15`, // 15 = ~8% opacity
          border: `1px solid ${colors.border}`,
          '&:hover': {
            backgroundColor: `${colors.primary}25`, // 25 = ~15% opacity
            color: colors.primaryHover,
            borderColor: `${colors.primaryHover}70`, // 70 = ~44% opacity
            transform: 'scale(1.05)',
          },
          '&:active': {
            backgroundColor: `${colors.primary}35`, // 35 = ~21% opacity
          },
          margin: 0.5,
          transition: 'all 0.2s ease-in-out',
          width: '40px',
          height: '40px',
        }}
      >
        {currentTheme === 'dark' ? (
          <DarkModeIcon sx={{ fontSize: '1.2rem' }} />
        ) : (
          <LightModeIcon sx={{ fontSize: '1.2rem' }} />
        )}
      </IconButton>
    </Tooltip>
  );
});

ThemeToggle.displayName = 'ThemeToggle';

export default ThemeToggle;