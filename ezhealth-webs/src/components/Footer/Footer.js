import React from "react";
import icon from "../Navbar/icon.png";
import "./Footer.css";
import img from "../../features_img/bottom.png";
const Footer = () => {
  return (
    <section className="footer">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="footer__content">
        <div className="footer__item footer__item__l">
          <div className="footer__item__logo">
            <img src={icon} alt="logo" />
            <p>
              Ez<span>Health</span>
            </p>
          </div>
          <p>
            ©2020 Ezhealth@ by EzTe©h, inc, Terms of Service I Privacy Policy
          </p>
        </div>
        <div className="footer__item">
          <h3>Products</h3>
          <ul>
            <li>Product</li>
            <li>Pricing</li>
            <li>Log in</li>
            <li>Request acces</li>
            <li>Partnerships</li>
          </ul>
        </div>
        <div className="footer__item">
          <h3>About us</h3>
          <ul>
            <li>About Ezhealth</li>
            <li>Contact us</li>
            <li>Features </li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="footer__item">
          <h3>Resources</h3>
          <ul>
            <li>Help center</li>
            <li>Book a demo</li>
            <li>Server status</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="footer__item">
          <h3>Get in touch</h3>
          <ul>
            <li>Question or feedback</li>
            <li>We'd love to here from you</li>
          </ul>
          <ul>
            <li className="footer__inlineBlock">
              <i class="fa fa-facebook-square" aria-hidden="true"></i>
            </li>
            <li className="footer__inlineBlock">
              <i class="fa fa-twitter-square" aria-hidden="true"></i>
            </li>
            <li className="footer__inlineBlock">
              <i class="fa fa-google" aria-hidden="true"></i>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
