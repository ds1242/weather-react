import React, { useState } from "react";
import { Form, Button, Container, Col, Row, Spinner } from 'react-bootstrap';
import Result from '../Result';


import './Search.css';


function Search () {
    
    
    const [cityVal, setCityVal] = useState({city: ''});
    const [cityVal2, setCityVal2] = useState();
    const [temp, setTemp] = useState();
    const [wind, setWind] = useState();
    const [humidity, setHumidity] = useState();
    const [uvi, setUvi] = useState();
    const [feel, setFeel] = useState();
    const [currentDt, setCurrentDt] = useState();
    const [currentWeatherIcon, setCurrentWeatherIcon] = useState();
    const [fiveDay, setFiveDay] = useState([]);

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
            setCityVal2(cityVal);
            setTemp(data.current.temp);
            setWind(data.current.wind_speed);
            setHumidity(data.current.humidity);
            setUvi(data.current.uvi);
            setFeel(data.current.feels_like);
            let futureForecast = data.daily;
            setCurrentWeatherIcon(data.current.weather[0].icon);
            setCurrentDt(data.current.dt);
            // console.log(futureForecast)
            setFiveDay(futureForecast);
            // console.log(fiveDay)
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

      <Row xs={1} md={2}>
          <Col>
            <Form id='search-form' onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Enter City Name</Form.Label>
                    <Form.Control type="text" placeholder='City Name' name='city' value={cityVal.city} onChange={handleChange} />
                </Form.Group>
                <Button id='search-button' type='submit'>
                    Submit
                </Button>
            </Form>
            <Row>
                {/* <Col>
                    Search History
                </Col> */}
               
            </Row>
        </Col>
            <Col>
            
                <Result
                    key={cityVal2}
                    date={currentDt}
                    city={cityVal2}
                    currentTemp={temp}
                    feelsLike={feel}
                    wind={wind}
                    humidity={humidity}
                    uvi={uvi}
                    future={fiveDay}
                    icon={currentWeatherIcon}
                />            
            </Col>
        </Row>
    </Container> 
    )
};

export default Search;


