import React from "react";
import './Container.css';

export const Container = ({ fluid, id, children, classes }) => (
  <div className={`container${fluid ? "-fluid" : ""}`.concat(" ").concat(classes) } id={id}>
    {children}
  </div>
);
