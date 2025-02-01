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
    <div>
      <div className="main-body">
        <Home />
      </div>
      <div className="custom-navbar footer bg-dark py-1">
        <div className="text-center w-100">
          <Iconlink svg={<GitHubLogo />} href="https://github.com/Jezusito" />
          <Iconlink
            svg={<LinkedinLogo />}
            href="https://www.linkedin.com/in/jes%C3%BAs-m%C3%A1rquez-delgado-1334531b9/"
          />
        </div>
        <div>
          <span>© 2022 Jesús Márquez Delgado. All Rights Reserved</span>
        </div>
      </div>
    </div>
    </ThemeProvider>
  );
}

root.render(App())