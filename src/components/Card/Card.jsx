import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';



function WeatherCard (props) {

    const { date, temp, wind, uvi, weather } = props;
    console.log(props)

    return (
        <Card>
            <Card.Body>
                <Card.Title>{props.date}</Card.Title>
                <ListGroup variant="flush">
                    <ListGroup.Item>Temp: {props.temp}</ListGroup.Item>
                    <ListGroup.Item>Wind: {wind}</ListGroup.Item>
                    <ListGroup.Item>UVI: {uvi}</ListGroup.Item>
                    <ListGroup.Item>Weather: {weather}</ListGroup.Item>

                </ListGroup>
            </Card.Body>
        </Card>
    )
}

export default WeatherCard;