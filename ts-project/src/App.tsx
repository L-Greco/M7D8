import React from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from 'react-bootstrap'
import SearchBar from './components/SearchBar';

function App() {
  return (
    <Container>
    <Row>
      <Col id="heading" sm={12} className="text-center mt-5">
       
          <h1>Turn it On!</h1>
      
        <SearchBar />
      
      </Col>
    </Row>
    <hr />
   
    
  </Container>
  );
}

export default App;
