import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Visits extends Component {
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
          <Col size="md-2 sm-2"></Col>
          <Col size="md-8 sm-8">
            <Jumbotron>
              <h1>Previous Visits</h1>
            </Jumbotron>
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
                      <DeleteBtn onClick={() => this.deleteVisit(visit._id)} />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
          <Col size="md-2 sm-2"></Col>
        </Row>
      </Container>
    );
  }
}

export default Visits;
