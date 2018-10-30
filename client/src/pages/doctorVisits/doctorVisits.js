import React, { PureComponent } from "react";
import FormAPI from "../../utils/FormAPI";
import FormFields from "./doctorVisitsForm.json";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, Select, TextArea, FormBtn } from "../../components/Form";

class DoctorVisits extends PureComponent {
  // Setting our component's initial state
  state = {
    visits: [],
    DoctorID: "",
    Doctor_Speciality: "",
    Prescription: "",
    Diagnosis: "",
    Data: "",
    Time: ""
  };

  // When the component mounts, load all visits and save them to this.state.visits
  componentDidMount() {
    this.loadVisits();
  }

  // Loads all visits  and sets them to this.state.visits
  loadVisits = () => {
    API.getVisits()
      .then(res =>
        this.setState({ visits: res.data, Doctor_Speciality: "", Prescription: "", Diagnosis: "" })
      )
      .catch(err => console.log(err));
  };

  chopDate = Date => {
    return Date.substring(0, 10)
  }

  // Handles updating component state when the user types into the input field
  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // When the form is submitted, use the API.saveBook method to save the visit data
  // Then reload visits from the database
  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.Doctor_Speciality && this.state.Prescription) {
  //     API.saveBook({
  //       Doctor_Speciality: this.state.Doctor_Speciality,
  //       Prescription: this.state.Prescription,
  //       Diagnosis: this.state.Diagnosis
  //     })
  //       .then(res => this.loadVisits())
  //       .catch(err => console.log(err));
  //   }
  // };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
              <h1>New Visit</h1>
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
          </Col>
          <Col size="md-6 sm-12">
              <h1>Previous Visits</h1>
            {this.state.visits.length ? (
              <List>
                {this.state.visits.map(visit => {
                  let choppedDate = this.chopDate(visit.Time);
                  return (
                    <ListItem key={visit._id}>
                      {/* <a href={"/visits/" + visit._id}>Visit</a> */}
                      <Row>
                        <Col size="3">
                          <h5><strong>
                            {choppedDate}
                          </strong></h5>
                        </Col>
                        <Col size="9">
                          <h5><strong>
                            {visit.DoctorID} ({visit.Doctor_Speciality})
                          </strong></h5>
                        </Col>
                      </Row>
                      <Row>
                        <Col size="3"></Col>
                        <Col size="9">
                          <p>Notes: {visit.Data}</p>
                          <p>Prescription: {visit.Prescription}</p>
                        </Col>
                      </Row>
                    </ListItem>
                  );
                })}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default DoctorVisits;
