import React, { Component } from "react";
import { connect } from "react-redux";
import mapReduxStateToProps from "../Modules/MapReduxState";

class MovieDetails extends Component {
  componentDidMount() {
    console.log("Hello world");
  }

  backButton = () => {
      this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <section className="title">
          {this.props.reduxState.details.title}
        </section>
        <section>
          <ul>
            {this.props.reduxState.genres.map((genre) => {
              return <li key={genre.name}>{genre.name}</li>;
            })}
          </ul>
        </section>
        <section className="description">
          {this.props.reduxState.details.description}
        </section>
        <section>
          <button onClick={this.backButton}>Go Home</button>
          <button onClick={this.hitEditPage}>Edit</button>
        </section>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(MovieDetails);
