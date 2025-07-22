"use client";

import { createContext, useContext, useState } from "react";
import { FoodType } from "../../types/type";

export type FoodWithQuantity = {
  food: FoodType;
  quantity: number;
  price: number;
};

type FoodCartContextType = {
  foodCart: FoodWithQuantity[];
  addToCart: (_food: FoodWithQuantity) => void;
  removeFromCart: (_foodId: string) => void;
  incrementFoodQuantity: (_foodId: string) => void;
  decrimentFoodQuantity: (_foodId: string) => void;
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

  const addToCart = (newFood: FoodWithQuantity) => {
    const existingFood = foodCart.find(
      ({ food }) => food._id === newFood.food._id
    );

    if (existingFood) {
      const updatedFoodCart = updateFoodCart(foodCart, newFood);
      setFoodCart(updatedFoodCart);
      return;
    }
    setFoodCart([...foodCart, newFood]);
  };

  const incrementFoodQuantity = (foodId: string) => {
    const updatedFoodCart = foodCart.map(({ food, quantity, price }) => {
      if (food._id === foodId) {
    
        return {
          food: food,
          quantity: quantity + 1,
          price: quantity * Number(food.price),
        };
      } else {
        return {
          food,
          quantity,
          price,
        };
      }
    });
    setFoodCart(updatedFoodCart);
  };

  const decrimentFoodQuantity = (foodId: string) => {
    const updatedFoodCart = foodCart.map(({ food, quantity, price }) => {
      if (food._id === foodId) {
        return {
          food: food,
          quantity: quantity - 1,
          price: (quantity - 1) * food.price,
        };
      } else {
        return {
          food,
          quantity,
          price,
        };
      }
    });

    setFoodCart(updatedFoodCart);
  };
   

  const removeFromCart = (id: string) => {
    setFoodCart((prev) => prev.filter((item) => item.food._id !== id));
  };

  return (
    <FoodCartContext.Provider
      value={{
        foodCart,
        addToCart,
        removeFromCart,
        incrementFoodQuantity,
        decrimentFoodQuantity,
      }}
    >
      {children}
    </FoodCartContext.Provider>
  );
}

export const useFoodCart = () => useContext(FoodCartContext);

const updateFoodCart = (
  foodCart: FoodWithQuantity[],
  newFood: FoodWithQuantity
) => {
  const updatedFoodCart = foodCart.map(({ food, quantity, price }) => {
    if (food._id === newFood.food._id) {
      return {
        food: food,
        quantity: quantity + newFood.quantity,
        price: quantity * Number(food.price),
      };
    } else {
      return {
        food,
        price,
        quantity,
      };
    }
  });
  return updatedFoodCart;
};
