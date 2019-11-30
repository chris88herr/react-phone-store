import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.css";


import NavBar from "./Components/NavBar";
// import Product from "./Components/Product";
import ProductList from "./Components/ProductList";
import Details from "./Components/Details";
import Cart from "./Components/Cart";
import Default from "./Components/Default";
import Modal from "./Components/Modal"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />

        <Switch>
          <Route exact={true} path="/" component={ProductList} />

          <Route exact={true} path="/cart" component={Cart} />

          <Route exact={true} path="/details" component={Details} />
          <Route component={Default} />
        </Switch>
        <Modal />

      </React.Fragment>
    );
  }
}

export default App;
