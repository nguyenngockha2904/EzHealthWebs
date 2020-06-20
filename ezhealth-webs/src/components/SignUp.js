import React from "react";
import "../pages/MyAccount/MyAccount.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div className="container__account">
      <h1>Sign up</h1>
      <div className="account-group-input">
        <input
          type="text"
          className="account_inputContent"
          id="username"
          required
        />
        <label
          htmlFor="username"
          className="account_lblContent account_lblContent_padding account_lblContent_left"
        >
          Name
        </label>
      </div>
      <br />
      <div className="account-group-input">
        <input
          type="text"
          className="account_inputContent"
          id="username"
          required
        />
        <label
          htmlFor="username"
          className="account_lblContent account_lblContent_padding 
            account_lblContent_left
            "
        >
          Email
        </label>
      </div>
      <br />
      <div className="account-group-input">
        <input
          type="password"
          className="account_inputContent"
          id="password"
          required
        />
        <label
          htmlFor="password"
          className="account_lblContent account_lblContent_left"
        >
          Password
        </label>
      </div>
      <br />
      <div className="account-group-input">
        <input
          type="password"
          className="account_inputContent"
          id="password"
          required
        />
        <label
          htmlFor="password"
          className="account_lblContent account_lblContent_retype"
          required
        >
          Retype password
        </label>
      </div>
      <div className="account-group-input">
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="account-btn btn-sign-Up"
        >
          Sign Up
        </motion.button>
      </div>
      <div className="account-group-input account__SignUp_btnLogin">
        <Link to="/account">Log in</Link>
      </div>
    </div>
  );
};
export default SignUp;
