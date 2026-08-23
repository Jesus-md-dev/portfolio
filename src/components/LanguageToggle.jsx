import React from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import { IconButton, Tooltip } from '@mui/material';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { useTheme } from '../contexts/ThemeContext.jsx';

const LanguageToggle = React.memo(() => {
  const { currentLanguage, toggleLanguage, t } = useLanguage();
  const { colors } = useTheme();

  const getLanguageDisplay = () => {
    return currentLanguage === 'es' ? 'ES' : 'EN';
  };

  const getTooltipText = () => {
    return currentLanguage === 'es' 
      ? 'Switch to English' 
      : 'Cambiar a Español';
  };

  return (
    <Tooltip title={getTooltipText()} arrow>
      <IconButton
        onClick={toggleLanguage}
        aria-label={`${t('language')} - ${getLanguageDisplay()}`}
        sx={{
          color: colors.primary,
          backgroundColor: `${colors.primary}15`, // 15 = ~8% opacity
          border: `1px solid ${colors.border}`,
          minWidth: '56px',
          minHeight: '48px',
          '&:hover': {
            backgroundColor: `${colors.primary}25`, // 25 = ~15% opacity
            color: colors.primaryHover,
            borderColor: `${colors.primaryHover}70`, // 70 = ~44% opacity
            transform: 'scale(1.05)',
          },
          '&:active': {
            backgroundColor: `${colors.primary}35`, // 35 = ~21% opacity
          },
          '&:focus': {
            outline: `2px solid ${colors.primary}`,
            outlineOffset: '2px',
          },
          margin: 0.5,
          transition: 'all 0.2s ease-in-out',
          height: '48px',
          '@media (prefers-reduced-motion: reduce)': {
            transition: 'none',
            '&:hover': {
              transform: 'none',
            },
          },
        }}
      >
        <LanguageIcon sx={{ 
          marginRight: 0.5, 
          fontSize: '1.2rem',
          color: 'inherit'
        }} />
        <span style={{ 
          fontSize: '0.75rem', 
          fontWeight: 'bold',
          color: 'inherit',
          letterSpacing: '0.5px'
        }}>
          {getLanguageDisplay()}
        </span>
      </IconButton>
    </Tooltip>
  );
});

LanguageToggle.displayName = 'LanguageToggle';

export default LanguageToggle;