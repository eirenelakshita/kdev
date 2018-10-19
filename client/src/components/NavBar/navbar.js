import React from 'react';
// import Grid from 'react-css-grid';
import './navbar.css';
const navbar = () => (

  <div className="container-fluid">
   <div className="row">
      <div className="col-sm-3" style={{backgroundColor:"clear"}}></div>
      <div className="col-sm-6 center" style={{backgroundColor:"clear"}}>
        <a href="#" className="button">Primary Care</a>
      </div>
      <div className="col-sm-3" style={{backgroundColor:"clear"}}></div>
    </div>

    <div className="row">
      <div className="col-sm-4 right" style={{backgroundColor:"clear"}}>
            <a href="#" className="button">Dentist</a></div>
      <div className="col-sm-4 center" style={{backgroundColor:"clear"}}>
      </div>
      
      <div className="col-sm-4 left" style={{backgroundColor:"clear"}}>
            <a href="#" className="button">Optometry</a></div>
    </div>
      



      <div className="row">
          <div className="col-sm-3 right" style={{backgroundColor:"clear"}}>
            <a href="#" className="button">Male/Female</a></div>
          <div className="col-sm-3" style={{backgroundColor:"clear"}}></div>
          <div className="col-sm-3 center" style={{backgroundColor:"clear"}}>
          </div>
          <div className="col-sm-3 left" style={{backgroundColor:"clear"}}>
            <a href="#" className="button">Dermatologist</a></div>
      </div>
        


      <div className="row">
        <div className="col-sm-2 right" style={{backgroundColor:"clear"}}>
           <a href="#" className="button">Pharmacy</a></div>
          <div className="col-sm-2" style={{backgroundColor:"clear"}}></div>
          <div className="col-sm-2 center" style={{backgroundColor:"clear"}}>
          </div>
          <div className="col-sm-2 left" style={{backgroundColor:"clear"}}>
          </div>
           <div className="col-sm-2 center" style={{backgroundColor:"clear"}}>
           </div>
           <div className="col-sm-2 left" style={{backgroundColor:"clear"}}>
           <a href="#" className="button">Cardiologist</a></div>

           </div>

           <h1>⚕️   My Patient Portal   ⚕️</h1>
    <p>Navigate Further From This Page</p>
   
  </div>
);

  

export default navbar;