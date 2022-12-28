import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ReactDOM from 'react-dom/client';
import User from './classes/User.js';
import Banner from './components/Banner.js';
import Line from "./components/Line.js";
import Technology from "./components/Technology.js";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  let user = new User('Jesús', 'Márquez Delgado', 'https://avatars.githubusercontent.com/u/33559839?s=400&u=27ac4daecfe8a93e221135353da375f1fd8b06d2&v=4')
  return  (
    <div>
      <Navbar bg='dark' expand="lg" variant='dark' className='custom-navbar'>
        <Container>
          <Navbar.Brand className="mr-100" href="#home">React-Bootstrap</Navbar.Brand>
          <span className='w-100'></span>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className='main'>
        <Banner user={user}/>
        <section className='aboutMe'>
          <Container>
            <div className='text-section'>
              <h5><Line/>SOBRE MÍ</h5>
              <h4>QUIEN SOY YO</h4>
              Joven ingeniero informático, especializado en tecnologías de la información, 
              con un gran interés en el desarrollo software. 
              Con capacidad para aprender y aplicar mis conocimientos al ámbito profesional.            
            </div>
            <div className='skills-section'>
              <div className='grid rounded'>
                <Technology name="JavaScript" level="2.5"/>
                <Technology name="JavaScript" level="2.5"/>
                <Technology name="JavaScript" level="2.5"/>
                <Technology name="JavaScript" level="2.5"/>
                <Technology name="JavaScript" level="2.5"/>
                <Technology name="JavaScript" level="2.5"/>
                <Technology name="JavaScript" level="2.5"/>
                <Technology name="JavaScript" level="2.5"/>
                <Technology name="JavaScript" level="2.5"/>
                <Technology name="JavaScript" level="2.5"/>
                <Technology name="JavaScript" level="2.5"/>
                <Technology name="JavaScript" level="2.5"/>
              </div>
            </div>
          </Container>
        </section>
      </div>

      <Navbar bg='dark' expand="lg" variant='dark' className='custom-navbar navbar-fixed-bottom'>
        <Container>
          <span>© 2022 Jesús Márquez Delgado. All Rights Reserved</span>
        </Container>
      </Navbar>
    </div>
  );
}

root.render(App())
