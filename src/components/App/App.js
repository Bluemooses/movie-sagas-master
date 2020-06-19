import React, { Component } from "react";
import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Router className="app">
          <Route exact path="/" component={Home}></Route>
        </Router>
      </div>
    );
  }
}

export default App;
