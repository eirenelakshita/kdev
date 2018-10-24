import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
import {Row ,Col} from "../../components/Grid";
import './LabResult.css';
import LeftSide from './leftSide';
import Blood from './Blood';
import Drug from './Drug';
import XRay from './XRay';




export default class LabResult extends Component{

  state = {
    currentPage:""
  }

  handlePageChange = page =>{
    this.setState({
      currentPage: page 
    })
  }

  renderPage = () => {
    if(this.state.currentPage === "Blooddd"){
      return <Blood />;
    }else if(this.state.currentPage === "Druggg"){
      return <Drug />;
    }else if(this.state.currentPage === "XRayyy"){
      return <XRay />;
    }
  }

  render(){
    return(
      <div className="container" id="style">
       <Row>
         <Col size="xs-3"> 
         <LeftSide
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
         />
         </Col>
         <Col size="xs-9">{this.state.currentPage ? this.renderPage():"Welcome to MY Lab Result Page"}</Col>
       </Row>
      </div>
    )
  }
}