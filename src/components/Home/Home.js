import React, { Component } from "react";
import { connect } from "react-redux";
import mapReduxStateToProps from "../Modules/MapReduxState";

import MovieItem from "../MovieItem/MovieItem";
class Home extends Component {
  componentDidMount() {
    this.getMovies();
  }

  getMovies() {
    this.props.dispatch({ type: "GET_MOVIES" });
    console.log(this.props.reduxState);
  }

  render() {
    return (
      <div>
        <p>
          {this.props.reduxState.movies.map((movie) => {
            return <MovieItem movie={movie} />;
          })}
        </p>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(Home);
