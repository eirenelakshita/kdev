import React, { Component } from 'react';
import HealthDataForm from "./pages/HealthDataForm";
import Messages from "./pages/Messasges";
import API from "./utils/API";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>Hello World.</header>
        <HealthDataForm />
        <Messages handleFormSubmit={API.postMessage} />
      </div>
    );
  }
}

export default App;

