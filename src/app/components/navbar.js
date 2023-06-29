"use client";
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './app.css';

function Nav_bar() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark" sticky="top" expand="lg">
      <Container fluid>
        <Navbar.Brand className="brand-link" href="#">Archie Goli</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#action1">About Me</Nav.Link>
            <Nav.Link href="#action2">Projects</Nav.Link>
            <Nav.Link href="#action2">Coursework</Nav.Link>
            <Nav.Link className="last-link" href="#action3">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
    </>
  );
}




export default Nav_bar;