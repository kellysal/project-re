import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Nav(props) {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        RealTour
      </a>
      <Link to='/login' style={{ color: "white", fontFamily: "Helvetica" }} className="ml-auto">Home</Link>
    </nav>
  );
}

export default Nav;
