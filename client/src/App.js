import React from 'react';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
// import './App.css';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';

const App = () => (

  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={Login} />
      <Route component={PageNotFound}/>
    </Switch>
  </Router>



);


export default App;


