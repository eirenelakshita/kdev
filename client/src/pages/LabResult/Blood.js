import React from 'react';
import {Container, Row ,Col} from "reactstrap";

const Blood = props => (

<div>
  <div className="container">
    <h3>Blood Testing Result:</h3>
    <Row>
      <Col>1. Patient Details</Col>
      <Col>2. Clinical Details</Col>
      <Col>3. Date and Time of specimen</Col>
      <Col>4. High Risk</Col>
    </Row>
    <hr></hr>
    <Row>
      <Col>5. Full Blood Count</Col>
      <Col>6. ESR</Col>
      <Col>7. Paul Bunnell Test</Col>
      <Col>8. Reticulocytes</Col>
    </Row>
    <hr></hr>
    <Row>
      <Col>9. Clotting Tests</Col>
      <Col>10. Sickle Test</Col>
      <Col>11. Hb Electrophoresis</Col>
      <Col>12. Red Cell Folate</Col>
    </Row>
    <hr></hr>
    <Row>
      <Col>13. Serum Vitamin B12 and Ferritin</Col>
      <Col>14. RF, DNA, ANA, ENA</Col>
    </Row>
    <hr></hr>
  </div>



</div>



)

export default Blood;