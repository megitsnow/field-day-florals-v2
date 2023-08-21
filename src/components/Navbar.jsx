import logo from '../images/logos/logo2.png'
import { Navbar, Nav, Container } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

export default function NavBar() {
  return (
      <Navbar className='navBar sticky-top pos' expand="md">
        <Container >
          <Navbar.Brand href="/"><img src = {logo} className = "logoPicture"/></Navbar.Brand>
          <Navbar.Toggle/>
          <Navbar.Collapse id="responsive-navbar-nav">    
            <Nav>
              <Link to="about" className = "NavBarLink">About</Link>
              <Link to="services" className = "NavBarLink" >Services</Link>
              <Link to="portfolio" className = "NavBarLink">Portfolio</Link>
              <Link to="contact" className = "NavBarLink">Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

  );
}



