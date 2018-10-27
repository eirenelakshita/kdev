import React, { Component } from "react";
import API from "../../utils/AuthAPI";

class Home extends Component {

  handleClick = () => {
    API.tryme()
      .then(res => console.log(res))
  }

  render() {
    return (
      <div>
        <h2>Hi.</h2>
        <button onClick={this.handleClick}>Click</button>
      </div>
    )
  }
}

export default Home;