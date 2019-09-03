import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import { Jumbotron } from "../components/Jumbotron";
import Header from "../components/Header";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import ListingCard from "../components/Card";
import Wrapper from "../components/Wrapper";
import Image from "../components/Image";
import "../style.css";

class Listings extends Component {
  state = {
    listings: [],
    address: "",
    county: "",
    sqft: 0,
    price: 0,
    description: "",
    image: "",

    user: {}
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    API.getListingByUser(this.props.match.params.id)
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err));
    this.loadListings();
  }

  loadListings = () => {
    const userid = this.props.match.params.id;
    console.log(this.props.match.params.id);

    if (userid !== undefined) {
      API.getListingByUser(userid)
        .then(res =>
          this.setState({ listings: res.data, address: "", county: "", sqft: "", price: "", description: "", image: "" })
        )
        .catch(err => console.log(err));
    }

  };

  deleteListing = id => {
    API.deleteListing(id)
      .then(res => this.loadListings())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.address && this.state.county) {
      API.saveListing({
        address: this.state.address,
        county: this.state.county,
        sqft: this.state.sqft,
        price: this.state.price,
        description: this.state.description,
        image: this.state.image,
        user: this.props.match.params.id
      })
        .then(res => this.loadListings())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="lg-12">
            <Header>
              <h1 style={{ fontFamily: "Helvetica", letterSpacing: 3, color: "white" }}>
                Welcome Text
              </h1>
              <h4 style={{ fontFamily: "Helvetica", letterSpacing: 3, color: "white" }}>Additional Placeholder Text</h4>
            </Header>
          </Col>
        </Row>
        <Row>
          <Col size="lg-12">
            <Jumbotron>
              <h1>MY PROPERTY LIST</h1>
              <p>Placeholder Text</p>
            </Jumbotron>
            {this.state.listings.length ? (
              <Wrapper>
                {this.state.listings.map(listing => (
                  <ListingCard
                    // removeFriend={this.removeFriend}
                    id={listing._id}
                    key={listing._id}
                    name={listing.address}
                    image={listing.image}
                    address={listing.address}
                    county={listing.county}
                    sqft={listing.sqft}
                    price={listing.price}
                    link={"/listings/" + listing._id}
                  />

                  // <ListItem key={listing._id}>
                  //   <Link to={"/listings/" + listing._id}>
                  //     <strong>
                  //       {listing.address} • {listing.county}
                  //     </strong>
                  //   </Link>
                  //   <DeleteBtn onClick={() => this.deleteListing(listing._id)} />
                  // </ListItem>
                ))}
              </Wrapper>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
            <Image />
          </Col>
          <Col size="md-6">

            <h1 style={{ fontFamily: "Helvetica", margin: 30, letterSpacing: 3 }} >ADD NEW LISTING</h1>

            <form>
              <Input
                value={this.state.address}
                onChange={this.handleInputChange}
                name="address"
                placeholder="Enter Address"
              />
              <Input
                value={this.state.county}
                onChange={this.handleInputChange}
                name="county"
                placeholder="Enter County"
              />
              <Input
                value={this.state.sqft}
                onChange={this.handleInputChange}
                name="sqft"
                placeholder="Enter SQFT"
              />
              <Input
                value={this.state.price}
                onChange={this.handleInputChange}
                name="price"
                placeholder="Enter Price"
              />
              <TextArea
                value={this.state.description}
                onChange={this.handleInputChange}
                name="description"
                placeholder="Enter Description"
                rows="3"
              />
              < Input
                value={this.state.image}
                onChange={this.handleInputChange}
                name="image"
                placeholder="Enter Image"
              />
              <FormBtn
                disabled={!(this.state.county && this.state.address)}
                onClick={this.handleFormSubmit}
              >
                ADD LISTING
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Listings;
