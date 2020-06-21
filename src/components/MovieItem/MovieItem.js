import React, { Component } from "react";
import { connect } from "react-redux";

class MovieItem extends Component {
  render() {
    return (
      <div>
        <img
          src={this.props.movie.poster}
          alt={this.props.movie.title}
          onClick={() => {
            this.props.getDetails(this.props.movie);
            this.props.getGenres(this.props.movie.id);
          }}
        />
      </div>
    );
  }
}

export default connect()(MovieItem);
