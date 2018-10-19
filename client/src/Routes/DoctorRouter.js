import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";

const DoctorTest = () => (
  <div>Hello Doctor Portal!</div>
);

class DoctorRouter extends Component {
  render() {
    return (
      <div>
        {/* The navbar will go here. */}
        <Switch>
          <Route path="/doctors/test" component={DoctorTest} />
          <Route component={Home} />
        </Switch>
      </div>
    )
  }
}

export default DoctorRouter;