import React, { Component } from "react";
import { connect } from "react-redux";
import { Card } from "@material-ui/core";

class MovieItem extends Component {
  render() {
    return (
      <div>
        <Card>
          <img
            src={this.props.movie.poster}
            alt={this.props.movie.title}
            onClick={() => {
              this.props.getDetails(this.props.movie);
              this.props.getGenres(this.props.movie.id);
            }}
          />
        </Card>
      </div>
    );
  }
}

export default connect()(MovieItem);
