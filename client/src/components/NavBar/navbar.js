import React from 'react';
import { Container, Row, Col } from '../Grid';
import {BrowserRouter as Router , Route , Link } from 'react-router-dom';
import './navbar.css';


const navbar = () => (

 
    <Container fluid>
    <header className="header">
      <Link to="/patients">Patients Home</Link>
    </header>

    <header className="header1">
      <Link to="#">Log Out</Link>
    </header>

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
          <Link to="/patients/messages" className="button">Messages</Link>
        </Col>
        <Col size="sm-2" id="col-center" style={{backgroundColor:"clear"}}>
          <Link to="/patients/profile-info" className="button">Patient Info</Link>
        </Col>
        <Col size="sm-2" id="col-left" style={{backgroundColor:"clear"}}>
          <Link to="/patients/visits" className="button">Visits</Link>
        </Col>
        <Col size="sm-3" style={{backgroundColor:"clear"}} />
    </Row>


    <Row id="row-nav">
        <Col size="sm-2" style={{backgroundColor:"clear"}} />
        <Col size="sm-2" id="col-left" style={{backgroundColor:"clear"}}>
          <Link to="#" className="button">Calendar</Link>
        </Col>
        <Col size="sm-2" style={{backgroundColor:"clear"}} />
        <Col size="sm-2" style={{backgroundColor:"clear"}} />
        <Col size="sm-2" id="col-right" style={{backgroundColor:"clear"}}>
          <Link to="/patients/lab-result" className="button">Lab Results</Link>
        </Col>
        <Col size="sm-2" style={{backgroundColor:"clear"}} />
    </Row>


    <Row id="row-nav">
      <Col size="sm-5" id="col-center" style={{backgroundColor:"clear"}}>
          <Link to="/patients/rx" className="button">Pharmacy</Link>
      </Col>
         {/* <Col size="sm-2" style={{backgroundColor:"clear"}} /> */}
         {/* <Col size="sm-1" style={{backgroundColor:"clear"}} /> */}
      <Col size="sm-2" style={{backgroundColor:"clear"}}>
        <Link to="/patients">⚕️ My Patient Portal ⚕️</Link>
      </Col>
         {/* <Col size="sm-2" style={{backgroundColor:"clear"}} /> */}
      <Col size="sm-5" id="col-center" style={{backgroundColor:"clear"}}>
          <Link to="/patients/Cardiologist" className="button">Cardiologist</Link>
      </Col>
    </Row>


    
    
    </Container>

);

  

export default navbar;