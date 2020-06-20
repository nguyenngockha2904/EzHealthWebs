import React, { Component } from "react";
import "./MyAccount.css";
import { motion } from "framer-motion";
import Login from "../../components/LogIn";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
class MyAccount extends Component {
  state = {};
  render() {
    return (
      <div>
        <Login />
      </div>
    );
  }
}

export default MyAccount;
