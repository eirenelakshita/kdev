import React, { Component } from 'react';
import NavBar from './components/NavBar';
class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar></NavBar>
        <header>Hello World.</header>
      </div>
    );
  }
}

export default App;
