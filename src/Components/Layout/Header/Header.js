import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={classes.header}>
      <ul>
        <li>Home</li>
        <li>Store</li>
        <li>About</li>
        <button onClick={props.onClick}>Cart</button>
      </ul>
      <h1>The Generics</h1>
    </div>
  );
};

export default Header;
