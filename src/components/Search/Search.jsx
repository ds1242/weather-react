import React from "react";
import { Form, Button } from 'react-bootstrap';
import './Search.css';


function Search () {
    return (
        <Form id='search-form'>
            <Form.Group className="mb-3">
                <Form.Label>Enter City Name</Form.Label>
                <Form.Control type="input" placeholder='City Name' />
            </Form.Group>
            <Button variant='primary' type='submit'>
                Submit
            </Button>
        </Form>
    )
};

export default Search;