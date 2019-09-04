import React from "react";
import "./style.css";

function DetailHeader({ children }) {
    return (
        <div
            style={{ height: 400, clear: "both", paddingTop: 200, textAlign: "center" }}
            className="detailheader"
        >
            {children}
        </div>
    );
}

export default DetailHeader;
