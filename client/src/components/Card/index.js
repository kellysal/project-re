import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function ListingCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.address} src={props.image} />
            </div>
            <div className="content">
                <ul>
                    {/* <li>
                        <strong>Address:</strong> {props.address}
                    </li> */}
                    <li>
                        <span role="img" aria-label="Location">📍</span> {props.address}, {props.county}
                    </li>
                    <li>
                        <span role="img" aria-label="Spec">💰</span> {props.sqft} sqft | $ {props.price}
                    </li>
                    <li>
                        <Link to={"/listings/" + props.id}> <span role="img" aria-label="Mag">🔎</span> Property Details</Link>
                    </li>
                </ul>
            </div>

        </div>
    );
}

export default ListingCard;
