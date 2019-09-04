import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Jumbotron } from "../components/Jumbotron";
import API from "../utils/API";
import surveyAPI from "../utils/surveyAPI";
import { Input, FormBtn } from "../components/Form";
import { List, ListItem } from "../components/List";
import DetailHeader from "../components/DetailHeader";
import SurveyWrap from "../components/SurveyWrap";
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
      answer4: "",
      answer5: "",
      answer6: "",
      answer7: "",
      answer8: "",
      answer9: "",
      answer10: "",
      answer11: "",
      answer12: "",
      answer13: "",
      answer14: "",
      answer15: ""
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
    window.scrollTo(0, 0);
    API.getListing(this.props.match.params.id)
      .then(res => this.setState({ listing: res.data }))
      .catch(err => console.log(err));
    this.loadSurvey();

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
            answer4: "",
            answer5: "",
            answer6: "",
            answer7: "",
            answer8: "",
            answer9: "",
            answer10: "",
            answer11: "",
            answer12: "",
            answer13: "",
            answer14: "",
            answer15: ""
          }
        }))
        .then(res => this.loadSurvey())
        .catch(err => console.log(err));
    }
  };

  render() {
    const questionText = [
      "Turn On Faucets: Make sure there is clear water, good pressure & no banging pipes",
      "Water Damage: Check floors, walls & ceiling for any evidence of water damage, mold, mildew, stains or cracks",
      "Inspect Windows: Open & close the windows (Sometimes windows get painted shut, are not made to open, or are just hard to open)",
      "Step In Closets: Open the closets, doors & cabinets in all rooms to make sure you will have ample storage space & that there are no lurking critters",
      "Charge Your Phone: Plug something small, like a phone charger, into each outlet to insure they are all in working order",
      "Turn On Stove: Check the appliances in the kitchen to make sure they are up to your standards",
      "Make Noise: Be aware of the noise level in the unit",
      "Check Locks & Doors: Check the locks on the doors to make sure they are in good working order",
      "Turn On Lights: Check to make sure there is ample lighting in the hallways, on the property and in the parking areas",
      "Inspect Laundry: Is the laundry unit in the apartment, or is there a separate facility you have to access? Ask where the laundry facilities are to make sure it’s conveniently & safely located",
      "Walk Neighborhood: Visit the property during both the day and night to get a complete picture of the neighborhood",
      "Amenities",
      "PROS",
      "CONS",
      "Additional Comments"
    ]
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <DetailHeader>
              <h1><span style={{ backgroundColor: "black", color: "white" }}>
                {this.state.listing.address} • {this.state.listing.county}
              </span></h1>
            </DetailHeader>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <article style={{ padding: 20 }}>
              <h1>Property Details</h1>
              <p> <span role="img" aria-label="Ruler">📏</span>
                {this.state.listing.sqft} SQFT <span role="img" aria-label="Money">💰</span>{this.state.listing.price} | 1 BR | 1 BA
              </p>
              <p>
                {this.state.listing.description}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="lg-12">
            {/* <Link to="/" style={{ padding: 20 }}>← Back to Listings</Link> */}
          </Col>
        </Row>
        <Row>
          <Col size="lg-12">
            <SurveyWrap>
              <h1 style={{ margin: 25, textAlign: "center" }}>Tour Survey for {this.state.listing.address}</h1>
              {this.state.survey.length ? (
                <List>
                  {this.state.survey.map(survey => {
                    return (
                      <ListItem key={survey._id}>
                        <h5><span role="img" style={{ marginRight: 10 }} aria-label="Faucet">🚰</span>{survey.answers[0]}</h5>
                        <hr />
                        <h5><span role="img" style={{ marginRight: 10 }} aria-label="Water">🚿</span>{survey.answers[1]}</h5>
                        <hr />
                        <h5><span role="img" style={{ marginRight: 10 }} aria-label="Window">🖼</span>{survey.answers[2]}</h5>
                        <hr />
                        <h5><span role="img" style={{ marginRight: 10 }} aria-label="Closet">🧹</span>{survey.answers[3]}</h5>
                        <hr />
                        <h5><span role="img" style={{ marginRight: 10 }} aria-label="Phone">📱</span>{survey.answers[4]}</h5>
                        <hr />
                        <h5><span role="img" style={{ marginRight: 10 }} aria-label="Stove">⏲</span>{survey.answers[5]}</h5>
                        <hr />
                        <h5><span role="img" style={{ marginRight: 10 }} aria-label="Noise">🔊</span>{survey.answers[6]}</h5>
                        <hr />
                        <h5><span role="img" style={{ marginRight: 10 }} aria-label="Locks">🔑</span>{survey.answers[7]}</h5>
                        <hr />
                        <h5><span role="img" style={{ marginRight: 10 }} aria-label="Lights">💡</span>{survey.answers[8]}</h5>
                        <hr />
                        <h5><span role="img" style={{ marginRight: 10 }} aria-label="Laundry">🧼</span>{survey.answers[9]}</h5>
                        <hr />
                        <h5><span role="img" style={{ marginRight: 10 }} aria-label="Neighborhood">📍</span>{survey.answers[10]}</h5>
                        <hr />
                        <h5><span role="img" style={{ marginRight: 10 }} aria-label="Amenity">🏆</span>{survey.answers[11]}</h5>
                        <hr />
                        <h5><span role="img" style={{ marginRight: 10 }} aria-label="Pro">👍</span>{survey.answers[12]}</h5>
                        <hr />
                        <h5><span role="img" style={{ marginRight: 10 }} aria-label="Con">👎</span>{survey.answers[13]}</h5>
                        <hr />
                        <h5><span role="img" style={{ marginRight: 10 }} aria-label="Additional">🔎</span>{survey.answers[14]}</h5>
                      </ListItem>
                    );
                  })}
                </List>
              ) : (
                  <h3 style={{ margin: 25, textAlign: "center" }}>No Results to Display: Take the Survey</h3>
                )}
            </SurveyWrap>
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
                    <h6 style={{ margin: 25, fontFamily: "Helvetica" }}><FontAwesomeIcon key={idx} icon="check" color={"green"} />{`${idx + 1}. ${questionText[idx]}`} </h6>

                    <Input
                      key={idx}
                      id={`a${idx}`}
                      value={this.state.newSubmit[key]}
                      name={`q${idx}`}
                      placeholder={`Comment for Item ${idx + 1}`}
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
      </Container>
    );
  }
}

export default Detail;
