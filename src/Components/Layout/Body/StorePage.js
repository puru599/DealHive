import React from "react";
// import Products from "./Components/Layout/Body/Products";
// import Cart from "./Components/Cart/Cart";
import Products from "../Body/Products"
import Cart from "../../Cart/Cart";

const StorePage = (props) => {
  return (
    <React.Fragment>
      <Products />
      {props.cartState && <Cart closeModal={props.cartHandler}></Cart>}
    </React.Fragment>
  );
};

export default StorePage;
