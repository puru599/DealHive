import React from "react";
import classes from "./Products.module.css";

const Products = () => {
  const productsArr = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  return (
    <div>
      {productsArr.map((product) => {
        return (
          <React.Fragment>
            <h2>{product.title}</h2>
            <img src={product.imageUrl} alt="images" className={classes.img} />
            <h3>Price: {product.price}</h3>
            <button>Add to cart</button>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Products;
