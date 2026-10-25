import { createTheme, ThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import Footer from "./components/Footer.jsx";
import LanguageToggle from "./components/LanguageToggle.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";
import { ThemeProvider as CustomThemeProvider, useTheme } from "./contexts/ThemeContext.jsx";
import { LanguageProvider } from "./i18n/LanguageContext.jsx";
import "./index.css";
import Home from "./pages/Home.jsx";

// Shared by the browser (src/index.jsx, BrowserRouter) and the prerender
// (src/entry-server.jsx, StaticRouter), which pass the router in.
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

function App({ Router, routerProps = {}, hydrating = false }) {
  return (
    <ErrorBoundary>
      <CustomThemeProvider hydrating={hydrating}>
        <Router {...routerProps}>
          <LanguageProvider>
            <AppContent />
          </LanguageProvider>
        </Router>
      </CustomThemeProvider>
    </ErrorBoundary>
  );
}

App.propTypes = {
  Router: PropTypes.elementType.isRequired,
  routerProps: PropTypes.object,
  hydrating: PropTypes.bool,
};

export default App;
