import React from "react";
import Messages from "./pages/Messasges";
import API from "./utils/API";
// import Nav from "./components/Nav";

const App = () => (
  <div>
    <Messages handleFormSubmit={API.postMessage} />
  </div>
);

export default App;

