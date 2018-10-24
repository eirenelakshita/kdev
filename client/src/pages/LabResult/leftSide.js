import React from 'react';
import {BrowserRouter as Router , Route , Link } from 'react-router-dom';

const leftSide = props =>(
  <div>
    <ul>
    <li><Link
      to="/patients/Lab_Result/BloodTest"
      onClick={() => props.handlePageChange("Blooddd")}
      className={
        props.currentPage === "Blood" ? "nav-link active" : "nav-link"
      }>Blood test</Link></li>

    <li><Link 
      to="/patients/Lab_Result/DrugTest" 
      onClick={() => props.handlePageChange("Druggg")}
      className={
        props.currentPage === "Drug" ? "nav-link active" : "nav-link"
      }>Drug test</Link></li>

    <li><Link 
      to="/patients/Lab_Result/XRayTest" 
      onClick={() => props.handlePageChange("XRayyy")}
      className={
        props.currentPage === "XRay" ? "nav-link active" : "nav-link"
      }>X-Ray test</Link></li>
    </ul>
  </div>
)



export default leftSide;

