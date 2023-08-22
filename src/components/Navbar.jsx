import logo from '../images/logos/logo2.png'
import { Navbar, Nav, Container } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import { useState } from 'react';

export default function NavBar() {

    const [activeOne, setActiveOne] = useState("inactive");
  const [activeTwo, setActiveTwo] = useState("inactive");
  const [activeThree, setActiveThree] = useState("inactive");
  const [activeFour, setActiveFour] = useState("inactive");
  const [activeFive, setActiveFive] = useState("inactive");

  const handleClick = (activeClass, setActiveClass, link) => {
      if(activeClass === "active") {
          setActiveClass("active")
      } else {
          setActiveClass("active")
      }
      if(link === "about" || link === "services" || link === "portfolio" || link === "contact" || link === "home") {
          resetOtherLinks(link);
      }
  };

  const resetOtherLinks = (link) => {
      if(link === "about"){
        setActiveTwo("inactive");
        setActiveThree("inactive");
        setActiveFour("inactive");
        setActiveFive("inactive");
        return;
    }
    if(link === "home"){
      setActiveTwo("inactive");
      setActiveThree("inactive");
      setActiveFour("inactive");
      setActiveOne("inactive");
      return;
  }

    if(link === "services"){
      setActiveOne("inactive");
      setActiveThree("inactive");
      setActiveFour("inactive");
      setActiveFive("inactive");
      return;
  }

  if(link === "portfolio"){
    setActiveOne("inactive");
    setActiveTwo("inactive");
    setActiveFour("inactive");
    setActiveFive("inactive");
    return;
}

  if(link === "contact"){
    setActiveOne("inactive");
    setActiveTwo("inactive");
    setActiveThree("inactive");
    setActiveFive("inactive");
    return;
  }


  };

  return (
      <Navbar className='navBar sticky-top pos' expand="md">
        <Container >
          <Navbar.Brand href="/" onClick = {() => handleClick(activeFive, setActiveFive, "home")}><img src = {logo} className = "logoPicture"/></Navbar.Brand>
          <Navbar.Toggle/>
          <Navbar.Collapse id="responsive-navbar-nav">    
            <Nav>
              <Link to="about" className = {`NavBarLink ${activeOne}`} onClick = {() => handleClick(activeOne, setActiveOne, "about")}>About</Link>
              <Link to="services" className = {`NavBarLink ${activeTwo}`} onClick = {() => handleClick(activeTwo, setActiveTwo, "services")}>Services</Link>
              <Link to="portfolio" className = {`NavBarLink ${activeThree}`} onClick = {() => handleClick(activeThree, setActiveThree, "portfolio")}>Portfolio</Link>
              <Link to="contact" className = {`NavBarLink ${activeFour}`} onClick = {() => handleClick(activeFour, setActiveFour, "contact")}>Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

  );
};



