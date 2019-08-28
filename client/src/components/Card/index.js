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
                    <li>
                        <strong>Address:</strong> {props.address}
                    </li>
                    <li>
                        <strong>County:</strong> {props.county}
                    </li>
                </ul>
            </div>
            <button type="button" className="btn btn-secondary">
                <Link to={"/listings/" + props.id}>Click to view</Link>
            </button>

        </div>
    );
}

export default ListingCard;
