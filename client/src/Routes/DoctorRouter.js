import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import NavBar from "../components/NavBar";
import DoctorVisits from "../pages/doctorVisits";

const DoctorTest = () => (
  <div>Hello Doctor Portal!</div>
);

class DoctorRouter extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path="/doctors/test" component={DoctorTest} />
          <Route path="/doctors/visits" component={DoctorVisits} />
          <Route component={Home} />
        </Switch>
      </div>
    )
  }
}

export default DoctorRouter;