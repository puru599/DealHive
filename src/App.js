import "./App.css";
import Header from "./Components/Layout/Header/Header";
import ContextProvider from "./Components/Context/ContextProvider";
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
    <ContextProvider>
      <Header onClick={cartHandler}></Header>
      <Switch>
        <Route path="/about">
          <About />
        </Route>

        <Route path="/store" exact>
          <StorePage cartState={cartState} cartHandler={cartHandler} />
        </Route>

        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/store:productId">
          <ProductsPage />
        </Route>
        <Route path="*">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </ContextProvider>
  );
}

export default App;
