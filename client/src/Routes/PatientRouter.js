import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Messages from "../pages/Messages";
import ProfileInfo from "../pages/Forms";
import Home from "../pages/Home";
import NavBar from "../components/NavBar";

class PatientRouter extends Component {
  render() {
    return(
      <div>
        <NavBar></NavBar>
        <Switch>
          <Route path="/patients/messages" component={Messages} />
          <Route path="/patients/profile-info" component={ProfileInfo} />
          <Route component={Home} />
        </Switch>
      </div>
    )
  }
}

export default PatientRouter;