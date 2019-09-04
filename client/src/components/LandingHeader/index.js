import React from "react";
import "./style.css";

function LandingHeader({ children }) {
    return (
        <div
            style={{ height: 600, clear: "both", paddingTop: 250, textAlign: "center" }}
            className="landingheader"
        >
            {children}
        </div>
    );
}

export default LandingHeader;
