import React from 'react';
// import Grid from 'react-css-grid';
import './navbar.css';
const navbar = () => (

  <div className="container-fluid">
   <div className="row">
      <div className="col-sm-3" style={{backgroundColor:"clear"}}></div>
      <div className="col-sm-6 center" style={{backgroundColor:"clear"}}>
        <a href="#" className="button">Link Button</a>
      </div>
      <div className="col-sm-3" style={{backgroundColor:"clear"}}></div>
    </div>

    <div className="row">
      <div className="col-sm-4 right" style={{backgroundColor:"clear"}}>
            <a href="#" className="button">Link Button</a></div>
      <div className="col-sm-4" style={{backgroundColor:"clear"}}>
      
      <div className="col-sm-4 left" style={{backgroundColor:"clear"}}>
            <a href="#" className="button">Link Button</a></div>
      </div>
      </div>



      <div className="row">
        <div className="col-sm-3 right" style={{backgroundColor:"clear"}}>
         <a href="#" className="button">Link Button</a></div>
        <div className="col-sm-3" style={{backgroundColor:"clear"}}></div>
        <div className="col-sm-3 center" style={{backgroundColor:"clear"}}>
         </div>
         <div className="col-sm-3 left" style={{backgroundColor:"clear"}}>
         <a href="#" className="button">Link Button</a></div>
         </div>


      <div className="row">
        <div className="col-sm-2 right" style={{backgroundColor:"clear"}}>
           <a href="#" className="button">Link Button</a></div>
          <div className="col-sm-2" style={{backgroundColor:"clear"}}></div>
          <div className="col-sm-2 center" style={{backgroundColor:"clear"}}>
           </div>
          <div className="col-sm-2 left" style={{backgroundColor:"clear"}}>
          </div>
           <div className="col-sm-2 center" style={{backgroundColor:"clear"}}>
           </div>
           <div className="col-sm-2 left" style={{backgroundColor:"clear"}}>
           <a href="#" className="button">Link Button</a></div>

           </div>

           <h1>Hello World!</h1>
    <p>Working on a circular NavBar.</p>
   
  </div>
);

  

export default navbar;