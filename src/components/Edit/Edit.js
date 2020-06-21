import React, { Component } from "react";
import { connect } from "react-redux";
import mapReduxStateToProps from "../Modules/MapReduxState";
import Swal from "sweetalert2";
import { Card, Button } from "@material-ui/core";
import { Textarea, List, ListItem, ListIcon } from "@chakra-ui/core";

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
      confirmButtonText: "Yes, change it!",
      cancelButtonText: "No, keep it",
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          "Success.  I guess you know better than the critics.",
          "Your description was altered.",
          "success",
          this.props.dispatch({
            type: "EDIT_MOVIES",
            payload: {
              id: this.props.reduxState.details.id,
              title: this.state.title,
              description: this.state.description,
            },
          }),
          this.props.history.push("/")
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your gif is safe :)", "error");
      }
    });
  }; //end delete

  render() {
    return (
      <div>
        <Card>
          <section className="title">
            {this.props.reduxState.details.title}
            <br />
            <Textarea
              placeholder="Change Title"
              onChange={this.handleTitleIn}
            ></Textarea>
          </section>
          <img
            height={125}
            width={100}
            src={this.props.reduxState.details.poster}
            alt={this.props.reduxState.details.title}
          />
          <section>
            <List className="genres">
              {this.props.reduxState.genres.map((genre, index) => {
                return (
                  <ListItem key={genre.name}>
                    <ListIcon icon="check-circle" color="green.500" />
                    {genre.name}
                  </ListItem>
                );
              })}
            </List>
          </section>
          <section className="description">
            {this.props.reduxState.details.description}
            <br />
            <Textarea
              placeholder="Change description"
              onChange={this.handleDescriptionIn}
            ></Textarea>
          </section>
          <section className="buttons">
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={this.handleSaveButton}
            >
              Save Changes
            </Button>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              onClick={this.goHomeButton}
            >
              Go Home
            </Button>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              onClick={this.backButton}
            >
              Go Back
            </Button>
          </section>
        </Card>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(Edit);
