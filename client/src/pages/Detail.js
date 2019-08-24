import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import surveyAPI from "../utils/surveyAPI";
import { Input, FormBtn } from "../components/Form";
import { List, ListItem } from "../components/List";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../style.css";

library.add(faCheck)

class Detail extends Component {
  state = {
    listing: {},

    newSubmit: {
      answer1: "",
      answer2: "",
      answer3: "",
      answer4: ""
    },

    survey: {
      property: "",
      answers: [
        ""
      ]
    }
  };
  // When this component mounts, grab the listing with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getListing(this.props.match.params.id)
      .then(res => this.setState({ listing: res.data }))
      .catch(err => console.log(err));
  }

  loadSurvey = () => {
    console.log(this.props.match.params.id); //console log property id
    surveyAPI.getSurvey(this.props.match.params.id)
      .then(res => {
        console.log(res.data);
        this.setState({ survey: res.data, property: "", answers: [""] })
        console.log(this.state.survey);
      })
      .catch(err => console.log(err));
  };

  handleInputChange = (event, element) => {
    const { newSubmit } = this.state;
    newSubmit[element] = event.target.value;

    console.log(newSubmit);
    this.setState({
      newSubmit
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.newSubmit && this.state.newSubmit) {
      console.log(this.state.newSubmit);
      var answerArr = Object.keys(this.state.newSubmit).map(key => this.state.newSubmit[key]);
      var propertyId = this.props.match.params.id

      surveyAPI.saveSurvey({
        // "user": 1,
        // "property": "testprop",
        "property": propertyId,
        "answers": answerArr
      })
        .then(() => this.setState({
          newSubmit: {
            answer1: "",
            answer2: "",
            answer3: "",
            answer4: ""
          }
        }))
        .then(res => this.loadSurvey())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.listing.address} • {this.state.listing.county}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <article style={{ padding: 20 }}>
              <h1>Property Details</h1>
              <p> <span role="img" aria-label="Ruler">📏</span>
                {this.state.listing.sqft} SQFT <span role="img" aria-label="Money">💰</span>{this.state.listing.price}
              </p>
              <p>
                {this.state.listing.description}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Link to="/" style={{ padding: 20 }}>← Back</Link>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                Tour Checklist
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="lg-12">
            <form>
              {Object.keys(this.state.newSubmit).map((key, idx) => {
                return (
                  <div>
                    <h5 style={{ margin: 25, fontFamily: "Helvetica" }}><FontAwesomeIcon key={idx} icon="check" color={"green"} />{`${idx + 1} Checklist Item`} </h5>
                    <Input
                      key={idx}
                      id={`a${idx}`}
                      value={this.state.newSubmit[key]}
                      name={`q${idx}`}
                      placeholder={`Enter Answer Q${idx + 1}`}
                      onChange={e => this.handleInputChange(e, key)}
                    />
                  </div>
                )
              })}

              <FormBtn
                disabled={!(this.state.newSubmit && this.state.newSubmit)}
                onClick={this.handleFormSubmit}
              >
                ADD SURVEY
              </FormBtn>
            </form>
          </Col>

        </Row>
        <Row>
          <Col size="lg-12">
            {this.state.survey.length ? (
              <List>
                {this.state.survey.map(survey => (
                  <ListItem key={survey._id}>
                    <h1>
                      {survey.property}
                    </h1>
                    <h1>
                      {survey.answers[0]}
                    </h1>
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3 style={{ margin: 25 }}>No Results to Display</h3>
              )}
          </Col>

        </Row>
      </Container>
    );
  }
}

export default Detail;
