import React, { PureComponent } from "react";
import { Container, Row, Col } from "../components/Grid";
import { Input, Select, FormBtn, TextArea } from "../components/Form";

class HealthDataForm extends PureComponent {

  state = {

  }

  handleInputChange = event => {
    let { name, value } = event.target;
    this.setState({ [name]: value }, console.log(this.state));
  }

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-5">
            <Input 
              name="firstName"
              value={this.firstName}
              onChange={this.handleInputChange}
              label="First Name"
            />
          </Col>
          <Col size="md-2">
            <Input 
              name="middleInitial"
              value={this.middleInitial}
              onChange={this.handleInputChange}
              label="Middle Initial"
            />
          </Col>
          <Col size="md-5">
            <Input 
              name="lastName"
              value={this.lastName}
              onChange={this.handleInputChange}
              label="Last Name"
            />
          </Col>
        </Row>
        <Row>
          <Col size="md-4">
            <Select 
              name="birthMonth"
              value={this.birthMonth}
              onChange={this.handleInputChange}
              label="Birth Month"
              options={[ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]}
            />
          </Col>
          <Col size="md-4">
            <Input 
              name="birthDay"
              value={this.birthDay}
              onChange={this.handleInputChange}
              label="Birth Date"
            />
          </Col>
          <Col size="md-4">
            <Input 
              name="birthYear"
              value={this.birthYear}
              onChange={this.handleInputChange}
              label="Birth Year"
            />
          </Col>
        </Row>

      </Container>
    )
  }
}

export default HealthDataForm;