import React from "react";
import "./style.css";

function Header({ children }) {
    return (
        <div
            style={{ height: 550, clear: "both", paddingTop: 250, textAlign: "center" }}
            className="header"
        >
            {children}
        </div>
    );
}

export default Header;
