import React, { Component } from "react";
import { connect } from "react-redux";

class Edit extends Component {
  render() {
    return <div>Hello from EDIT page</div>;
  }
}

export default connect()(Edit);
