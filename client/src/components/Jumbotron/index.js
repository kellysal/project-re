import React from "react";
import "./style.css";

export function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export function LandingJumbotron({ children }) {
  return (
    <div
      style={{ height: 350, clear: "both", textAlign: "center" }}
      className="landingjumbotron"
    >
      {children}
    </div>
  );
}
