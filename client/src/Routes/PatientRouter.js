import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Messages from "../pages/Messages";
import Visits from "../pages/Visits";
import ProfileInfo from "../pages/Forms";
import Home from "../pages/Home";

class PatientRouter extends Component {
  render() {
    return(
      <div>
        {/* The navbar will go here. */}
        <Switch>
          <Route path="/patients/messages" component={Messages} />
          <Route path="/patients/profile-info" component={ProfileInfo} />
          <Route path="/patients/visits" component={Visits} />
          <Route component={Home} />
        </Switch>
      </div>
    )
  }
}

export default PatientRouter;