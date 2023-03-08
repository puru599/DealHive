import React, { useContext, useEffect } from "react";
import Products from "./Products";
import CartContext from "../../Context/cart-context";

const StorePage = () => {
  const useCtx = useContext(CartContext);

  useEffect(() => {
    async function fetchFunction() {
      const fetchResponse = await fetch(
        `https://crudcrud.com/api/8283deecb64742dca2644988afa3d210/cart${useCtx.email}`
      );

      const fetchedData = await fetchResponse.json();
      const fetchedDataArray = fetchedData.map((item) => item);
      
      const numberofCartItems = fetchedDataArray.reduce((curNum, item) => {
        return curNum + item.amount;
      }, 0);

      useCtx.numberOfItems(numberofCartItems);
      const cartPrice = fetchedDataArray.reduce((curNum, item) => {
        return curNum + item.amount * item.price;
      }, 0);

      useCtx.cartPrice(cartPrice);
      console.log(useCtx.cartArray);
    }
    fetchFunction();
  }, []);
  return (
    <React.Fragment>
      <Products />
    </React.Fragment>
  );
};

export default StorePage;
