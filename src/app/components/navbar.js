"use client";
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './app.css';

function Nav_bar() {
  return (
    <>
      <Navbar className="navbar" bg="primary" data-bs-theme="dark" sticky="top" expand="lg">
        <Container fluid>
          <Navbar.Brand className="brand-link"><b>Archie Goli</b></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav className="nav">
              <Nav.Link href="./">About Me</Nav.Link>
              <Nav.Link href="./projects">Projects</Nav.Link>
              <Nav.Link href="./research">Research</Nav.Link>
              <Nav.Link href="https://drive.google.com/file/d/1UnLCRgepO4ydtOq80bLkwvG3Yva9QrkF/view?usp=sharing">Resume</Nav.Link>
              <Nav.Link className="last-link" href="./coursework">Coursework</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Nav_bar;