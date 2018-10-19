import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import {Container, Row ,Col} from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";
// import {FormBtn , Input , TextArea } from "../components/Form";
import "./Login.css";


export default class Login extends Component{

  state = {
    username: "",
    password: ""
  };

  // handle any changes to the input fields
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;

    console.log("name:" , name);


    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  };


  handleFormSubmit = event => {
    event.preventDefault();
    alert(`Username: ${this.state.username}\nPassword: ${this.state.password}`);
    this.setState({ username: "", password: "" });
  };



  render(){
    return(
      <div id="test" style={{ backgroundImage: "url('https://www.stvincentsconsulting.com/img/img-480310816.jpg')" }}>

      

<div className="container">

<div className="d-flex justify-content-center h-100">
<div className="card">
    <div className="card-header">
      <p></p>
      {/* <h3>{this.props.whoiam ? "Doctor Sign in" : "Patient Sign in"}</h3> */}
      <h3>Sign in</h3>
      <div className="d-flex justify-content-end social_icon">
        <span><i className="fab fa-facebook-square"></i></span>
        <span><i className="fab fa-google-plus-square"></i></span>
        <span><i className="fab fa-twitter-square"></i></span>
      </div>
    </div>

   
  <div className="card-body">
    <form>
      <div className="input-group form-group">
        <div className="input-group-prepend">
          <span className="input-group-text"><i className ="fas fa-user"></i></span>
        </div>
        <input 
          type="text" 
          className="form-control" 
          placeholder="Username"  
          name="username"
          value={this.state.username}
          onChange={this.handleInputChange} />

      </div>
      <div className ="input-group form-group">
        <div className ="input-group-prepend">
          <span className="input-group-text"><i className ="fas fa-key"></i></span>
        </div>
        <input 
          type="password" 
          name="password" 
          className="form-control" 
          placeholder="password" 
          value={this.state.password}
          onChange={this.handleInputChange}/>

      </div>
      <div className  ="row align-items-center remember">
        <input type="checkbox" />Remember Me
      </div>
      <div className  ="form-group">
          <button 
            type="button" 
            className="btn btn-warning btn-block btn-sm"
            name="DoctorLogin"
            onClick={this.handleFormSubmit}>I am Doctor</button>

          <button 
            type="submit" 
            className="btn btn-success btn-block btn-sm"
            name="PatientLogin"
            onClick={this.handleFormSubmit}>I am Patient</button>

      </div>
    </form>
    <div className  ="d-flex justify-content-center links">
      Don't have an account?<Link to="/creatAccount">Sign Up</Link>
    </div>
  </div>


</div>
</div>
</div>

      
      
      
      </div>


      
    );
  }



};

