import React, { PureComponent } from "react";
import { Container, Row, Col } from "../../components/Grid";
import { Input, Select, FormBtn } from "../../components/Form";
import FormAPI from "../../utils/FormAPI";
import FormFields from "./identifyinginfo.json";
import "./IdentifyingInfoForm.css";

class IdentifyingInfoForm extends PureComponent {

  state = {
    formData: {
      
    }
  }

  handleInputChange = event => {
    let { name, value } = event.target;
    // name = name.replace(/\//g, "");
    this.setState({ formData: { ...this.state.formData, [name]: value.trim() }});
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    FormAPI.submitForm(this.state.formData)
      .then(res => {
        console.log(res);
        document.getElementById("identifyingInfoForm").reset();
        this.setState({ formData: { email: "dummy", password: "forNow" } })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <Container id="color">
        <h1>{FormFields.header.title}</h1>
        <h4>{FormFields.header.subtext}</h4>
        <br />
        <form id="identifyingInfoForm">
          {FormFields.sections.map((section, sindex) => (
            <div key={`section${sindex}`}>
              <h1 className="form-section-header">{section.sectionheader}</h1>
              <hr className="section-header-underline" />
              <div className="form-section" >
                {section.rows.map((row, rindex) => (
                  <Row key={`section${sindex}-row${rindex}`}>
                    {row.cols.map((col, cindex) => (
                      <Col size={col.size} key={`section${sindex}-row${rindex}-col${cindex}`}>
                        <Input 
                          label={col.fieldName}
                          name={col.fieldName.split(/\s|\//).map((word, index) => word = (index === 0) ? word.toLowerCase() : word ).join("")}
                          onChange={this.handleInputChange}
                          required={col.required ? true : false}
                        />
                      </Col>
                    ))}
                  </Row>
                ))}
              </div>
            </div>
          ))}
          <FormBtn onClick={this.handleSubmit} type="submit">Submit</FormBtn>
        </form> 
      </Container>
    )
  }
}

export default IdentifyingInfoForm;