import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReactComponent as GitHubLogo } from "./assets/svg/github.svg";
import { ReactComponent as LinkedinLogo } from "./assets/svg/linkledin.svg";
import Iconlink from "./components/Iconlink.js";
import "./index.css";
import Home from "./pages/Home.js";
import Unity from "./pages/Unity.js";
import Vrar from "./pages/Vrar.js";
import Webs from "./pages/Webs.js";


const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark" className="custom-navbar">
        <Container>
          <Navbar.Brand className="mr-100" href="/">
            React-Bootstrap
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <span className="w-100"></span>
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="webs">Webs</Nav.Link>
              <Nav.Link href="vrar">VR/AR</Nav.Link>
              <Nav.Link href="unity">Unity</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="webs" element={<Webs />} />
                <Route path="vrar" element={<Vrar />} />
                <Route path="unity" element={<Unity />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </BrowserRouter>
      </div>
      <div bg="dark" expand="lg" variant="dark" className="custom-navbar footer bg-dark py-1">
        <div className="text-center w-100">
          <Iconlink svg={<GitHubLogo />} href="https://github.com/Jezusito" />
          <Iconlink svg={<LinkedinLogo />} href="https://www.linkedin.com/in/jes%C3%BAs-m%C3%A1rquez-delgado-1334531b9/" />
        </div>
        <div>
          <span>© 2022 Jesús Márquez Delgado. All Rights Reserved</span>
        </div>
      </div>
    </div>
  );
}

root.render(App())
