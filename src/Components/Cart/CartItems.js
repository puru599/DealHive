import classes from "./Cart.module.css";

const CartItems = (props) => {
  return (
    <div className={classes.Cart} key={props.title}>
      <h3>Name: {props.title}</h3>
      <img src={props.imageUrl} alt={props.title} />
      <h4>Quantity: {props.amount}</h4>
      <button>Remove Item</button>
    </div>
  );
};

export default CartItems;
