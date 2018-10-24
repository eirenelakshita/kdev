import React from 'react';
import { Link, Switch} from 'react-router-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Container , Row , Col , Button} from 'reactstrap';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import './HomePage.css';
import Login from '../Login';


class HomePage extends React.Component {

  state = {
    whoiam:"",
  };

  render(){
    return(
      <div style={{ backgroundColor: "white" }}>
      <Nav />
        <Container  >
          <div className="row row-offcanvas row-offcanvas-right" >
            <div className="col-xs-10 col-sm-7">
                <p></p>
                <div className="jumbotron jumbotronForHP">
                    <h1>Health Cares</h1>
                    <p>say something for those Images.</p>
                </div>
            </div>

            <div className="col-xs-8 col-sm-5 sidebar-offcanvas" id="sidebar">
              <div className="list-group">
                <p></p>
                    <Login whoiam={this.state.whoiam}/>
                    {/* <a href="/Login"> Login in as Doctor</a>
                    <a href="/Login"> Login in as Patient</a> */}
              </div>
            </div>
          </div>

          <div className="container-bar"></div>
          
          <br />
          
          <div className="row row-offcanvas row-offcanvas-right">
            <div className="col-xs-12 col-lg-12">
              <h2>
                Your Medical Records
              </h2>
              <p>
              The Privacy Rule gives you, with few exceptions, the right to inspect, review, 
              and receive a copy of your medical records and billing 
              records that are held by health plans and health care providers covered by the Privacy Rule.
              </p>
            </div>

            <div className="col-xs-6 col-lg-6">
                <h2>Our service One</h2>
              <p>say something here.</p>
              <p>
              <a className="btn btn-lg btn-primary" href="../../components/#navbar" role="button">See more</a>
              </p>
            </div>   

            <div className="col-xs-6 col-lg-6">
                <h2>Our Service two</h2>
                <p>say something here.</p>
                <p><a className="btn btn-lg btn-primary" href="../../components/#navbar" role="button">See more</a></p>
            </div>
          </div> 

          <hr />

      {/* <div>
        <h1 className="text-center">{this.props.title}</h1>

        <button name="doctor" 
                className = "whoiam" 
                onClick = {() => this.props.onclicked()} 
                value="doctor"><Link to="/doctorLogIn"></Link>
                I am Doctor
        </button>

        <button name="patient" 
                className = "whoiam" 
                onClick = {() => this.props.onclicked()} 
                value="patient"><Link to="/patientLogIn"></Link>
              I am Patient
        </button>
        
      </div> */}

        </Container>
        
        <Footer />
      </div>
    );
  }
};

export default HomePage;
