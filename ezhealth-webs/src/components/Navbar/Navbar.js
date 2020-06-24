import React, { useContext } from "react";
import "./Navbar.css";
import icon from "./icon.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ThemeContext } from "../../contexts/ThemeContext";
const Navbar = () => {
  const { isHomepage, light, dark, toggleTheme } = useContext(ThemeContext);
  const theme = isHomepage ? dark : light;
  return (
    <div className="header">
      <Link
        to="/"
        className="header__logo"
        onClick={() => {
          toggleTheme(true);
        }}
      >
        <img src={icon} alt="logo" />
        <p>
          Ez<span>Health</span>
        </p>
      </Link>
      <nav className="header__nav__left">
        <ul>
          <li class="header__sub relative">
            <Link
              to="/products"
              class="header__item"
              onClick={() => {
                toggleTheme(false);
              }}
              style={{ color: theme.textcolornav__left }}
            >
              Products
            </Link>
            <i class="fa fa-caret-down"></i>
            <div className="menu-item">
              <ul>
                <li>
                  <Link
                    to="/products/android"
                    onClick={() => {
                      toggleTheme(false);
                    }}
                    style={{ color: theme.textcolornav__left }}
                  >
                    Ezhealth for Android
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/ios"
                    onClick={() => {
                      toggleTheme(false);
                    }}
                    style={{ color: theme.textcolornav__left }}
                  >
                    Ezhealth for IOS
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="header__sub Hover-bottom-line">
            <Link
              to="/blog"
              class="header__item"
              onClick={() => {
                console.log(theme);
              }}
              style={{ color: theme.textcolornav__left }}
            >
              Blog
            </Link>
          </li>
          <li className="header__sub Hover-bottom-line">
            <Link
              to="/support"
              class="header__item"
              onClick={() => {
                toggleTheme(false);
              }}
              style={{ color: theme.textcolornav__left }}
            >
              Support
            </Link>
          </li>
        </ul>
      </nav>
      <nav className="header__nav__right">
        <ul>
          <li class="header__sub Hover-bottom-line white-text">
            <Link
              to="/contact"
              class="header__item "
              onClick={() => {
                toggleTheme(false);
              }}
              style={{ color: theme.textcolornav__right }}
            >
              Contact
            </Link>
          </li>
          <li class="header__sub  relative white-text">
            <Link
              to="/account"
              class="header__item "
              onClick={() => {
                toggleTheme(false);
              }}
              style={{ color: theme.textcolornav__right }}
            >
              My Account
            </Link>
            <div
              className="Account_dropdown"
              style={{
                background: theme.accountDropdown,
              }}
            >
              <ul>
                <li id="Account_dropdown__li__hover">
                  <Link
                    to={"/account/login"}
                    onClick={() => {
                      toggleTheme(false);
                    }}
                    style={{
                      color: theme.textcolornav__right,
                    }}
                  >
                    Log In
                  </Link>
                </li>
                <li id="Account_dropdown__li__hover">
                  <Link
                    to={"/account/signup"}
                    onClick={() => {
                      toggleTheme(false);
                    }}
                    style={{
                      color: theme.textcolornav__right,
                    }}
                  >
                    Sign Up
                  </Link>
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
