import React, { Component } from "react";
import { Link } from "react-router-dom";
import { LandingJumbotron } from "../Jumbotron";
import { Col, Row, Container } from "../Grid";
import "./style.css";
import API from "../../utils/API";

class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: ""
        };
    }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };
    onSubmit = e => {
        e.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        };
        console.log(newUser);

        API.registerUser({
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        })
            .catch(err => console.log(err));
    };
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="lg-12">
                        <LandingJumbotron />
                    </Col>
                </Row>
                <Row>
                    <Col size="lg-12">
                        <h1 style={{ padding: 20, textAlign: "center", fontFamily: "Helvetica" }}>
                            WELCOME TO REALTOUR
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col size="lg-12">
                        <h4 style={{ padding: 20, textAlign: "center", fontFamily: "Helvetica" }}>Register Below</h4>
                        <form onSubmit={this.onSubmit} style={{ padding: 10, display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <div className="input-field">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.name}
                                    id="name"
                                    type="text"
                                    placeholder="Name"
                                />
                            </div>
                            <div className="input-field">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.email}
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="input-field">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.password}
                                    id="password"
                                    type="password"
                                    placeholder="Password"
                                />
                            </div>
                            <div>
                                <button type="submit" className="btn">Sign up</button>
                            </div>
                        </form>
                        <p style={{ marginRight: 20, textAlign: "right", fontFamily: "Helvetica" }}>Already have an account?</p>
                        <Link to="/login" className="btn" style={{ marginTop: 0, float: "right" }}>Log in</Link>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Register;