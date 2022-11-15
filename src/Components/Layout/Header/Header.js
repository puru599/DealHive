import classes from "./Header.module.css";
import { useContext } from "react";
import CartContext from "../../Context/cart-context";
import { NavLink } from "react-router-dom";

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
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/store">Store</NavLink>
          </li>
          <li>
          <NavLink to="/about">About</NavLink>
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
