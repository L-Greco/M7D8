import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from 'react-bootstrap'
import SearchBar from './components/SearchBar';
import Detail from './components/Detail';

import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
    <Container>
    <Row>
      <Col id="heading" sm={12} className="text-center mt-5">

        <Route path="/" exact component ={SearchBar} />     
      <Route path="/Detail/:trackId" exact component ={Detail}/>
      </Col>
    </Row>
    <hr />
   
    
  </Container>
  </Router>
  );
}

export default App;
