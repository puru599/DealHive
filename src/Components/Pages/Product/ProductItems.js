import { React, useContext } from "react";
import CartContext from "../../Context/cart-context";
import classes from "./ProductItems.module.css";
import { Link } from "react-router-dom";

const ProductItems = (props) => {
  const useCtx = useContext(CartContext);
  const emailLink = `https://crudcrud.com/api/8283deecb64742dca2644988afa3d210/cart${useCtx.email}`;

  const onClickHandler = async (e) => {
    e.preventDefault();

    let obj = {
      id: props.id,
      title: props.title,
      amount: 1,
      imageUrl: props.imageUrl,
      price: props.price,
      email: useCtx.email
    };

    try {
      const response = await fetch(`${emailLink}`);
      const data = await response.json();
      const existingDataIndex = data.findIndex((data) => data.id === obj.id);
      const existingData = data[existingDataIndex];

      if (response.ok) {
        if (!!existingData) {
          const modifiedObj = {
            ...obj,
            amount: data[existingDataIndex].amount + 1
          };
          await fetch(
            `${emailLink}/${data[existingDataIndex]._id}`,
            {
              method: "PUT",
              body: JSON.stringify(modifiedObj),
              headers: {
                "Content-Type": "application/json"
              }
            }
          );
        } else {
          await fetch(`${emailLink}`, {
            method: "POST",
            body: JSON.stringify(obj),
            headers: {
              "Content-Type": "application/json"
            }
          });
        }
      }

      const numberofCartItems = data.reduce((curNum, item) => {
        return curNum + item.amount;
      }, 1);

      useCtx.numberOfItems(numberofCartItems);
    } catch (error) {
      useCtx.addItem(obj);
      const numberofCartItems = useCtx.items.reduce((curNum, item) => {
        return curNum + item.amount;
      }, 1);
      useCtx.numberOfItems(numberofCartItems);
    }
  };
  return (
    <li key={props.title} className={classes.ProductItems}>
      <form onSubmit={onClickHandler}>
        <h2>{props.title}</h2>
        <Link to={props.to}>
          <img src={props.imageUrl} alt="images" />
        </Link>
        <h3>Price: {props.price}</h3>
        <button type="submit">Add to cart</button>
      </form>
    </li>
  );
};

export default ProductItems;
