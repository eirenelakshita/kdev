import React, { PureComponent } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import FormFields from "./doctorVisitsForm.json";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";

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

  // Deletes a visit from the database with a given id, then reloads visits from the db
  deleteVisit = id => {
    API.deleteVisit(id)
      .then(res => this.loadVisits())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container classes="yellow-back">
        <Row>
          <Col size="md-6">
            <form id="doctorVisitsForm">
              {FormFields.sections.map((section, sindex) => (
                <div key={`section${sindex}`}>
                  <h1 className="form-section-header" style={{textAlign: "center"}}>{section.sectionheader}</h1>
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
                      <DeleteBtn onClick={() => this.deleteVisit(visit._id)} />
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
