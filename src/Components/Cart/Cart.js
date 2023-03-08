import Modal from "../UI/Modal/Modal";
import React, { useEffect } from "react";
import classes from "./Cart.module.css";
import { useContext } from "react";
import CartContext from "../Context/cart-context";
import CartItems from "./CartItems";

const Cart = (props) => {
  const useCtx = useContext(CartContext);
  const items = useCtx.items;

  useEffect(() => {
    call();
  }, [useCtx.items]);
  async function call() {
    try {
      const fetchResponse = await fetch(
        `https://crudcrud.com/api/8283deecb64742dca2644988afa3d210/cart${useCtx.email}`
      );
      const fetchedData = await fetchResponse.json();
      const fetchedDataArray = fetchedData.map((item) => item);
      useCtx.cartArrayFunction(fetchedDataArray);

      const cartPrice = fetchedData.reduce((curNum, item) => {
        return curNum + item.amount * item.price;
      }, 0);

      useCtx.cartPrice(cartPrice);
    } catch {
      const cartPrice = useCtx.items.reduce((curNum, item) => {
        return curNum + item.amount * item.price;
      }, 0);
      useCtx.cartPrice(cartPrice);
    }
  }

  const onRemoveHandler = async (id) => {
    try {
      const response = await fetch(
        `https://crudcrud.com/api/8283deecb64742dca2644988afa3d210/cart${useCtx.email}`,
        {
          method: "GET"
        }
      );
      const data = await response.json();
      const existingDataIndex = data.findIndex((data) => data.id === id);
      const existingData = data[existingDataIndex];
      
      if (!!existingData) {
        if (data[existingDataIndex].amount > 1) {
          const obj = data[existingDataIndex];
          const modifiedObjing = {
            ...obj,
            amount: data[existingDataIndex].amount - 1
          };
          delete modifiedObjing._id;
          await fetch(
            `https://crudcrud.com/api/8283deecb64742dca2644988afa3d210/cart${useCtx.email}/${data[existingDataIndex]._id}`,
            {
              method: "PUT",
              body: JSON.stringify(modifiedObjing),
              headers: {
                "Content-Type": "application/json"
              }
            }
          );
        } else {
          await fetch(
            `https://crudcrud.com/api/8283deecb64742dca2644988afa3d210/cart${useCtx.email}/${data[existingDataIndex]._id}`,
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json"
              }
            }
          );
        }
      }
      const fetchResponse = await fetch(
        `https://crudcrud.com/api/8283deecb64742dca2644988afa3d210/cart${useCtx.email}`
      );
      const fetchedData = await fetchResponse.json();
      const fetchedDataArray = fetchedData.map((item) => item);
      useCtx.cartArrayFunction(fetchedDataArray);
      const cartPrice = fetchedData.reduce((curNum, item) => {
        return curNum + item.amount * item.price;
      }, 0);
      useCtx.cartPrice(cartPrice);
    } catch {
      useCtx.removeItem(id);
      const cartPrice = useCtx.items.reduce((curNum, item) => {
        return curNum + item.amount * item.price;
      }, 0);
      useCtx.cartPrice(cartPrice);
    }
  };
  return (
    <React.Fragment>
      <Modal onClose={props.closeModal} className={classes.Cart}>
        <button onClick={props.closeModal}>Close</button>
        <h1>Cart</h1>
        <ul className={classes.Cart} key={props.id}>
          {items.map((element) => (
            <CartItems
              title={element.title}
              imageUrl={element.imageUrl}
              amount={element.amount}
              onRemove={onRemoveHandler.bind(null, element.id)}
              price={element.price}
              key={element.title}
            />
          ))}
        </ul>
        <h2>Total Amount: {useCtx.valuePrice}</h2>
      </Modal>
    </React.Fragment>
  );
};

export default Cart;
