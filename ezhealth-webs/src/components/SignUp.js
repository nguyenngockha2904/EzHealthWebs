import React from "react";
import "../pages/MyAccount/MyAccount.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const SignUp = () => {
  const onBlurInput = (input, label) => {
    let lbl = document.getElementById(label);
    let inp = document.getElementById(input);
    if (inp.value == "") {
      lbl.style.transform = "translateY(0)";
      lbl.style.color = "#d8dbe3";
    }
  };
  const onFocusInput = (input, label) => {
    let lbl = document.getElementById(label);
    let inp = document.getElementById(input);
    lbl.style.transform = "translateY(-25px)";
    lbl.style.color = "#8c8888";
  };
  return (
    <div className="container__account">
      <h1>Sign up</h1>
      <div className="account-group-input">
        <input
          type="text"
          className="account_inputContent"
          id="username"
          onBlur={() => onBlurInput("username", "lbluser")}
          onFocus={() => {
            onFocusInput("username", "lbluser");
          }}
          required
        />
        <label
          htmlFor="username"
          id="lbluser"
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
          id="email"
          onBlur={() => onBlurInput("email", "lblemail")}
          onFocus={() => {
            onFocusInput("email", "lblemail");
          }}
          required
        />
        <label
          htmlFor="email"
          id="lblemail"
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
          id="sigup_password"
          onBlur={() => onBlurInput("sigup_password", "lbl_sigup_password")}
          onFocus={() => {
            onFocusInput("sigup_password", "lbl_sigup_password");
          }}
          required
        />
        <label
          htmlFor="sigup_password"
          id="lbl_sigup_password"
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
          id="Repassword"
          onBlur={() => onBlurInput("Repassword", "lbl_Repassword")}
          onFocus={() => {
            onFocusInput("Repassword", "lbl_Repassword");
          }}
          required
        />
        <label
          htmlFor="Repassword"
          id="lbl_Repassword"
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
