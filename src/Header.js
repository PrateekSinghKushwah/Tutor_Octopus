import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CiSearch } from "react-icons/ci";
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Header.css'
import { NavLink } from 'react-bootstrap';
const Header = () => {
    return (
        <div>

            {['lg'].map((expand) => (
                <Navbar key={expand} expand={expand} className=" navbarf fixed-top desktop11">
                    <Container fluid>
                        <Navbar.Brand to="#">
                            <img src='./img/tutor.png' className='tutorimg' />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="start"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Offcanvas
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-center flex-grow-1 pe-3 navlink2">
                                    <Nav.Link className="navlink1" to="/">Home</Nav.Link>
                                    <Nav.Link className="navlink1" to="/about">Programes </Nav.Link>
                                    <Nav.Link className="navlink1" to="/about">Our Tutor </Nav.Link>
                                    <Nav.Link className="navlink1" to="/about">About Us </Nav.Link>
                                    <Nav.Link className="navlink1" to="/about">Contact Us </Nav.Link>

                                </Nav>
                                <Form className="d-flex">


                                    <Button variant="" className='iconj'><CiSearch className='searchicon' /></Button>
                                    <Button variant="" className='signup1'>Sign In</Button>
                                </Form>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>

            ))}



            <Navbar bg="white" expand="md" className='fixed-top navu9 desktop22' style={{ height: "80px", color: "black" }}>
                <Container>
                    <NavLink to="/" className="text-decoration-none  mx-3" style={{ fontSize: "34px", fontFamily: "Italic" }}>
                        <img src='./img/tutor.png' className='tutorimg1' />
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav text-white"  >
                        <Nav className="me-auto nav-links" >
                        <Nav.Link className="navlink1" to="/">Home</Nav.Link>
                                    <Nav.Link className="navlink1" to="/about">Programes </Nav.Link>
                                    <Nav.Link className="navlink1" to="/about">Our Tutor </Nav.Link>
                                    <Nav.Link className="navlink1" to="/about">About Us </Nav.Link>
                                    <Nav.Link className="navlink1" to="/about">Contact Us </Nav.Link>
                                    <Nav.Link className="navlink1" to="/about">Sign In </Nav.Link>
                                    
                        </Nav>
                    </Navbar.Collapse>
                </Container>

            </Navbar>

        </div>
    )
}

export default Header
