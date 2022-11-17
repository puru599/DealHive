import React, { useContext } from "react";
import CartContext from "../Context/cart-context";
import { useParams } from "react-router-dom";
import classes from "./ProductsPage.module.css";

const ProductsPage = () => {
  const params = useParams();
  //   console.log(params.productId);
  const useCtx = useContext(CartContext);
  let index;
  try {
    index = useCtx.products.findIndex(
      (product) => product.title === params.productId
    );
    // console.log(index);
  } catch {
    console.log("Index is not found");
  }

  return (
    <React.Fragment>
      <h1 className={classes.h1}>Product Details</h1>
      <div className={classes.smalldiv}>
        {useCtx.products.map((product) => {
          return (
            <img
              src={product.imageUrl}
              alt={product.title}
              key={product.title}
            ></img>
          );
        })}
      </div>
      <div className={classes.div}>
        <h2>{useCtx.products[index].title}</h2>
        <img
          src={useCtx.products[index].imageUrl}
          alt="images"
          className={classes.img}
        />
        <h3>Price: {useCtx.products[index].price}</h3>
        <div>
          <h2>Reviews:</h2>
          <p>This is the {useCtx.products[index].title} review.</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductsPage;
