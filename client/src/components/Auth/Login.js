import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { withRouter } from "react-router-dom";
import { Col, Row, Container } from "../Grid";
import { LandingJumbotron } from "../Jumbotron";
import "./style.css";
import API from "../../utils/API";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
        };
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        // this.props.history.push("/listings");

        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        console.log(userData);

        API.authUser(
            this.state.email,
            this.state.password
        )
            .then(res => {
                this.setState({ email: res.data, password: res.data });
                console.log(res.data.userid);
                this.props.history.push("/listings/user/" + res.data.userid);
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
                        <h4 style={{ padding: 20, textAlign: "center", fontFamily: "Helvetica" }}>Login Below</h4>
                        <form onSubmit={this.onSubmit} style={{ padding: 10, display: "flex", justifyContent: "center", alignItems: "center" }}>
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
                                <button type="submit" className="btn">Login</button>
                            </div>
                        </form>
                        <p style={{ marginRight: 20, textAlign: "right", fontFamily: "Helvetica" }}>Don't have an account?</p>
                        <Link to="/register" className="btn" style={{ marginTop: 0, float: "right" }}>Register</Link>
                    </Col>
                </Row>
            </Container >
        );
    }
}
export default Login;