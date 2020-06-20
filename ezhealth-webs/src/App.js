import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/home";
import Blog from "./pages/Blog/Blog";
import Support from "./pages/Support/Support";
import Discuss from "./pages/Discuss/Discuss";
import Purchase from "./pages/Purchase/Purchase";
import Contact from "./pages/Contact/Contact";
import MyAccount from "./pages/MyAccount/MyAccount";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import SignUp from "./components/SignUp";
import Test from "./pages/Products/test";
import Products from "./pages/Products/Products";
import Login from "./components/LogIn";
import ProductAndroid from "./pages/Products/ProductAndroid/ProductAndroid";
import ProductIOS from "./pages/Products/ProductIOS/ProductsIOS";
class App extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/products" component={Products} />
            <Route path="/products/android" component={ProductAndroid} />
            <Route path="/products/ios" component={ProductIOS} />
            <Route exact path="/products/ios" component={SignUp} />
            <Route exact path="/support" component={Support} />
            <Route exact path="/discuss" component={Discuss} />
            <Route exact path="/purchase" component={Purchase} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/account" component={MyAccount} />
            <Route exact path="/account/login" component={Login} />
            <Route exact path="/account/signup" component={SignUp} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
