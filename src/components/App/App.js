import React, { Component } from "react";
import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import swal from "sweetalert";

import Home from "../Home/Home";
import MovieDetails from "../MovieDetails/MovieDetails";
import Edit from "../Edit/Edit";
class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Router className="app">
          <Route exact path="/" component={Home}></Route>
          <Route path="/details/:id" component={MovieDetails} />
          <Route path="/edit/:id" component={Edit} />
        </Router>
      </div>
    );
  }
}

export default App;
