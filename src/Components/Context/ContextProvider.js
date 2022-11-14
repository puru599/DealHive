import { React, useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    // const updateItems = state.items.concat(action.item);
    const updateTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    // const existingItemIndex = state.items.findIndex((item) => {
    //   return action.item.id === item.id;
    // });
    // const existingItem = state.items[existingItemIndex];
    // let updateItems;
    // if (existingItem) {
    //   const updateItem = {
    //     ...existingItem,
    //     amount: existingItem.amount + action.item.amount,
    //   };
    //   updateItems = [...state.items];
    //   updateItems[existingItemIndex] = updateItem;
    // } else {
    //   updateItems = state.items.concat(action.item);
    // }

    const existingItemIndex = state.items.findIndex((item) => {
      return action.item.id === item.id;
    });
    const existingItem = state.items[existingItemIndex];
    let updateItems;
    if (existingItem) {
      const updateItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };
      updateItems = [...state.items];
      updateItems[existingItemIndex] = updateItem;
    } else {
      updateItems = state.items.concat(action.item);
    }

    return {
      items: updateItems,
      totalAmount: updateTotalAmount,
    };
  }
  return defaultCartState;
};

const ContextProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCart = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCart = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
