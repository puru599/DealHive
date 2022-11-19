import classes from "./Header.module.css";
import { useContext } from "react";
import CartContext from "../../Context/cart-context";
import { NavLink, useHistory } from "react-router-dom";

const Header = (props) => {
  const useCtx = useContext(CartContext);
  const numberofCartItems = useCtx.items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);
  const loginStatus = useCtx.isLoggedIn;
  const history = useHistory("");
  const logoutHandler = () => {
    useCtx.logout();
    history.replace("/login");
  };
  return (
    <header className={classes.header}>
      <div>
        <ul>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          {loginStatus && (
            <li>
              <NavLink to="/store">Store</NavLink>
            </li>
          )}
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            {loginStatus ? (
              <NavLink to="/logout" onClick={logoutHandler}>
                logout
              </NavLink>
            ) : (
              <NavLink to="/login">login</NavLink>
            )}
          </li>
          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
          {loginStatus && (
            <button onClick={props.onClick}>
              <span>Cart-</span>
              <span>{numberofCartItems}</span>
            </button>
          )}
        </ul>
      </div>
      <h1>The Generics</h1>
    </header>
  );
};

export default Header;
