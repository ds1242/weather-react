import React from 'react';
import { Container, Navbar } from 'react-bootstrap'
import './Nav.css';


function Nav() {
    return (
        <Navbar id='navbar' >
            <Container>
                <Navbar.Brand>
                    <h2 id='navbar-brand'>David's React Weather</h2>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
};

export default Nav;