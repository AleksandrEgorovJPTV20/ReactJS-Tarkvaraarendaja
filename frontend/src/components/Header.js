import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

export default function Header() {
    const [name, setName] = React.useState('');
    const [role, setRole] = React.useState('');
    let navbar_admin = [];
    let navbar_user = [];
    let navbar_guest = [];

    React.useEffect(() => {
        refreshToken();
    });

    const refreshToken = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/users/token`);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setRole(decoded.role);
        } catch (error) {
            if(error.response){
                console.log(error.response.data.msg);
            }
        }
    };
    if(role === 'admin') {
        navbar_admin = [
        ];
        navbar_user = [
            { name: 'Logout', href: '/logout'},
        ];
    }else if (role === 'user') {
        navbar_admin = [];
        navbar_user = [
            { name: 'Logout', href: '/logout'},
        ];
    } else {
        navbar_guest = [
            { name: 'Login', href: '/login' },
        ];
    }
    return (
        <header id="header" className="header fixed-top header-scrolled mb-5">
            <Navbar expand="md">
                <Container>
                    <Navbar.Brand href="/" className="logo d-flex align-items-center">
                        <img src="assets/img/logo2.png" alt=""/>
                        <img src="assets/img/logo.png" alt=""/>
                        <span>PROFAdvert</span>
                    </Navbar.Brand>
                    <NavbarToggle aria-controls='responsive-navbar-nav'/>
                    <NavbarCollapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link>{name}</Nav.Link>
                            {navbar_admin.map((value, i) => (
                                <Nav.Link href={value.href} key={i}>
                                    {value.name}
                                </Nav.Link>
                            ))}
                            {navbar_user.map((value, i) => (
                                <Nav.Link href={value.href} key={i}>
                                    {value.name}
                                </Nav.Link>
                            ))}
                            {navbar_guest.map((value, i) => (
                                <Nav.Link href={value.href} key={i}>
                                    {value.name}
                                </Nav.Link>
                            ))}            
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