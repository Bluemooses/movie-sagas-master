import React, { Component } from "react";
import { connect } from "react-redux";
import mapReduxStateToProps from "../Modules/MapReduxState";
class MovieDetails extends Component {
  componentDidMount() {
    console.log("Hello world");
  }

  render() {
    return (
      <div>
        <p>
          <p>{this.props.reduxState.details.description}</p>
        </p>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(MovieDetails);
