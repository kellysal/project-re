import React from "react";
import "./style.css";

function LandingHeader({ children }) {
    return (
        <div
            style={{ height: 700, clear: "both", paddingTop: 250, textAlign: "center" }}
            className="landingheader"
        >
            {children}
        </div>
    );
}

export default LandingHeader;
