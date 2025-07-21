"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { FoodType } from "../../types/type";
import { set } from "date-fns";
type FoodWithQuantity = { food: FoodType; quantity: number; price: number };

type FoodCartContextType = {
  setFoodCart: Dispatch<
    SetStateAction<{ food: FoodType; quantity: number; price: number }[]>
  >;
  addToCart: (_food: FoodWithQuantity) => void;
  removeFromCart: (_foodId: string) => void;
};

export const FoodCartContext = createContext<FoodCartContextType>(
  {} as FoodCartContextType
);

export default function FoodCartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [foodCart, setFoodCart] = useState<FoodWithQuantity[]>([]);

  const addToCart = (food: FoodWithQuantity) => {
    setFoodCart([...foodCart, food]);
  };

  const removeFromCart = (foodId: string) => {
    // setFoodCart()
  }
  // useEffect(() => {
  //   const cartItems = localStorage.getItem("foodCart");
  //   if (cartItems) setFoodCart(JSON.parse(cartItems) || []);
  // }, []);
  // useEffect(() => {
  //   if (foodCart) localStorage.setItem("foodCart", JSON.stringify(foodCart));
  // }, [foodCart]);

  return (
    <FoodCartContext.Provider value={{ foodCart, addToCart, removeFromCart }}>
      {children}
    </FoodCartContext.Provider>
  );
}
