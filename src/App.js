import "./App.css";
import React from "react";
import Header from "./Components/Layout/Header/Header";
import { Redirect, Route, Switch } from "react-router-dom";
import About from "./Components/Pages/About";
import StorePage from "./Components/Layout/Body/StorePage";
import { useContext, useState } from "react";
import HomePage from "./Components/Pages/HomePage";
import ContactUs from "./Components/Pages/ContactUs";
import ProductsPage from "./Components/Pages/ProductsPage";
import LoginPage from "./Components/Pages/LoginPage";
import CartContext from "./Components/Context/cart-context";

function App() {
  const [cartState, setCartState] = useState(false);
  const cartHandler = () => {
    setCartState(!cartState);
  };
  const useCtx = useContext(CartContext);
  const loggedIn = useCtx.isLoggedIn;
  return (
    <React.Fragment>
      <Header onClick={cartHandler}></Header>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        {loggedIn && (
          <Route path="/store">
            <StorePage cartState={cartState} cartHandler={cartHandler} />
          </Route>
        )}
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        {loggedIn && (
          <Route path="/:productId">
            <ProductsPage />
          </Route>
        )}
        <Route path="*">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
