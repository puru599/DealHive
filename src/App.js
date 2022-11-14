import "./App.css";
import Products from "./Components/Layout/Body/Products";
import Header from "./Components/Layout/Header/Header";
import Cart from "./Components/Cart/Cart";
import { useState } from "react";
import ContextProvider from "./Components/Context/ContextProvider";

function App() {
  const [cartState, setCartState] = useState(false);
  const cartHandler = () => {
    setCartState(!cartState);
  };
  return (
    <ContextProvider>
      <Header onClick={cartHandler}></Header>
      <Products />
      {cartState && <Cart closeModal={cartHandler}></Cart>}
    </ContextProvider>
  );
}

export default App;
