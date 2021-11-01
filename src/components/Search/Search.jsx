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

        const key = '1eec8ff5f151483ae61036bcfff1b27e';
        const geoApiUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=' + cityVal.city + '&limit=1&appid=' + key;
    
        fetch(geoApiUrl)
        .then(function(response) {
            if(response.ok) {
                return response.json();
            } else {
                console.log('Error: ' + response.statusText);
            }
        })
        .then(function(data) {
            console.log(data);
        })
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