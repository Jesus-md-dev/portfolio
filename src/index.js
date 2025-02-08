import { createTheme, ThemeProvider } from '@mui/material/styles';
import ReactDOM from 'react-dom/client';
import { ReactComponent as GitHubLogo } from "./assets/svg/github.svg";
import { ReactComponent as LinkedinLogo } from "./assets/svg/linkledin.svg";
import Iconlink from "./components/Iconlink.js";
import "./index.css";
import Home from "./pages/Home.js";

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#a18a66',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {


  return (
    <ThemeProvider theme={theme}>
      <div className='dark-mode'>
        <div className="main-body">
          <Home />
        </div>
        <div className="footer mt-6">
          <div className="content-width footer">
            <div className="flex flex-row justify-center mb-3">
              <Iconlink svg={<GitHubLogo />} href="https://github.com/Jezusito" target="_blank" rel="noopener noreferrer" />
              <Iconlink svg={<LinkedinLogo />} href="https://www.linkedin.com/in/jes%C3%BAs-m%C3%A1rquez-delgado-1334531b9/" target="_blank" rel="noopener noreferrer" />
            </div>
            <div>
              <span>© 2022 Jesús Márquez Delgado. All Rights Reserved</span>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

root.render(App())