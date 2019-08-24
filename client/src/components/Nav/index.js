import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Nav(props) {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Property Listing Project
      </a>
      <Link to='/login' >Login</Link>
    </nav>
  );
}

export default Nav;
