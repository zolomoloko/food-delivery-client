export type Category = {
  _id: string;
  categoryName: string;
  cleatedAt: string;
  updatedAt: string;
  __v: number;
  foods: Food[];
};

export type Food = {
  _id: string;
  foodName: string;
  price: number;
  image: string;
  ingredients: string;
  category: CategoryType;
  __v: number;
  quantity: number;
  createdAt: string;
  updatedAt: string;
};

export type FoodItem = {
  foodName: string;
  price: number;
  image: string;
  ingredients: string;
  _id: string;
};

export type FoodType = {
  _id: string;
  foodName: string;
  price: number;
  image: string;
  ingredients: string;
  createdAt: string;
  updatedAt: string;
  category: CategoryType;
};

export type CategoryType = {
  _id: string;
  categoryName: string;
  createdAt: string;
  updatedAt: string;
};
