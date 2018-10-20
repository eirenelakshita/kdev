import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Messages from "../pages/Messages";
import ProfileInfo from "../pages/Forms";
import Home from "../pages/Home";
import Navbar from '../components/NavBar';
import LabResult from '../pages/LabResult'

class PatientRouter extends Component {
  render() {
    return(
      <div>
        {/* The navbar will go here. */}
        <Navbar />
        <Switch>
          <Route path="/patients/messages" component={Messages} />
          <Route path="/patients/profile-info" component={ProfileInfo} />
          <Route path="/patients/Lab_Result" component={LabResult} />
          <Route component={Home} />
        </Switch>
      </div>
    )
  }
}

export default PatientRouter;