import React from 'react';
import Nav from '../Nav';
import Footer from '../Footer';
import Search from '../Search';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App">

      <Nav></Nav>
      <Container>
        <Row>
          <Col>
            <Search></Search>
          </Col>
          <Col>
            <h3>Search results go here</h3>
          </Col>          
        </Row>
      </Container>
      <Footer></Footer>

    </div>
  );
}

export default App;
