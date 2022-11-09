import "./App.css";
import Products from "./Components/Layout/Body/Products";
import Header from "./Components/Layout/Header/Header";
import Cart from "./Components/Cart/Cart";
import { useState } from "react";

function App() {
  const [cartState, setCartState] = useState(false)
  const cartHandler = () =>{
    setCartState(!cartState)
  }
  return (
    <div className="App">
      <Header className="App-header" onClick={cartHandler}></Header>
      <Products />
      {cartState && <Cart closeModal={cartHandler}></Cart>}
    </div>
  );
}

export default App;
