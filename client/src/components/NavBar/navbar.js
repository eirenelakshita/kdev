import React from 'react';
// import Grid from 'react-css-grid';
import './navbar.css';

import { Container, Row, Col } from '../Grid';

const navbar = () => (
  
<Container fluid>
      <Row id="row-nav">
        <Col size="sm-4" style={{backgroundColor:"clear"}} />
        <Col size="sm-4" id="col-center" style={{backgroundColor:"clear"}}>
          <a href="#" className="button">Primary Care</a>
        </Col>
        <Col size="sm-4" style={{backgroundColor:"clear"}} />
      </Row>
    
      <Row id="row-nav">
        <Col size="sm-3" style={{backgroundColor:"clear"}} />
        <Col size="sm-3" id="col-right" style={{backgroundColor:"clear"}}>
          <a href="#" className="button">Dentist</a>
        </Col>
        <Col size="sm-3" id="col-left" style={{backgroundColor:"clear"}}>
          <a href="#" className="button">Optometry</a>
        </Col>
        <Col size="sm-3" style={{backgroundColor:"clear"}} />
      </Row>
     
      <Row id="row-nav">
        <Col size="sm-2" style={{backgroundColor:"clear"}} />
        <Col size="sm-2" id="col-left" style={{backgroundColor:"clear"}}>
          <a href="#" className="button">Specialist</a>
        </Col>
        <Col size="sm-2" style={{backgroundColor:"clear"}} />
        <Col size="sm-2" style={{backgroundColor:"clear"}} />
        <Col size="sm-2" id="col-right" style={{backgroundColor:"clear"}}>
          <a href="#" className="button">Dermatologist</a>
        </Col>
        <Col size="sm-2" style={{backgroundColor:"clear"}} />
      </Row>

      <Row id="row-nav">
        <Col size="sm-4" id="col-center" style={{backgroundColor:"clear"}}>
          <a href="#" className="button">Pharmacy</a>
        </Col>
        {/* <Col size="sm-2" style={{backgroundColor:"clear"}} /> */}
        <Col size="sm-2" style={{backgroundColor:"clear"}} />
        <Col size="sm-2" style={{backgroundColor:"clear"}} />
        {/* <Col size="sm-2" style={{backgroundColor:"clear"}} /> */}
        <Col size="sm-4" id="col-center" style={{backgroundColor:"clear"}}>
          <a href="#" className="button">Cardiologist</a>
        </Col>
      </Row>

           <h1 id="green-header">⚕️   My Patient Portal   ⚕️</h1>
    <p id="green-border">Navigate Further From This Page</p>
   
 </Container>
);

  

export default navbar;