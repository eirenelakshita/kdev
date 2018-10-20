import React, { PureComponent } from "react";
import { Container, Row, Col } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import FormFields from "./patientinfo.json";

class PatientDataForm extends PureComponent {

  state = {
    formData: {}
  }

  handleInputChange = event => {
    let { name, value } = event.target;
    this.setState({ formData: { ...this.state.formData, [name]: value }});
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.formData);
  }

  render() {
    return (
      <Container>
        {FormFields.rows.map((row, index) => (
            <Row key={"row-" + index}>
              {row.cols.map((col, i) => (
                <Col size={col.size} key={"col-" + i}>
                  <Input
                    label={col.fieldName}
                    name={col.fieldName.split(" ").map((word, index) => word = (index === 0) ? word.toLowerCase() : word ).join("")}
                    onChange={this.handleInputChange}
                  />
                </Col>
              ))}
            </Row>
        ))}
        <FormBtn onClick={this.handleSubmit}>Submit</FormBtn>
      </Container>
    )
  }
}

export default PatientDataForm;