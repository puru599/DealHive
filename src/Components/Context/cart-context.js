import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  products: [],
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
  cartArray: [],
});

export default CartContext;
