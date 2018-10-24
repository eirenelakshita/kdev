import React from 'react';
import { Container, Row, Col } from '../Grid';
import './navbar.css';

const navbar = () => (
 
<Container fluid> 

      {/* <Row id="row-nav">
        <Col size="sm-4" style={{backgroundColor:"clear"}} />
        <Col size="sm-4" id="col-center" style={{backgroundColor:"clear"}}>
          <a href="#" className="button">Primary Care</a>
        </Col>
        <Col size="sm-4" style={{backgroundColor:"clear"}} />
      </Row> */}
    
      <Row id="row-nav">
        <Col size="sm-3" style={{backgroundColor:"clear"}} />
        <Col size="sm-2" id="col-right" style={{backgroundColor:"clear"}}>
          <a href="patients/messages" className="button">Messages</a>
        </Col>
        <Col size="sm-2" id="col-center" style={{backgroundColor:"clear"}}>
          <a href="#" className="button">Patient Info</a>
        </Col>
        <Col size="sm-2" id="col-left" style={{backgroundColor:"clear"}}>
          <a href="patients/visits" className="button">Visits</a>
        </Col>
        <Col size="sm-3" style={{backgroundColor:"clear"}} />
      </Row>
     
      <Row id="row-nav">
        <Col size="sm-2" style={{backgroundColor:"clear"}} />
        <Col size="sm-2" id="col-left" style={{backgroundColor:"clear"}}>
          <a href="#" className="button">Calendar</a>
        </Col>
        <Col size="sm-2" style={{backgroundColor:"clear"}} />
        <Col size="sm-2" style={{backgroundColor:"clear"}} />
        <Col size="sm-2" id="col-right" style={{backgroundColor:"clear"}}>
          <a href="#" className="button">Lab Results</a>
        </Col>
        <Col size="sm-2" style={{backgroundColor:"clear"}} />
      </Row>

      <Row id="row-nav">
        <Col size="sm-5" id="col-center" style={{backgroundColor:"clear"}}>
          <a href="patients/rx" className="button">Pharmacy</a>
        </Col>
        {/* <Col size="sm-2" style={{backgroundColor:"clear"}} /> */}
        {/* <Col size="sm-1" style={{backgroundColor:"clear"}} /> */}
        <Col size="sm-2" style={{backgroundColor:"clear"}}>
        <a>⚕️ My Patient Portal ⚕️</a>
        </Col>
        {/* <Col size="sm-2" style={{backgroundColor:"clear"}} /> */}
        <Col size="sm-5" id="col-center" style={{backgroundColor:"clear"}}>
          <a href="#" className="button">Cardiologist</a>
        </Col>
      </Row>

           {/* <h1 id="green-header">⚕️   My Patient Portal   ⚕️</h1> */}
    {/* <p id="green-border">Navigate Further From This Page</p> */}
   
 </Container>  

);

  

export default navbar;