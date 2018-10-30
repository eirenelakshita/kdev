import React, { PureComponent } from "react";
import { Container, Row, Col } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import FormAPI from "../../utils/FormAPI";
import AuthAPI from "../../utils/AuthAPI";
import FormFields from "./identifyinginfo.json";
import "./IdentifyingInfoForm.css";

class IdentifyingInfoForm extends PureComponent {

  state = {
    formData: {},
    currentUserID: null,
    existingProfile: false,
    profileID: null
  }

  componentDidMount() {
    AuthAPI.getCurrentUser()
      .then(res => {
        console.log(res.data._id);
        let currentUserID = res.data._id

        this.setState({ currentUserID: currentUserID })
        FormAPI.getCurrentData(currentUserID) //currently just the user data
          .then(response => {
            console.log("getcurrentprofile", response)
            if (response.data) {
              this.setState({ existingProfile: true, profileID: response.data._id })
            }
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    let { name, value } = event.target;
    this.setState({ formData: { ...this.state.formData, [name]: value.trim() }});
  }

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.existingProfile) {
      console.log("update call")
      FormAPI.updateForm(this.state.profileID, this.state.formData)
        .then(res => {
          document.getElementById("identifyingInfoForm").reset();
          this.setState({ formData: "" })
        })
        .catch(err => console.log(err))
    }
    else {
      console.log("create call")
      FormAPI.submitForm(this.state)
        .then(res => {
          console.log("come back from res")
          document.getElementById("identifyingInfoForm").reset();
          this.setState({ formData: "", existingProfile: true })
        })
        .catch(err => console.log(err))
    }
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