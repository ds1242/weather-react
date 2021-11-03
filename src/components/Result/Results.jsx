import React from 'react';
import { Card, ListGroup, Row, Col, Container } from 'react-bootstrap';
import './Result.css';
import moment from 'moment';



function WeatherCard (props) {

    const { date, currentTemp, wind, uvi, feelsLike, city, humidity, future, icon} = props;
    let futureCast = []
    for (let i = 0; i < 5; i++) {
        futureCast.push(future[i]);        
    }
    let iconUrl = 'https://openweathermap.org/img/w/'+ icon + '.png';

    return (
        <Container>
            <Row>
                <h3>Current Weather Information: </h3>
                <Card id='current-weather-card'>
                        <Card.Title id='current-weather-title'>{city} {moment.unix(date).format('L')} <img src={iconUrl}/></Card.Title>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Current Temp: {currentTemp}</ListGroup.Item>
                            <ListGroup.Item>Feels Like: {feelsLike}</ListGroup.Item>
                            <ListGroup.Item>Wind Speed: {wind}</ListGroup.Item>
                            <ListGroup.Item>UV Index: {uvi}</ListGroup.Item>
                            <ListGroup.Item>Humidity: {humidity}</ListGroup.Item>
                            {/* <ListGroup.Item>Weather: {weather}</ListGroup.Item> */}

                        </ListGroup>
                </Card>
            </Row>
            <h3>Five Day Forecast: </h3>
                {future?.length ? (
                    <Row xs={1} md={3}>
                    {futureCast?.map(future => {
                        let cardUrl = 'https://openweathermap.org/img/w/'+ future.weather[0].icon + '.png';
                        return(
                            <Col id='future-cards' >
                                <Card id='future-forecast-cards'>
                                    <Card.Title id='title'>{moment.unix(future.dt).format('L')} <img src={cardUrl}/> </Card.Title>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>Temp: {future.temp.day}</ListGroup.Item>
                                        <ListGroup.Item>Feels Like: {future.feels_like.day}</ListGroup.Item>
                                        <ListGroup.Item>Wind Speed: {future.wind_speed}</ListGroup.Item>
                                        <ListGroup.Item>UV Index: {future.uvi}</ListGroup.Item>
                                        <ListGroup.Item>Humidity: {future.humidity}</ListGroup.Item>
                                    </ListGroup>
                                </Card>
                            </Col>
                        )
                    }
                    )}
                    </Row>


                ) : (
                    <h2>Please search for weather</h2>
                )}
        </Container>
    )
}

export default WeatherCard;