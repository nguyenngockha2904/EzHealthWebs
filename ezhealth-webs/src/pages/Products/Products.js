import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Login from "../../components/LogIn";
import SignUp from "../../components/SignUp";
import { motion } from "framer-motion";
import "./Products.css";
import ProductAndroid from "./ProductAndroid/ProductAndroid";
import ProductIOS from "./ProductIOS/ProductsIOS";
class Products extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <section className="Products">
          <div className="Products__header">
            <ul>
              <motion.li whileHover={{ scale: 1.1 }}>
                <Link to="/products/android">Android</Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }}>
                <Link to="/products/ios">IOS</Link>
              </motion.li>
            </ul>
          </div>
        </section>
        <Switch>
          <Route path="/products/android" component={ProductAndroid} />
          <Route path="/products/ios" component={ProductIOS} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Products;
