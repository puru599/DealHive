import { React, useContext } from "react";
import CartContext from "../../Context/cart-context";
import classes from "./Products.module.css";
import { Link } from "react-router-dom";

const ProductItems = (props) => {
  const useCtx = useContext(CartContext);
  const onClickHandler = (e) => {
    e.preventDefault();
    useCtx.addItem({
      id: props.id,
      title: props.title,
      amount: 1,
      imageUrl: props.imageUrl,
      quantity: props.quantity,
      price: props.price
    });
  };
  return (
    <form key={props.title} onSubmit={onClickHandler}>
      <h2>{props.title}</h2>
      <Link to={props.to}><img src={props.imageUrl} alt="images" className={classes.img} /></Link>
      <h3>Price: {props.price}</h3>
      <button type="submit">Add to cart</button>
    </form>
  );
};

export default ProductItems;
