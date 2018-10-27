import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import PatientRouter from "./Routes/PatientRouter.js";
import DoctorRouter from "./Routes/DoctorRouter.js";
import PageNotFound from './pages/PageNotFound';
import HomePage from './pages/HomePage';
import Home from './pages/Home';
import PrivateRoute from "./components/Auth";


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/patients" render={props => <PatientRouter />} />
            <Route path="/doctors" render={props => <DoctorRouter />} />
            <PrivateRoute path="/test" component={Home} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;