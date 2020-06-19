import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import mapReduxStateToProps from "../Modules/MapReduxState";

class MovieItem extends Component {
  render() {
    return (
      <div>
        <img src={this.props.movie.poster} alt={this.props.movie.title} />
      </div>
    );
  }
}

export default MovieItem;
