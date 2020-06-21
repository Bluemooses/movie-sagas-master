import React, { Component } from "react";
import { connect } from "react-redux";
import mapReduxStateToProps from "../Modules/MapReduxState";
import Swal from "sweetalert2";
class Edit extends Component {
  //the dataObject used to update movie description and title
  state = {
    title: "",
    description: "",
  };

  //handlers for inputs
  handleTitleIn = (event) => {
    // console.log(this.state);
    this.setState({
      ...this.state,
      title: event.target.value,
    });
  };

  handleDescriptionIn = (event) => {
    // console.log(this.state);
    this.setState({
      ...this.state,
      description: event.target.value,
    });
  }; //end event handlers

  backButton = () => {
    this.props.history.push("/details/:id");
  };

  goHomeButton = () => {
    this.props.history.push("/");
  };

  //set the new payload with matching ID to insert new value into DB
  handleSaveButton = () => {
    console.log(this.state);
    console.log(this.props.reduxState.details.id);

    console.log("this will be a DELETE request");
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover the description or title!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it",
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          "Deleted!",
          "That gif was deleted.",
          "success",
          this.props.dispatch({
            type: "EDIT_MOVIES",
            payload: {
              id: this.props.reduxState.details.id,
              title: this.state.title,
              description: this.state.description,
            },
          }),
          this.props.dispatch({ type: "GET_THIS_MOVIE" })
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your gif is safe :)", "error");
      }
    });
  }; //end delete

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
          <button onClick={this.handleSaveButton}>Save Changes</button>
          <button onClick={this.goHomeButton}>Go Home</button>
          <button onClick={this.backButton}>Go Back</button>
        </section>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(Edit);
