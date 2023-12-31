import { React, useReducer, useState } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
  token: null,
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  email: null,
  numberOfItems: (value) => {},
  value: 0,
  cartPrice: (val) => {},
  valuePrice: 0,
  cartArrayFunction: (items) => {},
  cartArray: []
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updateTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingItemIndex = state.items.findIndex((item) => {
      return action.item.id === item.id;
    });

    const existingItem = state.items[existingItemIndex];
    let updateItems;

    if (existingItem) {
      const updateItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount
      };
      updateItems = [...state.items];
      updateItems[existingItemIndex] = updateItem;
    } else {
      updateItems = state.items.concat(action.item);
    }
    return {
      items: updateItems,
      totalAmount: updateTotalAmount
    };
  }

  if (action.type === "REMOVE") {
    const existingItemIndex = state.items.findIndex(
      (item) => action.id === item.id
    );

    const existingItem = state.items[existingItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;

    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
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
  const loginState = sessionStorage.getItem("loginKey");
  const emailState = sessionStorage.getItem("email");
  const [token, setToken] = useState(loginState);
  const [email, setEmail] = useState(emailState);
  const [value, setValue] = useState(null);
  const [valuePrice, setValuePrice] = useState(null);
  const [cartArray, setCartArray] = useState([]);
  const isLoggedInHandler = !!token;
  
  const loginHandler = (token, email) => {
    setToken(token);
    setEmail(email);
    sessionStorage.setItem("loginKey", token);
    sessionStorage.setItem("email", email);
  };

  const logoutHandler = () => {
    setToken(null);
    setEmail(null);
    sessionStorage.removeItem("loginKey");
    sessionStorage.removeItem("email");
  };

  const numberOfItemsHandler = (number) => {
    setValue(number);
  };

  const cartPriceHandler = (num) => {
    setValuePrice(num);
  };

  const cartArrayFunctionHandler = (items) => {
    setCartArray(items);
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
    token: token,
    isLoggedIn: isLoggedInHandler,
    login: loginHandler,
    logout: logoutHandler,
    email: email,
    numberOfItems: numberOfItemsHandler,
    value: value,
    cartPrice: cartPriceHandler,
    valuePrice: valuePrice,
    cartArrayFunction: cartArrayFunctionHandler,
    cartArray: cartArray
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default ContextProvider;

