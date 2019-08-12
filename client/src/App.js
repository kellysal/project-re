import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Listings from "./pages/Listings";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Listings} />
          <Route exact path="/listings" component={Listings} />
          <Route exact path="/listings/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
