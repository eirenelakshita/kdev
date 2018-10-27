import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Container, Row, Col } from '../Grid';
import API from "../../utils/AuthAPI";
import './navbar.css';

class navbar extends Component {

  state ={
    isLoggedOut: false
  }

  logout = async () => {
    const response = await API.patientLogout();
    this.setState({ isLoggedOut: response.data.logoutStatus });
  }

  render() {
    if (this.state.isLoggedOut) {
      return (
        <Redirect to={{
          pathname: '/',
          state: { from: this.props.location }
          }} 
        /> 
      )
    }
    return (
      <Container fluid> 
    
        <Row id="row-nav">
          <Col size="sm-3" style={{backgroundColor:"clear"}}>
            <a href="/patients" className="button">Patient Home</a>
          </Col>
          <Col size="sm-2" id="col-right" style={{backgroundColor:"clear"}}>
            <a href="/patients/messages" className="button">Messages</a>
          </Col>
          <Col size="sm-2" id="col-center" style={{backgroundColor:"clear"}}>
            <a href="/patients/profile-info" className="button">Patient Info</a>
          </Col>
          <Col size="sm-2" id="col-left" style={{backgroundColor:"clear"}}>
            <a href="/patients/visits" className="button">Visits</a>
          </Col>
          <Col size="sm-3" style={{backgroundColor:"clear"}}>
            <a href="#" className="button" onClick={this.logout}>Log Out</a>
          </Col>
        </Row>
      
        <Row id="row-nav">
          <Col size="sm-2" style={{backgroundColor:"clear"}} />
          <Col size="sm-2" id="col-left" style={{backgroundColor:"clear"}}>
            <a href="#" className="button">Calendar</a>
          </Col>
          <Col size="sm-2" style={{backgroundColor:"clear"}} />
          <Col size="sm-2" style={{backgroundColor:"clear"}} />
          <Col size="sm-2" id="col-right" style={{backgroundColor:"clear"}}>
            <a href="/patients/lab-result" className="button">Lab Results</a>
          </Col>
          <Col size="sm-2" style={{backgroundColor:"clear"}} />
        </Row>

        <Row id="row-nav">
          <Col size="sm-5" id="col-center" style={{backgroundColor:"clear"}}>
            <a href="/patients/rx" className="button">Pharmacy</a>
          </Col>
          <Col size="sm-2" style={{backgroundColor:"clear"}}>
          <a>My Patient Portal</a>
          </Col>
          <Col size="sm-5" id="col-center" style={{backgroundColor:"clear"}}>
            <a href="#" className="button">Cardiologist</a>
          </Col>
        </Row>
   
      </Container>  
    )
  }
};

export default navbar;