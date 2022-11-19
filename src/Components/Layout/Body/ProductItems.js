import { React, useContext } from "react";
import CartContext from "../../Context/cart-context";
import classes from "./Products.module.css";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductItems = (props) => {
  const useCtx = useContext(CartContext);
  const mailId = useCtx.email;
  const onClickHandler = (e) => {
    e.preventDefault();
    let obj = {
      id: props.id,
      title: props.title,
      amount: 1,
      imageUrl: props.imageUrl,
      quantity: props.quantity,
      price: props.price,
    };
    useCtx.addItem(obj);
    axios
      .post(
        `https://crudcrud.com/api/2d1c6493a5884fd4b5168194dee1d525/cart${mailId}`,
        obj
      )
      .then((response) => {
        useCtx.addItem(response.data);
        console.log(response.data);
      });
  };
  return (
    <form key={props.title} onSubmit={onClickHandler}>
      <h2>{props.title}</h2>
      <Link to={props.to}>
        <img src={props.imageUrl} alt="images" className={classes.img} />
      </Link>
      <h3>Price: {props.price}</h3>
      <button type="submit">Add to cart</button>
    </form>
  );
};

export default ProductItems;
