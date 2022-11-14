import classes from "./Header.module.css";
import { useContext } from "react";
import CartContext from "../../Context/cart-context";

const Header = (props) => {
  const useCtx = useContext(CartContext);
  const numberofCartItems = useCtx.items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);
  return (
    <header className={classes.header}>
      <div>
        <ul>
          <li>
            <a href="a">Home</a>
          </li>
          <li>
            <a href="b">Store</a>
          </li>
          <li>
            <a href="c">About</a>
          </li>
          <button onClick={props.onClick}>
            <span>Cart-</span>
            <span>{numberofCartItems}</span>
          </button>
        </ul>
      </div>
      <h1>The Generics</h1>
    </header>
  );
};

export default Header;
