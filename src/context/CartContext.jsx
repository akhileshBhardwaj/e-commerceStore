import { createContext, useContext } from "react";
import { initialProducts } from "../data/Product";

const CartContext = createContext();

import React from "react";

export const CartProvider = ({ children }) => {
  const products = initialProducts;

  return (
    <CartContext.Provider value={{ products }}>{children}</CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
