import Modal from "../UI/Modal";
import React from "react";
import classes from "./Cart.module.css";
import { useContext } from "react";
import CartContext from "../Context/cart-context";
import CartItems from "./CartItems";

const Cart = (props) => {
  // const cartElements = [
  //   {
  //     title: "Colors",
  //     price: 100,
  //     imageUrl:
  //       "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  //     quantity: 2,
  //   },
  //   {
  //     title: "Black and white Colors",
  //     price: 50,
  //     imageUrl:
  //       "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  //     quantity: 3,
  //   },
  //   {
  //     title: "Yellow and Black Colors",

  //     price: 70,
  //     imageUrl:
  //       "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  //     quantity: 1,
  //   },
  // ];
  const cartCtx = useContext(CartContext);
  return (
    <React.Fragment>
      <Modal onClose={props.closeModal} className={classes.Cart}>
        <button onClick={props.closeModal}>Close</button>
        <h1>Cart</h1>
        {/* <div className={classes.h2}>
          <h2>Item</h2>
          <h2>Price</h2>
          <h2>Quantity</h2>
        </div> */}
        <ul className={classes.Cart}>
          {cartCtx.items.map((element) => (
            <CartItems
              title={element.title}
              imageUrl={element.imageUrl}
              amount={element.amount}
            />
          ))}
        </ul>
        <h2>Total Amount: { cartCtx.totalAmount }</h2>
      </Modal>
    </React.Fragment>
  );
};

export default Cart;
