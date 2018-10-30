import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {Container} from "../../components/Grid/Container";
import "./CreateAccount.css";
import API from '../../utils/AuthAPI';


export default class Login extends Component{

  state = {
    username: "",
    password: "",
    accountCreated: false
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.patientCreateAccount({ username: this.state.username, password: this.state.password})
      .then(res => {
        if (res.status === 200) {
          this.setState({ accountCreated: true })
        }
      })
      .catch(err => console.log(err)); //this is where we will tell user there has been an error
  };

  render(){
    if (this.state.accountCreated) {
      return (
        <Redirect to={{
          pathname: '/patients',
          state: { from: this.props.location }
          }} 
        /> 
      )
    }
    return(
      <div className="homepage-body">
        <Container id="container">
          <div className="d-flex justify-content-center h-100">
            <div className="card">
              <div className="card-header">
                <p></p>
                <h3>Create Account</h3>
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
                      onChange={this.handleInputChange} 
                    />
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
                      onChange={this.handleInputChange}
                    />
                  </div>

                  <div className  ="form-group">
                      <button 
                        type="button" 
                        className="btn btn-warning btn-block btn-sm"
                        name="DoctorLogin"
                        onClick={this.handleFormSubmit}>I am Doctor
                      </button>

                      <button 
                        type="submit" 
                        className="btn btn-success btn-block btn-sm"
                        name="PatientLogin"
                        onClick={this.handleFormSubmit}>I am Patient
                      </button>

                  </div>
                </form>

                <div className  ="d-flex justify-content-center" id="links">
                  Already have an account? &nbsp; <Link to="/">Sign In</Link>
                </div>
              </div>
            </div>
          </div>
        </Container>      
      </div>      
    );
  }
};