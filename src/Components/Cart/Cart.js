import Modal from "../UI/Modal";
import React from "react";

const Cart = (props) => {
  const cartElements = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },
    {
      title: "Yellow and Black Colors",

      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
  ];
  return <React.Fragment>
    <Modal onClose={props.closeModal}>
        {cartElements.map((element) =>{
            return <div>
                <h3>Name: {element.title}</h3>
                <img src={element.imageUrl} alt={element.title} />
                <h4>Quantity: {element.quantity}</h4>
            </div>
        })}
    </Modal>
  </React.Fragment>;
};

export default Cart;