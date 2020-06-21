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

  getDetails = (movie) => {
      console.log("click");
      console.log(movie);
      this.props.dispatch({type: 'GET_THIS_MOVIE', payload: movie});
      this.props.history.push(`/details/{id}`);
  }

  getGenres = (movie) => {
    this.props.dispatch({type: 'GET_GENRES', payload: movie});
    console.log(movie);
  }

  render() {
    return (
      <div>
        <p>
          {this.props.reduxState.movies.map((movie) => {
            return <MovieItem
            key={movie.id}
            movie={movie}
            getDetails={this.getDetails}
            getGenres={this.getGenres} />;
          })}
        </p>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(Home);
