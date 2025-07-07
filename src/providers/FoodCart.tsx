"use client";

import { createContext, Dispatch, SetStateAction, useState } from "react";
import { FoodType } from "../../types/type";

type FoodCartContextType = {
  foodCart: { food: FoodType; quantity: number }[];
  setFoodCart: Dispatch<SetStateAction<{ food: FoodType; quantity: number }[]>>;
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
    { food: FoodType; quantity: number }[]
  >([]);

  return (
    <FoodCartContext.Provider value={{ foodCart, setFoodCart }}>
      {children}
    </FoodCartContext.Provider>
  );
}
