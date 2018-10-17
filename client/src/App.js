import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PatientDataForm from "./pages/Forms";
import Messages from "./pages/Messasges";
import Home from "./pages/Home";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/messages" component={Messages} />
      <Route path="/user-profile-info" component={PatientDataForm} />
    </Switch>
  </Router>
)

export default App;

