import React from "react";
import "./App.css";
import About from "./pages/about";
import Collection from "./pages/collection";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Cart from "./pages/cart";
import SingleProduct from "./pages/singleProduct";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import { useDispatch } from "react-redux";
import Footer from "./components/footer";
import Order from "./pages/order";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/collection">
            <Collection />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route path="/order">
            <Order />
          </Route>
          <Route path="/:productId">
            <SingleProduct />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
