import classes from "./Header.module.css";
import { useContext } from "react";
import CartContext from "../../Context/cart-context";
import { NavLink, useHistory } from "react-router-dom";

const Header = (props) => {
  const useCtx = useContext(CartContext);
  const history = useHistory("");
  const loginStatus = useCtx.isLoggedIn;

  const logoutHandler = () => {
    useCtx.logout();
    history.replace("/login");
  };
  
  return (
    <header className={classes.header}>
      <h1>E-Commerce</h1>
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
        {!loginStatus && (
          <li>
            {" "}
            <NavLink to="/signUp">Sign Up</NavLink>
          </li>
        )}
        <li>
          <NavLink to="/contact">Contact Us</NavLink>
        </li>
        {loginStatus && (
          <button onClick={props.onClick}>
            <span>
              Cart <span>{useCtx.value}</span>
            </span>
          </button>
        )}
      </ul>
    </header>
  );
};

export default Header;
