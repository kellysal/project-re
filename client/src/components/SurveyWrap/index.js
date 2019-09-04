import React from "react";
import "./style.css";

function SurveyWrap(props) {
    return <div className="surveywrap">{props.children}</div>;
}

export default SurveyWrap;