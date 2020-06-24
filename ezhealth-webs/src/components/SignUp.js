import React, { Component } from "react";
import "../pages/MyAccount/MyAccount.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
class SignUp extends Component {
  avatars = [
    "",
    "https://firebasestorage.googleapis.com/v0/b/ez-health.appspot.com/o/default%2Favatars%2Favatar_1.png?alt=media&token=d44ddf63-1c78-4656-b109-b235804743f1",
    "https://firebasestorage.googleapis.com/v0/b/ez-health.appspot.com/o/default%2Favatars%2Favatar_2.png?alt=media&token=59945fb2-d7ea-48b6-b0ff-d1cbaa502cee",
    "https://firebasestorage.googleapis.com/v0/b/ez-health.appspot.com/o/default%2Favatars%2Favatar_3.png?alt=media&token=73140d7a-0ed7-477c-8478-73d8bf83e001",
    "https://firebasestorage.googleapis.com/v0/b/ez-health.appspot.com/o/default%2Favatars%2Favatar_4.png?alt=media&token=6b31914e-a792-4525-b9cf-ef7138faa0f8",
    "https://firebasestorage.googleapis.com/v0/b/ez-health.appspot.com/o/default%2Favatars%2Favatar_5.png?alt=media&token=739c9a61-8f51-44d3-95e1-3d5f278c5d31",
    "https://firebasestorage.googleapis.com/v0/b/ez-health.appspot.com/o/default%2Favatars%2Favatar_6.png?alt=media&token=7dcc4d19-0a2b-4033-b069-993e8354d1fd",
    "https://firebasestorage.googleapis.com/v0/b/ez-health.appspot.com/o/default%2Favatars%2Favatar_7.png?alt=media&token=9720f9bb-14a3-43be-9f82-c8e0a241367c",
    "https://firebasestorage.googleapis.com/v0/b/ez-health.appspot.com/o/default%2Favatars%2Favatar_8.png?alt=media&token=785f568f-6285-4d58-8392-872ad47a1c0d",
    "https://firebasestorage.googleapis.com/v0/b/ez-health.appspot.com/o/default%2Favatars%2Favatar_9.png?alt=media&token=522515c9-40e4-4533-bd14-2277b060c932",
    "https://firebasestorage.googleapis.com/v0/b/ez-health.appspot.com/o/default%2Favatars%2Favatar_10.png?alt=media&token=b5023ac5-b6de-4bf6-ae06-4016f0afaf00",
    "https://firebasestorage.googleapis.com/v0/b/ez-health.appspot.com/o/default%2Favatars%2Favatar_11.png?alt=media&token=cb8d8563-3109-4228-bd34-3f5b8059f6de",
    "https://firebasestorage.googleapis.com/v0/b/ez-health.appspot.com/o/default%2Favatars%2Favatar_12.png?alt=media&token=7798190a-6cf8-4ef7-b2f6-6869386b8cbd",
  ];

  rand = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

  state = {
    name: "",
    email: "",
    password: "",
    rePassword: "",
    photoURL: this.avatars[this.rand],
    newPhotoURL: "",
  };

  onBlurInput = (input, label) => {
    let lbl = document.getElementById(label);
    let inp = document.getElementById(input);
    if (inp.value == "") {
      lbl.style.transform = "translateY(0)";
      lbl.style.color = "#d8dbe3";
    }
  };
  onFocusInput = (input, label) => {
    let lbl = document.getElementById(label);
    let inp = document.getElementById(input);
    lbl.style.transform = "translateY(-25px)";
    lbl.style.color = "#8c8888";
  };
  state = {};
  render() {
    return (
      <div className="container__account">
        <h1>Sign up</h1>
        <div className="account-group-input">
          <input
            type="text"
            className="account_inputContent"
            id="username"
            onBlur={() => this.onBlurInput("username", "lbluser")}
            onFocus={() => {
              this.onFocusInput("username", "lbluser");
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
            onBlur={() => this.onBlurInput("email", "lblemail")}
            onFocus={() => {
              this.onFocusInput("email", "lblemail");
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
            onBlur={() =>
              this.onBlurInput("sigup_password", "lbl_sigup_password")
            }
            onFocus={() => {
              this.onFocusInput("sigup_password", "lbl_sigup_password");
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
            onBlur={() => this.onBlurInput("Repassword", "lbl_Repassword")}
            onFocus={() => {
              this.onFocusInput("Repassword", "lbl_Repassword");
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
  }
}
export default SignUp;
