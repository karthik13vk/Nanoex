import React, { useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './../img/main-logo.png';
import { GoArrowUpRight } from "react-icons/go";
import twitterimg from './../img/twitter.png'
import youtube from './../img/youtube.png'
import telegram from './../img/telegram.png'
import reddit from './../img/reddit.png'
import './Header.scss';

const Header = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='header-part'>
            {/* <Navbar expand="lg" className="">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} className="logo" alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle onClick={handleShow} />
                    <Navbar.Collapse>
                        <Nav
                            className="mx-auto my-2 my-lg-0"
                        >
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#About">About</Nav.Link>
                            <Nav.Link href="#Tokenomics">Tokenomics</Nav.Link>
                            <Nav.Link href="#Features">Features</Nav.Link>
                            <Nav.Link href="#WhyNanoEx">Why NanoEx</Nav.Link>
                            <Nav.Link href="#Whitepaper">Whitepaper</Nav.Link>
                            <Nav.Link href="#Contact">Contact</Nav.Link>
                        </Nav>
                        <button className='main-btn'>BUY NOW &nbsp; <GoArrowUpRight /></button>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}
            {['lg'].map((expand) => (
                <Navbar key={expand} expand={expand} className="">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img src={logo} className="logo" alt="logo" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    <Navbar.Brand href="#home">
                                        <img src={logo} className="logo" alt="logo" loading="lazy"/>
                                    </Navbar.Brand>
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-center align-items-center flex-grow-1">
                                    <Nav.Link href="#home">Home</Nav.Link>
                                    <Nav.Link href="#About">About</Nav.Link>
                                    <Nav.Link href="#Tokenomics">Tokenomics</Nav.Link>
                                    <Nav.Link href="#Features">Features</Nav.Link>
                                    <Nav.Link href="#WhyNanoEx">Why NanoEx</Nav.Link>
                                    <Nav.Link href="#Whitepaper">Whitepaper</Nav.Link>
                                    <Nav.Link href="#Contact">Contact</Nav.Link>
                                </Nav>
                                <button className='main-btn'>BUY NOW &nbsp; <GoArrowUpRight /></button>

                                <div className='footer-section'>
                                    <div className="container">
                                        <div className="col-lg-12 text-center social-link">
                                            <ul>
                                                <li>
                                                    <a href="javascript:void(0);">
                                                        <img src={twitterimg} loading="lazy" alt="img" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);"> <img src={youtube} alt="img" loading="lazy" /></a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);"> <img src={telegram} alt="img" loading="lazy"/></a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);"> <img src={reddit} alt="img" loading="lazy"/></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-12 text-center">
                                            <div className="copyright">
                                                <span>
                                                    2025 © <b> NanoEx RWA </b>| <br /> All Rights Reserved
                                                </span>
                                                <p>
                                                    Empowering the Future of Finance with RWA Tokenization & Blockchain Innovation
                                                </p>
                                            </div>
                                        </div>

                                        <br />

                                    </div>
                                </div>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}

        </div>
    )
}

export default Header