import React from "react";
import "../pages/MyAccount/MyAccount.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="container__account">
      <h1>Login</h1>
      <div className="account-group-input">
        <input
          type="text"
          className="account_inputContent"
          id="username"
          required
        />
        <label
          htmlFor="username"
          className="account_lblContent account_lblContent_padding"
        >
          Your email
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
        <label htmlFor="password" className="account_lblContent">
          Your password
        </label>
      </div>
      <div className="account-group-input">
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ stype: "spring", stiffness: 300 }}
          className="account-btn btn-sign-Up"
        >
          Sign in
        </motion.button>
      </div>
      <div className="account-group-input">
        <Link to="/account/signup">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="account-btn btn-sign-In"
          >
            Sign Up
          </motion.button>
        </Link>
      </div>
      <div>
        <p>Login with social networks</p>
      </div>
      <div className="account__social-networks">
        <a className="Button_icon">
          <motion.svg
            whileHover={{ scale: 1.3 }}
            class="icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 25 25"
          >
            <g fill="none" fill-rule="evenodd">
              <path
                fill="#FFC107"
                d="M24.756 10.051H23.75V10H12.5v5h7.065c-1.032 2.91-3.8 5-7.065 5A7.499 7.499 0 0 1 5 12.5C5 8.357 8.357 5 12.5 5c1.912 0 3.652.72 4.976 1.9l3.535-3.536A12.44 12.44 0 0 0 12.5 0C5.596 0 0 5.596 0 12.5S5.596 25 12.5 25 25 19.404 25 12.5c0-.837-.085-1.655-.244-2.449z"
              />
              <path
                fill="#FF3D00"
                d="M1.44 6.682l4.11 3.013A7.495 7.495 0 0 1 12.5 5c1.912 0 3.652.72 4.976 1.9l3.535-3.536A12.44 12.44 0 0 0 12.5 0C7.698 0 3.535 2.71 1.44 6.682z"
              />
              <path
                fill="#4CAF50"
                d="M12.5 25c3.228 0 6.162-1.235 8.381-3.245l-3.87-3.274A7.449 7.449 0 0 1 12.5 20c-3.252 0-6.01-2.073-7.05-4.966l-4.078 3.14C3.44 22.222 7.642 25 12.5 25z"
              />
              <path
                fill="#1976D2"
                d="M24.756 10.051H23.75V10H12.5v5h7.065a7.534 7.534 0 0 1-2.556 3.481h.003l3.87 3.274C20.607 22.002 25 18.75 25 12.5c0-.837-.085-1.655-.244-2.449z"
              />
            </g>
          </motion.svg>
        </a>
        <a className="Button_icon">
          <motion.svg
            whileHover={{ scale: 1.3 }}
            class="icon"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
          >
            <g fill="none" fill-rule="evenodd">
              <circle cx="12.5" cy="12.5" r="12.5" fill="#3F51B5" />
              <path
                fill="#FFF"
                d="M15.855 12.5H13.75V20h-3.125v-7.5H8.75V10h1.875V8.494C10.626 6.3 11.537 5 14.12 5h2.13v2.5h-1.43c-1.005 0-1.07.375-1.07 1.077V10h2.5l-.395 2.5z"
              />
            </g>
          </motion.svg>
        </a>
      </div>
    </div>
  );
};
export default Login;
