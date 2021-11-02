import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';



function WeatherCard (props) {

    const { date, currentTemp, wind, uvi, feelsLike, city, humidity } = props;
    console.log(props)

    return (
        <Card>
            <Card.Body>
                <Card.Title>{city}</Card.Title>
                <ListGroup variant="flush">
                    <ListGroup.Item>Current Temp: {currentTemp}</ListGroup.Item>
                    <ListGroup.Item>Feels Like: {feelsLike}</ListGroup.Item>
                    <ListGroup.Item>Wind Speed: {wind}</ListGroup.Item>
                    <ListGroup.Item>UV Index: {uvi}</ListGroup.Item>
                    <ListGroup.Item>Humidity: {humidity}</ListGroup.Item>
                    {/* <ListGroup.Item>Weather: {weather}</ListGroup.Item> */}

                </ListGroup>
            </Card.Body>
        </Card>
    )
}

export default WeatherCard;