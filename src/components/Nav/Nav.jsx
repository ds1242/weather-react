import React from 'react';
import { Container, Navbar } from 'react-bootstrap'
import './Nav.css';


function Nav() {
    return (
        <Navbar bg='dark' fixed='top'>
            <Container>
                <Navbar.Brand>
                    <h2 id='navbar-brand'>David's React Weather</h2>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
};

export default Nav;