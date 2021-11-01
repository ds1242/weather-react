import React, { useState } from "react";
import { Form, Button, Container, Col, Row, Spinner } from 'react-bootstrap';


import './Search.css';


function Search () {
    
    
    const [cityVal, setCityVal] = useState({city: ''});
    const [cityVal2, setCityVal2] = useState();
    const [temp, setTemp] = useState();
    const [wind, setWind] = useState();
    const [humidity, setHumidity] = useState();
    const [uvi, setUvi] = useState();
    const [fiveDay, setFiveDay] = useState();

    const key = '1eec8ff5f151483ae61036bcfff1b27e';
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setCityVal({
            ...cityVal,
            [name]: value,
        });
    };

    const getWeather = ( cityVal, lat, lon ) => {
        // console.log(cityVal, lat, lon)
        const weatherApi = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&units=imperial&exclude=hourly&appid=' + key;
        fetch(weatherApi)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            setCityVal2(cityVal);
            setTemp(data.current.temp);
            setWind(data.current.wind_speed);
            setHumidity(data.current.humidity);
            setUvi(data.current.uvi);
            setFiveDay(data.daily);
        })
        .catch(function(error){
            console.error(error);
        });
    }
    
    const handleFormSubmit = async event => {
        event.preventDefault();

        const geoApiUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=' + cityVal.city + '&limit=1&appid=' + key;
        if(cityVal.city === '') {
            alert('Please entere a city name into the search box');
        } else {
            fetch(geoApiUrl)
            .then(function(response) {
                if(response.ok) {
                    return response.json();
                } else {
                    console.log('Error: ' + response.statusText);
                }
            })
            .then(function(data) {
                let lat = data[0].lat;
                let lon = data[0].lon;
                getWeather(cityVal.city, lat, lon)
            })
            .catch(function(error) {
                console.error('Error')
            })

        }
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
            
            <h4>{cityVal2}</h4>
            <h4>{temp}</h4>
            <h4>{wind}</h4>
            <h4>{humidity}</h4>
            <h4>{uvi}</h4>
            
            </Col>
        </Row>
        <Row>
            <Col>
                Search History
            </Col>
            <Col>
                Five Day Section
                {fiveDay?.map(fiveDay => {
                    return (
                        console.log(fiveDay)
                    )
                })}
            </Col>
        </Row>
    </Container> 
    )
};

export default Search;