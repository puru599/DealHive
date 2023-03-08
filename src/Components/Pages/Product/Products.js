import React from "react";
import classes from "./Products.module.css";
import ProductItems from "./ProductItems";
import { useContext } from "react";
import CartContext from "../../Context/cart-context";

const productsArr = [
  {
    id: "Colors",
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    imageUrl2:
      "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    to: "Colors"
  },
  {
    id: "Black and white Colors",
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    imageUrl2:
      "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    to: "Black and white Colors"
  },
  {
    id: "Yellow and Black Colors",
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    imageUrl2:
      "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    to: "Yellow and Black Colors"
  },
  {
    id: "Blue Color",
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    imageUrl2:
      "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    to: "Blue Color"
  }
];

const Products = () => {
  const useCtx = useContext(CartContext);
  useCtx.products = productsArr;

  const productList = productsArr.map((product) => (
    <ProductItems
      id={product.id}
      key={product.id}
      title={product.title}
      price={product.price}
      imageUrl={product.imageUrl}
      quantity={product.quanitiy}
      to={product.to}
    />
  ));

  return (
    <div className={classes.Products}>
      <ul>{productList}</ul>
    </div>
  );
};

export default Products;
