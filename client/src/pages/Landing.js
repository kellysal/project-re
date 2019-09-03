import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import "../style.css";
import { LandingJumbotron } from "../components/Jumbotron";

class Landing extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="lg-12">
                        <LandingJumbotron />
                        <h1 style={{ padding: 20, textAlign: "center", fontFamily: "Helvetica" }}>
                            WELCOME TO REALTOUR
                        </h1>
                        <p style={{ padding: 20, marginLeft: 50, marginRight: 50, textAlign: "center", fontFamily: "Helvetica" }}>Property viewing isn’t only for getting a sneak peek into what life could be like living in that space… it’s about making sure that space is secure, livable and in all-around good condition. Don’t sign the lease simply because of the curb appeal or square footage – you need to diligently inspect your prospective home so you don’t end up with a raw deal.
</p>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-6">
                        <Link to="/register" style={{ margin: 50, fontFamily: "Helvetica" }} className="btn btn-primary registerbtn">Register</Link>
                    </Col>
                    <Col size="md-6">
                        <Link to="/login" style={{ margin: 50, fontFamily: "Helvetica" }} className="btn btn-primary loginbtn">Login</Link>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Landing;