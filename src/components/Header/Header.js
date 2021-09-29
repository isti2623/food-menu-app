import React from 'react';
import { Container, Nav, Navbar, Stack, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar className="sticky-top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand className="fw-bold fs-2" href="/">Food-Menu-App</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Stack direction="horizontal" gap={3}>
                            <NavLink
                                className="text-white text-decoration-none"
                                to="/home"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                            >
                                HOME
                            </NavLink>
                            <NavLink
                                className="text-white text-decoration-none"
                                to="/food"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                            >
                                FOOD
                            </NavLink>
                            <NavLink
                                className="text-white text-decoration-none"
                                to="/about"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                            >
                                ABOUT US
                            </NavLink>
                            <NavLink
                                className="text-white text-decoration-none"
                                to="/contact"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                            >
                                CONTACT
                            </NavLink>
                            <Button className="fw-bold" variant="warning">Order Now</Button>
                        </Stack>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;