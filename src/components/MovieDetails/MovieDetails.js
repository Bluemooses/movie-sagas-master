import React, { Component } from "react";
import { connect } from "react-redux";
import mapReduxStateToProps from "../Modules/MapReduxState";
import { Button, Card } from "@material-ui/core";
import { Textarea, List, ListItem, ListIcon } from "@chakra-ui/core";
class MovieDetails extends Component {
  componentDidMount() {
    console.log("Hello world");
  }

  backButton = () => {
    this.props.history.push("/");
  };

  hitEditPage = () => {
    this.props.history.push(`/edit/{id}`);
  };

  render() {
    return (
      <div>
        <Card>
          <section className="title">
            {this.props.reduxState.details.title}
          </section>
          <img
            height={125}
            width={100}
            src={this.props.reduxState.details.poster}
            alt={this.props.reduxState.details.title}
          />
          <section>
            <List>
              {this.props.reduxState.genres.map((genre) => {
                return (
                  <ListItem key={genre.name}>
                    {" "}
                    <ListIcon icon="check-circle" color="green.500" />
                    {genre.name}
                  </ListItem>
                );
              })}
            </List>
          </section>
          <section className="description">
            {this.props.reduxState.details.description}
          </section>
          <section>
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              onClick={this.backButton}
            >
              Go Home
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="small"
              onClick={this.hitEditPage}
            >
              Edit
            </Button>
          </section>
        </Card>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(MovieDetails);
