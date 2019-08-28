import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Listings from "./pages/Listings";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Login from "../src/components/Auth/Login";
import Register from "../src/components/Auth/Register";
import Landing from "./pages/Landing";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
// import API from "./utils/API";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/listings/:id" component={Detail} />
            <Route exact path="/listings/user/:id" component={Listings} />
            {/* <Route exact path="/surveys/:id" component={Detail} /> */}
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }

}

export default App;
