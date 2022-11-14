import Modal from "../UI/Modal";
import React from "react";
import classes from "./Cart.module.css";
import { useContext } from "react";
import CartContext from "../Context/cart-context";
import CartItems from "./CartItems";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const onRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  return (
    <React.Fragment>
      <Modal onClose={props.closeModal} className={classes.Cart}>
        <button onClick={props.closeModal}>Close</button>
        <h1>Cart</h1>
        <ul className={classes.Cart} key={props.id}>
          {cartCtx.items.map((element) => (
            <CartItems
              title={element.title}
              imageUrl={element.imageUrl}
              amount={element.amount}
              onRemove={onRemoveHandler.bind(null, element.id)}
            />
          ))}
        </ul>
        <h2>Total Amount: { cartCtx.totalAmount }</h2>
      </Modal>
    </React.Fragment>
  );
};

export default Cart;
