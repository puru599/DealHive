import React from "react";
import { useParams } from "react-router-dom";
import classes from "./ProductsPage.module.css";

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

const ProductsPage = () => {
  const params = useParams();
  let index;
  try {
    index = productsArr.find((product) => product.title === params.productId);
  } catch {
    console.log("Index is not found");
  }

  return (
    <React.Fragment>
      <h1 className={classes.h1}>Product Details</h1>
      <div className={classes.div}>
        <h2>{index.title}</h2>
        <img src={index.imageUrl} alt="images" className={classes.img} />
        <h3>Price: {index.price}</h3>
        <div>
          <h2>Reviews:</h2>
          <p>This is the {index.title} review.</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductsPage;
