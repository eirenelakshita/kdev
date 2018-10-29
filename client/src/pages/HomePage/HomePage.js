import React from 'react';
import { Container } from 'reactstrap';
import Footer from '../../components/Footer';
import './HomePage.css';
import Login from '../Login';


class HomePage extends React.Component {

  render(){
    return(
     <div>
        <Container>
          <div className="row row-offcanvas row-offcanvas-right" >
            <div className="col-xs-10 col-sm-7">
                <p></p>
                <div className="jumbotron" style={{ backgroundColor: "rgba(40,40,40,0.8)" }}>
                    <h1 style={{ color: "white" }}>Your Medical Records</h1>
                    <p style={{ color: "white" }}>The Privacy Rule gives you, with few exceptions, the right to inspect, review, 
                       and receive a copy of your medical records and billing 
                       records that are held by health plans and health care providers covered by the Privacy Rule.</p>
                </div>
            </div>

            <div className="col-xs-8 col-sm-5 sidebar-offcanvas" id="sidebar">
              <div className="list-group">
                  <p></p>
                  <Login />
              </div>
            </div>
          </div>

        </Container>
        
        <Footer />
     </div>
    )
  }
};

export default HomePage;
