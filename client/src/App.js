import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Listings from "./pages/Listings";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import API from "./utils/API";

class App extends React.Component {

  state = {
    currentUser: undefined
  }

  handleLogin = (email, password) => {
    // console.log(API.authUser(email, password));
    console.log(email, password);
    API.authUser(email, password)
      .then(resp => this.setState({ currentUser: resp.data }))
      .catch(() => console.log("Wrong Password"));
  }

  handleLogout = () => {
    this.setState({ currentUser: undefined });
  }

  render() {
    return (
      <Router>
        <div>
          <Nav user={this.state.currentUser} />
          <Switch>
            <Route path="/login" component={
              () => <Login
                user={this.state.currentUser}
                onLogin={this.handleLogin}
                onLogout={this.handleLogout} />} />
            <Route exact path="/" component={() => <Listings
              user={this.state.currentUser}
            />} />
            <Route exact path="/listings" component={
              () => <Listings
                user={this.state.currentUser}
              />} />
            <Route exact path="/listings/:id" component={Detail} />
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }

}

export default App;
