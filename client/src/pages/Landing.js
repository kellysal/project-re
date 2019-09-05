import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import "../style.css";
import { LandingJumbotron } from "../components/Jumbotron";
import LandingHeader from "../components/LandingHeader";

class Landing extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <LandingHeader>
                        <h1 style={{ fontFamily: "Helvetica", letterSpacing: 7, color: "white", fontSize: "4rem" }}>
                            TRACK YOUR TOURS
              </h1>
                        <h1 style={{ fontFamily: "Helvetica", letterSpacing: 7, color: "white", fontSize: "2rem" }}>
                            WITH REALTOUR
              </h1>
                    </LandingHeader>
                </Row>
                <Row>
                    <Col size="lg-12">
                        <LandingJumbotron />
                        <h1 style={{ padding: 20, textAlign: "center", fontFamily: "Helvetica" }}>
                            WELCOME TO REALTOUR
                        </h1>
                        <p style={{ padding: 20, marginLeft: 50, marginRight: 50, textAlign: "center", fontFamily: "Helvetica" }}>
                            Hunting for a home? RealTour is your ultimate inspection guide! Streamline the process and stay organized to make a decision you won't regret!
                            Featuring property details, personal surveys and comparison features to assist you in finding the home of your dreams! RealTour finds you a real deal!
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