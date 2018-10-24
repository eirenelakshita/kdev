import React from 'react';
import {Container, Row ,Col} from "reactstrap";


const Drug = props => (

  <Container>
    <h3>Drug Testing Result:</h3>
    <Row>
      <Col>1. Patient Details</Col>
      <Col>2. Clinical Details</Col>
      <Col>3. Date and Time of specimen</Col>
      <Col>4. High Risk</Col>
    </Row>
    <hr></hr>
    <Row>
      <Col></Col>
      <Col>
        <img src="https://media.americanpharmaceuticalreview.com/m/28/article/115455-1.jpg" 
            alt="chest X-Ray" height="500" width="500"></img>
      </Col>
      <Col></Col>
    </Row>
    <hr></hr>
  </Container>

);

export default Drug;