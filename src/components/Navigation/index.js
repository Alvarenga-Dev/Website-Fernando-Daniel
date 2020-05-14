import React from 'react';
import { animateScroll as scroll, Link } from 'react-scroll';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Styles } from './styles';

const scrollTop = () => {
    scroll.scrollToTop()
};

const Navigation = () => (
        <Styles>
            <Navbar className="navbar" fixed="top" expand="lg">
                <Container>
                    <Navbar.Brand className="navbar-brand" onClick={() => scrollTop()}>F Ξ R N Λ И D O D Λ N I Ξ L</Navbar.Brand>
                    <Navbar.Toggle className="navbar-toggle" aria-controls="basic-navbar-nav" >
                    <span>Ξ</span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                        <Link className="nav-link" to="header" spy={true} smooth={true} duration={600}>
                            Home
                        </Link>
                        <Link className="nav-link" to="singles" spy={true} smooth={true} duration={600}>
                            Singles
                        </Link>
                        <Nav.Link href="https://forms.umusic-online.com/forms/-Lq6g9l-sZbAI9zsTJhu" target="_blank">Newsletter</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Styles>
)

export default Navigation;
