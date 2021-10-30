import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import './Footer.css';


function Footer () {
    return (
        <Navbar bg='dark' fixed='bottom'>
            {/* <Container> */}
                <Navbar.Brand>
                    <p id='footer'>Created by David Shaw &copy; {new Date().getFullYear()}</p>
                </Navbar.Brand>
            {/* </Container> */}
        </Navbar>
    )
};


export default Footer;