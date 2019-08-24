import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { Redirect } from "react-router";

function extractLoginInfoAndCallParent(onLogin) {
    const userEmail = document.getElementById("userEmail").value;
    const userPassword = document.getElementById("userPassword").value;

    console.log(userEmail, userPassword);
    onLogin(userEmail, userPassword);
}

function Login(props) {

    let widget = "";

    if (props.user === undefined) {
        widget = (
            <div>
                <input id="userEmail" name="email" placeholder="Email"></input>
                <input id="userPassword" name="password" type="password" placeholder="Password"></input>
                <button
                    onClick={() => extractLoginInfoAndCallParent(props.onLogin)}>Login</button>
            </div>
        )
    } else {
        return <Redirect to="/" />
    }

    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <h1>Login</h1>
                        {widget}
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;
