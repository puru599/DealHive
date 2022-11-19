import Modal from "../UI/Modal";
import React, { useState } from "react";
import classes from "./Cart.module.css";
import { useContext } from "react";
import CartContext from "../Context/cart-context";
import CartItems from "./CartItems";
import axios from "axios";

const Cart = (props) => {
  const [dataItems, setDataItems] = useState([]);
  const cartCtx = useContext(CartContext);
  let dataValues;
  const onRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  axios
    .get(
      `https://crudcrud.com/api/2d1c6493a5884fd4b5168194dee1d525/cart${cartCtx.email}`
    )
    .then((response) => {
      dataValues = response.data;
      setDataItems(dataValues);
    })
    .catch((error) => {
      console.log(error);
    });
  return (
    <React.Fragment>
      <Modal onClose={props.closeModal} className={classes.Cart}>
        <button onClick={props.closeModal}>Close</button>
        <h1>Cart</h1>
        <ul className={classes.Cart} key={props.id}>
          {dataItems.map((element) => (
            <CartItems
              title={element.title}
              imageUrl={element.imageUrl}
              amount={element.amount}
              onRemove={onRemoveHandler.bind(null, element.id)}
              key={element.title}
            />
          ))}
        </ul>
        <h2>Total Amount: {cartCtx.totalAmount}</h2>
      </Modal>
    </React.Fragment>
  );
};

export default Cart;
