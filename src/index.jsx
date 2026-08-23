import { createTheme, ThemeProvider } from '@mui/material/styles';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import Footer from "./components/Footer.jsx";
import LanguageToggle from "./components/LanguageToggle.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";
import { ThemeProvider as CustomThemeProvider, useTheme } from "./contexts/ThemeContext.jsx";
import { LanguageProvider } from "./i18n/LanguageContext.jsx";
import "./index.css";
import Home from "./pages/Home.jsx";

const root = ReactDOM.createRoot(document.getElementById('root'));

function AppContent() {
  const { colors } = useTheme();
  
  const muiTheme = createTheme({
    palette: {
      primary: {
        main: colors.primary,
      },
      secondary: {
        main: colors.accent,
      },
    },
  });

  return (
    <ThemeProvider theme={muiTheme}>
      <div>
        {/* Fixed position toggle buttons at top right */}
        <div className="fixed top-4 right-4 z-50 flex gap-3">
          <ThemeToggle />
          <LanguageToggle />
        </div>
        
        <div className="main-body" id="main-content">
          <Home />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <CustomThemeProvider>
        <LanguageProvider>
          <BrowserRouter>
            <AppContent />
          </BrowserRouter>
        </LanguageProvider>
      </CustomThemeProvider>
    </ErrorBoundary>
  );
}

root.render(<App />);

// Register service worker for PWA functionality
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js', { updateViaCache: 'none' })
      .then((registration) => {
        // eslint-disable-next-line no-console
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        // eslint-disable-next-line no-console
        console.log('SW registration failed: ', registrationError);
      });
  });
}