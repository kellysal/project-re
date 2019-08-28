import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import "../style.css";
import Jumbotron from "../components/Jumbotron";

class Landing extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="lg-12">
                        <Jumbotron>
                            <h4 style={{ padding: 20, textAlign: "center" }}>
                                Welcome message
                        </h4>
                            <p style={{ padding: 20 }}>Additional text</p>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-6">
                        <Link to="/register" style={{ margin: 50 }} className="btn btn-primary registerbtn">Register</Link>
                    </Col>
                    <Col size="md-6">
                        <Link to="/login" style={{ margin: 50 }} className="btn btn-primary loginbtn">Login</Link>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Landing;