import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./home.css";
class Home extends Component {
  state = {};
  render() {
    return (
      <div
        className="container center"
        style={{ background: "#888888", height: "100%" }}
      >
        <h1>this is page Home</h1>
      </div>
    );
  }
}

export default Home;
