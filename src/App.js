import "./App.css";
import Header from "./Components/Layout/Header/Header";
import ContextProvider from "./Components/Context/ContextProvider";
import { Route } from "react-router-dom";
import About from "./Components/Pages/About";
import StorePage from "./Components/Layout/Body/StorePage";
import { useState } from "react";

function App() {
  const [cartState, setCartState] = useState(false);
  const cartHandler = () => {
    setCartState(!cartState);
  };
  
  return (
    <ContextProvider>
      <Header onClick={cartHandler}></Header>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/store" >
      <StorePage cartState={cartState} cartHandler={cartHandler} />
      </Route>
    </ContextProvider>
  );
}

export default App;
