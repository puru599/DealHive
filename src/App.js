import "./App.css";
import Header from "./Components/Layout/Header/Header";
import ContextProvider from "./Components/Context/ContextProvider";
import { Route, Switch } from "react-router-dom";
import About from "./Components/Pages/About";
import StorePage from "./Components/Layout/Body/StorePage";
import { useState } from "react";
import HomePage from "./Components/Pages/HomePage";
import ContactUs from "./Components/Pages/ContactUs";
import ProductsPage from "./Components/Pages/ProductsPage";

function App() {
  const [cartState, setCartState] = useState(false);
  const cartHandler = () => {
    setCartState(!cartState);
  };

  return (
    <ContextProvider>
      <Header onClick={cartHandler}></Header>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/" exact>
          <StorePage cartState={cartState} cartHandler={cartHandler} />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
        <Route path="/:productId">
          <ProductsPage />
        </Route>
      </Switch>
    </ContextProvider>
  );
}

export default App;
