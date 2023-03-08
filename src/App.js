import "./App.css";
import React, { Suspense, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import CartContext from "./Components/Context/cart-context";
import { useContext, useState } from "react";

const SignUp = React.lazy(() => import("./Components/Pages/SignUp"));
const Cart = React.lazy(() => import("./Components/Cart/Cart"));
const LoginPage = React.lazy(() => import("./Components/Pages/LoginPage"));
const HomePage = React.lazy(() =>
  import("./Components/Pages/HomePage/HomePage")
);
const ProductsPage = React.lazy(() =>
  import("./Components/Pages/Product/ProductsPage")
);
const ContactUs = React.lazy(() => import("./Components/Pages/ContactUs"));
const StorePage = React.lazy(() =>
  import("./Components/Pages/Product/StorePage")
);
const About = React.lazy(() => import("./Components/Pages/About"));
const Header = React.lazy(() => import("./Components/UI/Header/Header"));

function App() {
  const [cartState, setCartState] = useState(false);
  const [cartValue, setCartValue] = useState([]);

  const useCtx = useContext(CartContext);
  const loggedIn = useCtx.isLoggedIn;

  const fetchDataHandler = async () => {
    try {
      const fetchResponse = await fetch(
        `https://crudcrud.com/api/8283deecb64742dca2644988afa3d210/cart${useCtx.email}`
      );
      const fetchedData = await fetchResponse.json();
      
      const fetchedDataArray = fetchedData.map((item) => item);
      setCartValue(fetchedDataArray);
      useCtx.cartArrayFunction(fetchedDataArray);

      const cartPrice = fetchedData.reduce((curNum, item) => {
        return curNum + item.amount * item.price;
      }, 0);

      const numberofCartItems = fetchedDataArray.reduce((curNum, item) => {
        return curNum + item.amount;
      }, 0);

      useCtx.numberOfItems(numberofCartItems);
      useCtx.cartPrice(cartPrice);
    } catch {
      useCtx.cartArrayFunction(useCtx.items);
      const numberofCartItems = useCtx.items.reduce((curNum, item) => {
        return curNum + item.amount;
      }, 0);
      useCtx.numberOfItems(numberofCartItems);
    }
  };

  const cartHandler = () => {
    setCartState(!cartState);
    fetchDataHandler();
  };

  useEffect(() => {
    fetchDataHandler();
  }, []);

  return (
    <React.Fragment>
      <Suspense>
        <Header onClick={cartHandler}></Header>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          {loggedIn && (
            <Route path="/store">
              <StorePage
                cartState={cartState}
                cartHandler={cartHandler}
                cartValue={cartValue}
              />
            </Route>
          )}
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
          <Route path="/signUp">
            <SignUp />
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
        {cartState && (
          <Cart closeModal={cartHandler} cartValue={cartValue}></Cart>
        )}
      </Suspense>
    </React.Fragment>
  );
}

export default App;
