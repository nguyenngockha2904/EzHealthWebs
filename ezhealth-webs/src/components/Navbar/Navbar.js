import React from "react";
import "./Navbar.css";
import icon from "./icon.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <div className="header">
      <Link to="/" className="header__logo">
        <img src={icon} alt="logo" />
        <p>
          Ez<span>Health</span>
        </p>
      </Link>
      <nav className="header__nav__left">
        <ul>
          <li class="header__sub relative">
            <Link to="/products" class="header__item">
              Products
            </Link>
            <i class="fa fa-caret-down"></i>
            <div className="menu-item">
              <ul>
                <li>
                  <Link to="/products/android">Ezhealth for Android</Link>
                </li>
                <li>
                  <Link to="/products/ios">Ezhealth for IOS</Link>
                </li>
                <li>
                  <Link>Other</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="header__sub Hover-bottom-line">
            <Link to="/blog" class="header__item">
              Blog
            </Link>
          </li>
          <li className="header__sub Hover-bottom-line">
            <Link to="/support" class="header__item">
              Support
            </Link>
          </li>
          <li className="header__sub Hover-bottom-line">
            <Link to="/discuss" class="header__item">
              Discuss
            </Link>
          </li>
          <li className="header__sub ">
            <Link to="/purchase" class="purchase">
              PURCHASE
            </Link>
          </li>
        </ul>
      </nav>
      <nav className="header__nav__right">
        <ul>
          <li class="header__sub Hover-bottom-line">
            <Link to="/contact" class="header__item">
              Contact
            </Link>
          </li>
          <li class="header__sub  relative">
            <Link to="/account" class="header__item">
              My Account
            </Link>
            <div className="Account_dropdown">
              <ul>
                <li>
                  <Link to={"/account/login"}>Log In</Link>
                </li>
                <li>
                  <Link to={"/account/signup"}>Sign Up</Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
