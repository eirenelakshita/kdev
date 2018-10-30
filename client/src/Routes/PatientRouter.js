import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Messages from "../pages/Messages";
import Visits from "../pages/Visits";
import ProfileInfo from "../pages/Forms";
import Home from "../pages/Home";
import PatientNavBar from "../components/NavBar/PatientNavBar";
import Rx from "../pages/Rx";
import LabResult from '../pages/LabResult';

class PatientRouter extends Component {
  render() {
    return(
      <div>
        <PatientNavBar />
        <Switch>
          <Route path="/patients/messages" component={Messages} />
          <Route path="/patients/profile-info" component={ProfileInfo} />
          <Route path="/patients/lab-result" component={LabResult} />
          <Route path="/patients/visits" component={Visits} />
          <Route path="/patients/rx" component={Rx} />
          <Route render={props => <Home {...props} which="Patient" />} />
        </Switch>       
      </div>
    )
  }
}

export default PatientRouter;