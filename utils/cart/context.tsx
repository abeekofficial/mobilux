import React, { createContext, useContext, Dispatch, SetStateAction, useState, ReactNode } from "react";
import {   IProduct} from "@/types/product";



interface ShoppingCartContextProps {
  cartItems: IProduct[];
  addItemToCart: (product: IProduct) => void;
  removeItemFromCart: (productId: number) => void;
}

const ShoppingCartContext = createContext<ShoppingCartContextProps>({
  cartItems: [],
  addItemToCart: () => {}, 
  removeItemFromCart: () => {}, 
});


const ShoppingCartContextProvider: React.FC<ReactNode> = ({ children } : any ) => {
  const [cartItems, setCartItems] = useState<IProduct[]>([]);

  const addItemToCart = (product: IProduct) => {
    console.log({
        length1 : cartItems.length
    });
    
    setCartItems((prevItems) => [...prevItems, product]);
    
    console.log({
          length2 : cartItems.length
    })
  };

  const removeItemFromCart = (productId: number) => {
    setCartItems((prevItems) => prevItems.filter((item : IProduct ) => item.id !== productId));
  };

  return (
    <ShoppingCartContext.Provider
      value={{ cartItems, addItemToCart, removeItemFromCart }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};


export const useShoppingCartContext = () => useContext(ShoppingCartContext);
