import React from 'react';
import { Navbar } from 'react-bootstrap';
import './Footer.css';


function Footer () {
    return (
        <Navbar id='navbar'>
            {/* <Container> */}
                <Navbar.Brand>
                    <p id='footer'>Created by David Shaw &copy; {new Date().getFullYear()}</p>
                </Navbar.Brand>
            {/* </Container> */}
        </Navbar>
    )
};


export default Footer;