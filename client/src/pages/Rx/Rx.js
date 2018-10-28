import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Rx extends Component {
  // Setting our component's initial state
  state = {
    rx: "",
    DoctorID: "",
    Doctor_Speciality: "",
    rxInfo: "",
    Time: ""
  };

  // When the component mounts, load all rx and save them to this.state.rx
  componentDidMount() {
    this.loadRx();
  }

  // Loads all rx  and sets them to this.state.rx
  loadRx = () => {
    API.getRx()
      .then(res =>
        this.setState({ rx: res.data, Doctor_Speciality: "", Prescription: "", Diagnosis: "" })
      )
      .catch(err => console.log(err));
  };

  chopDate = Date => {
    return Date.substring(0, 10)
  }

  // Deletes a rx from the database with a given id, then reloads rx from the db
  deleteRx = id => {
    API.deleteVisit(id)
      .then(res => this.loadRx())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-2 sm-2"></Col>
          <Col size="md-8 sm-8">
            <Jumbotron>
              <h1>Rx</h1>
            </Jumbotron>
            {this.state.rx.length ? (
              <List>
                {this.state.rx.map(rx => {
                  let choppedDate = this.chopDate(rx.Time);
                  return (
                    <ListItem key={rx._id}>
                      <Row>
                        <Col size="3">
                          <h5><strong>
                            {choppedDate}
                          </strong></h5>
                        </Col>
                        <Col size="9">
                          <h5><strong>
                            {rx.DoctorID} ({rx.Doctor_Speciality})
                          </strong></h5>
                        </Col>
                      </Row>
                      <Row>
                        <Col size="3" />
                        <Col size="9">
                          <p>Notes: {rx.rxInfo}</p>
                          
                        </Col>
                      </Row>
                      <DeleteBtn onClick={() => this.deleteRx(rx._id)} />
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

export default Rx;

  

   



   
        


  
// );

  

// export default rx;