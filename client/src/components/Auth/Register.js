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
                    <Col size="md-6">
                        <h4 style={{ padding: 20, textAlign: "left", fontFamily: "Helvetica" }}>Register Below</h4>
                        <p style={{ padding: 20, textAlign: "left", fontFamily: "Helvetica" }}>Already have an account?</p><Link to="/login" className="btn">Log in</Link>
                    </Col>
                    <Col size="md-6">
                        <form onSubmit={this.onSubmit} style={{ padding: 30 }}>
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
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Register;