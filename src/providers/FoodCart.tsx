"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { FoodType } from "../../types/type";

type FoodCartContextType = {
  foodCart: { food: FoodType; quantity: number; price: number }[];
  setFoodCart: Dispatch<SetStateAction<{ food: FoodType; quantity: number; price: number }[]>>;
};

export const FoodCartContext = createContext<FoodCartContextType>(
  {} as FoodCartContextType
);

export default function FoodCartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [foodCart, setFoodCart] = useState<
    { food: FoodType; quantity: number; price: number }[]
  >([]);

  useEffect(() => {
    const cartItems = localStorage.getItem("foodCart");
    if (cartItems) setFoodCart(JSON.parse(cartItems) || []);
  }, []);
  useEffect(() => {
    if (foodCart) localStorage.setItem("foodCart", JSON.stringify(foodCart));
  },[foodCart]);

  return (
    <FoodCartContext.Provider value={{ foodCart, setFoodCart }}>
      {children}
    </FoodCartContext.Provider>
  );
}
