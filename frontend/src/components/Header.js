import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';

export default function Header() {
    return (
        <header id="header" className="header fixed-top header-scrolled">
            <Navbar expand="md">
                <Container>
                    <Navbar.Brand href="#hero" className="logo d-flex align-items-center">
                        <img src="assets/img/logo2.png" alt=""/>
                        <img src="assets/img/logo.png" alt=""/>
                        <span>PROFAdvert</span>
                    </Navbar.Brand>
                    <NavbarToggle aria-controls='responsive-navbar-nav'/>
                    <NavbarCollapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/login" className="nav-link scrollto" style={{fontSize: "18px"}}>Login</Nav.Link>               
                        </Nav>
                        <Nav>
                            <Nav.Link href="/#hero" className="nav-link scrollto">Home</Nav.Link>
                            <Nav.Link href="/#about" className="nav-link scrollto">About</Nav.Link>
                            <Nav.Link href="/#gallery" className="nav-link scrollto">Gallery</Nav.Link>   
                            <Nav.Link href="/#faq" className="nav-link scrollto">FAQ</Nav.Link>   
                            <Nav.Link href="/#contact" className="nav-link scrollto">Contacts</Nav.Link>   
                            <Nav.Link href="/#about" className="getstarted scrollto">Get Started</Nav.Link>                                 
                        </Nav>
                    </NavbarCollapse>
                </Container>
            </Navbar>
        </header>
    );
}