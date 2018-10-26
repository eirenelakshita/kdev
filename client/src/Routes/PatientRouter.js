import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Messages from "../pages/Messages";
import Visits from "../pages/Visits";
import ProfileInfo from "../pages/Forms";
import Home from "../pages/Home";
import NavBar from "../components/NavBar";
import Rx from "../pages/Rx";
import LabResult from '../pages/LabResult';

class PatientRouter extends Component {
  render() {
    return(
      <div>
        <NavBar />
        <div>
        <Switch>
          <Route path="/patients/messages" component={Messages} />
          <Route path="/patients/profile-info" component={ProfileInfo} />
          <Route path="/patients/lab-result" component={LabResult} />
          <Route path="/patients/visits" component={Visits} />
          <Route path="/patients/rx" component={Rx} />
          <Route component={Home} />
        </Switch>

        </div>
       
      </div>
    )
  }
}

export default PatientRouter;