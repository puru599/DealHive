import React from "react";
import classes from "./Products.module.css";
import ProductItems from "./ProductItems";

const productsArr = [
  {
    id: "Colors",
    title: "Colors",
    price: 100,
    quanitiy: 1,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id: "Black and white Colors",
    title: "Black and white Colors",
    price: 50,
    quanitiy: 1,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: "Yellow and Black Colors",
    title: "Yellow and Black Colors",
    price: 70,
    quanitiy: 1,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id: "Blue Color",
    title: "Blue Color",
    price: 100,
    quanitiy: 1,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Products = () => {
  const productList = productsArr.map((product) => (
    <ProductItems
      id={product.id}
      key={product.id}
      title={product.title}
      price={product.price}
      imageUrl={product.imageUrl}
      quantity={product.quanitiy}
    />
  ));

  return (
    <div className={classes.Products}>
      <ul>{productList}</ul>
    </div>
  );
};

export default Products;
