import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Listings extends Component {
  state = {
    listings: [],
    address: "",
    county: "",
    sqft: 0,
    price: 0,
    description: ""
  };

  componentDidMount() {
    this.loadListings();
  }

  loadListings = () => {
    API.getListings()
      .then(res =>
        this.setState({ listings: res.data, address: "", county: "", sqft: "", price: "", description: "" })
      )
      .catch(err => console.log(err));
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
        description: this.state.description
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
            <Jumbotron>
              <h1>MY PROPERTY LIST</h1>
            </Jumbotron>
            {this.state.listings.length ? (
              <List>
                {this.state.listings.map(listing => (
                  <ListItem key={listing._id}>
                    <Link to={"/listings/" + listing._id}>
                      <strong>
                        {listing.address} • {listing.county}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteListing(listing._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
        </Row>
        <Row>
          <Col size="lg-12">
            <Jumbotron>
              <h1>ADD NEW LISTING</h1>
            </Jumbotron>
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
