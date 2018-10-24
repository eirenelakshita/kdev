import React from 'react';
import {Container, Row ,Col} from "reactstrap";


const XRay = props =>(

  <Container>
    <h3>X-Ray Testing Result:</h3>
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
      <Col>9. Hb Electrophoresis</Col>
      <Col>10. Red Cell Folate</Col>
      <Col>11. RF, DNA, ANA, ENA</Col>
    </Row>
    <hr></hr>
    <Row>
      <Col></Col>
      <Col>
      12. Image:
      <img src="https://www.verywellhealth.com/thmb/OqgFlM2ZWzgTRAxCX_iBpwkgkm0=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/iStock_22401848_MEDIUM-58262cb63df78c6f6adebb27.jpg" 
          alt="chest X-Ray" height="200" width="200"></img>
      </Col>
      <Col></Col>
    </Row>
    <hr></hr>
    
  </Container>

)

export default XRay;