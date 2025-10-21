import { createTheme, ThemeProvider } from '@mui/material/styles';
import ReactDOM from 'react-dom/client';
import ErrorBoundary from "./components/ErrorBoundary.js";
import Footer from "./components/Footer.js";
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
        <div className="main-body">
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