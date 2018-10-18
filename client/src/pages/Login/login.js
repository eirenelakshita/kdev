import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import {Container, Row ,Col} from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";
// import {FormBtn , Input , TextArea } from "../components/Form";
import "./Login.css";


export default class Login extends Component{

  render(){
    return(
      <div id="test" style={{ backgroundImage: "url('https://www.stvincentsconsulting.com/img/img-480310816.jpg')" }}>

      

<div className="container">

<div className="d-flex justify-content-center h-100">
<div className="card">
    <div className="card-header">
      <p></p>
      <h3>Doctor Sign In</h3>
      <div className="d-flex justify-content-end social_icon">
        <span><i className="fab fa-facebook-square"></i></span>
        <span><i className="fab fa-google-plus-square"></i></span>
        <span><i className="fab fa-twitter-square"></i></span>
      </div>
    </div>

   
  <div className  ="card-body">
    <form>
      <div className  ="input-group form-group">
        <div className  ="input-group-prepend">
          <span className ="input-group-text"><i className ="fas fa-user"></i></span>
        </div>
        <input type="text" className  ="form-control" placeholder="username" />
      </div>
      <div className  ="input-group form-group">
        <div className  ="input-group-prepend">
          <span className ="input-group-text"><i className ="fas fa-key"></i></span>
        </div>
        <input type="password" className  ="form-control" placeholder="password" />
      </div>
      <div className  ="row align-items-center remember">
        <input type="checkbox" />Remember Me
      </div>
      <div className  ="form-group">
        <input type="submit" value="Login" className  ="btn float-right login_btn" />
      </div>
    </form>
  </div>


  <div className  ="card-footer">
    <div className  ="d-flex justify-content-center links">
      Don't have an account?<Link to="#">Sign Up</Link>
    </div>
    <div className  ="d-flex justify-content-center">
      <Link to="#">Forgot your password?</Link>
    </div>
  </div>


</div>
</div>
</div>

      
      
      
      </div>


      
    );
  }



};

