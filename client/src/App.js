import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PatientRouter from "./Routes/PatientRouter.js";
import DoctorRouter from "./Routes/DoctorRouter.js";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import PageNotFound from './pages/PageNotFound';
import HomePage from './pages/HomePage';
import Login from './pages/Login';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            {/* The following route will be for the landing / login page once Kevin is ready to add it. */}
            <Route exact path="/" component={HomePage} />
            <Route path="/patients" render={props => <PatientRouter />} />
            <Route path="/doctors" render={props => <DoctorRouter />} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;