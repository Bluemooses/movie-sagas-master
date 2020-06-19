import React, { Component } from "react";
import { connect } from "react-redux";
import mapReduxStateToProps from '../Modules/MapReduxState';
class Home extends Component {
  render() {
    return <div></div>;
  }
}


export default connect(mapReduxStateToProps)(Home);

