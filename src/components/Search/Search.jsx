import React, { useState } from "react";
import { Form, Button, Container, Col, Row } from 'react-bootstrap';
import './Search.css';


function Search () {
    const [cityVal, setCityVal] = useState({city: ''});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCityVal({
            ...cityVal,
            [name]: value,
        });
    };

    const handleFormSubmit = async event => {
        event.preventDefault();
        
        
        console.log(cityVal)
        setCityVal({ city: '' });
    }


    return (
    <Container>

      <Row>
          <Col>
            <Form id='search-form' onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Enter City Name</Form.Label>
                    <Form.Control type="text" placeholder='City Name' name='city' value={cityVal.city} onChange={handleChange} />
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