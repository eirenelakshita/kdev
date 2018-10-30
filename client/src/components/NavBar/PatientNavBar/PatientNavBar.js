import React, { Component } from 'react';
import { Container, Row, Col } from '../../Grid';
import { Link, Redirect } from 'react-router-dom';
import '../navbar.css';
import API from "../../../utils/AuthAPI";


class PatientNavBar extends Component {

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
      <Container fluid classes="navbar-container">

        <Row id="row-nav">
          <Col size="sm-3" style={{backgroundColor:"clear"}} />
          <Col size="sm-2" id="col-right" style={{backgroundColor:"clear"}}>
            <Link to="/patients/lab-result" className="button">Lab Results</Link>
          </Col>
          <Col size="sm-2" id="col-center" style={{backgroundColor:"clear"}}>
            <Link to="/patients" className="button">Patient Home</Link>
          </Col>
          <Col size="sm-2" id="col-left" style={{backgroundColor:"clear"}}>
            <Link to="/patients/profile-info" className="button">Patient Info</Link>
          </Col>
          <Col size="sm-3" style={{backgroundColor:"clear"}} />
        </Row>
      
        <Row id="row-nav">
          <Col size="sm-2" style={{backgroundColor:"clear"}} />
          <Col size="sm-2" id="col-left" style={{backgroundColor:"clear"}}>
            <Link to="/patients/visits" className="button">Visits</Link>
          </Col>
          <Col size="sm-2" style={{backgroundColor:"clear"}} />
          <Col size="sm-2" style={{backgroundColor:"clear"}} />
          <Col size="sm-2" id="col-right" style={{backgroundColor:"clear"}}>
            <Link to="/patients/messages" className="button">Messages</Link>
          </Col>
          <Col size="sm-2" style={{backgroundColor:"clear"}} />
        </Row>

        <Row id="row-nav">
          <Col size="sm-5" id="col-center" style={{backgroundColor:"clear"}}>
            <Link to="/patients/rx" className="button">Pharmacy</Link>
          </Col>
          <Col size="sm-2" style={{backgroundColor:"clear"}}>
            <h2 className="a">My Patient Portal</h2>
          </Col>
          <Col size="sm-5" id="col-center" style={{backgroundColor:"clear"}}>
            <Link to="#" className="button" onClick={this.logout}>Log Out</Link>
          </Col>
        </Row>
      
      </Container>
    )
  }
}

export default PatientNavBar;