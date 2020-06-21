import React, { Component } from "react";
import { connect } from "react-redux";
import mapReduxStateToProps from "../Modules/MapReduxState";

class Edit extends Component {
  //the dataObject used to update movie description and title
  state = {
    title: "",
    description: "",
  };

  //handlers for inputs
  handleTitleIn = (event) => {
    console.log(this.state);
    this.setState({
      ...this.state,
      title: event.target.value,
    });
  };

  handleDescriptionIn = (event) => {
    console.log(this.state);
    this.setState({
      ...this.state,
      description: event.target.value,
    });
  }; //end event handlers

  removeGenre = () => {
    console.log(this.props.reduxState);
  };

  backButton = () => {
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <section className="title">
          {this.props.reduxState.details.title}
          <br />
          <input
            placeholder="Change Title"
            onChange={this.handleTitleIn}
          ></input>
        </section>
        <img
          height={125}
          width={100}
          src={this.props.reduxState.details.poster}
          alt={this.props.reduxState.details.title}
        />
        <section>
          <ul>
            {this.props.reduxState.genres.map((genre, index) => {
              return <li key={genre.name}>{genre.name}</li>;
            })}
          </ul>
        </section>
        <section className="description">
          {this.props.reduxState.details.description}
          <br />
          <input
            placeholder="Change description"
            onChange={this.handleDescriptionIn}
          ></input>
        </section>
        <section className="buttons">
          <button onClick={this.backButton}>Go Home</button>
          <button onClick={this.handleSaveButton}>Save Changes</button>
        </section>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(Edit);
