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

                    </Col>
                </Row>
                <Row>
                    <Col size="md-6">
                        <p style={{ padding: 20, textAlign: "left", fontFamily: "Helvetica" }}>Don't have an account?</p>
                        <h4 style={{ padding: 20, textAlign: "left", fontFamily: "Helvetica" }}>Register Below</h4>
                        <Link to="/register" className="btn">Register</Link>
                    </Col>
                    <Col size="md-6">
                        <h4 style={{ padding: 20, textAlign: "left", fontFamily: "Helvetica" }}>Login Below</h4>
                        <form onSubmit={this.onSubmit} style={{ padding: 30 }}>
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
                                <button type="submit" className="btn" style={{ marginTop: 20 }}>Login</button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container >
        );
    }
}
export default Login;