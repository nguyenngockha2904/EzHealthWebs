import React from "react";
import "./ProductAndroid.css";
import { motion } from "framer-motion";
const ProductAndroid = () => {
  return (
    <div className="productandroid">
      <div className="productandroid__info">
        <p>Ezhealth for Android version 8, 14 days trial period</p>
        <h1>Ezhealth for Android</h1>
        <p>
          AdGuard is a unique desktop program that has all the necessary
          features for the best web experience. The software combines the
          world's most advanced ad blocker for Windows, a whole privacy
          protection module, and a parental control tool — all working in any
          browser or app.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="productandroid__info__btnDownload"
        >
          <i class="fa fa-arrow-down"></i>
          DOWNLOAD
        </motion.button>
      </div>
      <div className="productandroid__slider"></div>
    </div>
  );
};

export default ProductAndroid;
