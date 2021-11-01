import React from "react";
import { Form, Button, Container, Col, Row } from 'react-bootstrap';
import './Search.css';


function Search () {

    const handleFormSubmit = event => {
        event.preventDefault();
        let cityVal = document.getElementById('search-form').value
        
        console.log(cityVal)

    }


    return (
    <Container>

      <Row>
          <Col>
            <Form id='search-form' onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Enter City Name</Form.Label>
                    <Form.Control type="input" placeholder='City Name' />
                </Form.Group>
                <Button variant='primary' type='submit'>
                    Submit
                </Button>
            </Form>
        </Col>
            <Col>
            <h3>Search results go here</h3>
            
            </Col>
        </Row>
        <Row>
            <Col>
                Search History
            </Col>
            <Col>
                Five Day Section
            </Col>
        </Row>
    </Container> 
    )
};

export default Search;