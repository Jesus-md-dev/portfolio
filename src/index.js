import { createTheme, ThemeProvider } from '@mui/material/styles';
import ReactDOM from 'react-dom/client';
import ErrorBoundary from "./components/ErrorBoundary.js";
import Footer from "./components/Footer.js";
import LanguageToggle from "./components/LanguageToggle.js";
import ThemeToggle from "./components/ThemeToggle.js";
import { ThemeProvider as CustomThemeProvider, useTheme } from "./contexts/ThemeContext.js";
import { LanguageProvider } from "./i18n/LanguageContext.js";
import "./index.css";
import Home from "./pages/Home.js";

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
          <AppContent />
        </LanguageProvider>
      </CustomThemeProvider>
    </ErrorBoundary>
  );
}

root.render(<App />);