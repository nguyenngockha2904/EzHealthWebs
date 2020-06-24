import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Products.css";
import ProductAndroid from "./ProductAndroid";
import ProductIOS from "./ProductsIOS";
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
          <div>
            <Switch>
              <Route exact path="/products" component={ProductAndroid} />
              <Route
                exact
                path="/products/android"
                component={ProductAndroid}
              />
              <Route exact path="/products/ios" component={ProductIOS} />
            </Switch>
          </div>
        </section>
      </BrowserRouter>
    );
  }
}

export default Products;
