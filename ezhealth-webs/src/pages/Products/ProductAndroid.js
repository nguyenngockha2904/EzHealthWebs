import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import Features from "../../temps/tempFeatures";
import img from "../../features_img/home/home_android.png";
import img1 from "../../features_img/challenges/challenges_android.png";
import img2 from "../../features_img/fitness/fitness_android.png";
import img3 from "../../features_img/sleepy/sleepy_android.png";
import img4 from "../../features_img/search/search_android.png";
import "./Products.css";
import { ThemeContext } from "../../contexts/ThemeContext";
const ProductAndroid = () => {
  const { isHomepage, light, dark } = useContext(ThemeContext);
  const theme = isHomepage ? dark : light;
  return (
    <div className="product">
      <div className="product__info">
        <p style={{ color: theme.text_p }}>
          Ezhealth for Android version 8, 14 days trial period
        </p>
        <h1 style={{ color: theme.text_h }}>Ezhealth for Android</h1>
        <p style={{ color: theme.text_p }}>
          AdGuard is a unique desktop program that has all the necessary
          features for the best web experience. The software combines the
          world's most advanced ad blocker for Windows, a whole privacy
          protection module, and a parental control tool — all working in any
          browser or app.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="product__info__btnDownload"
        >
          <i class="fa fa-arrow-down"></i>
          DOWNLOAD
        </motion.button>
      </div>
      <div className="productandroid__slider">
        <OwlCarousel className="owl-theme" items={1} loop autoplay>
          <div className="item__">
            <img src={img} alt="" />
            <div
              className="item__img"
              style={{ background: theme.bgslider }}
            ></div>
          </div>
          <div className="item__">
            <div
              className="item__img"
              style={{ background: theme.bgslider }}
            ></div>
            <img src={img1} alt="" />
          </div>
          <div className="item__">
            <div
              className="item__img"
              style={{ background: theme.bgslider }}
            ></div>
            <img src={img2} alt="" />
          </div>
          <div className="item__">
            <div
              className="item__img"
              style={{ background: theme.bgslider }}
            ></div>
            <img src={img3} alt="" />
          </div>
          <div className="item__">
            <div
              className="item__img"
              style={{ background: theme.bgslider }}
            ></div>
            <img src={img4} alt="" />
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};

export default ProductAndroid;
