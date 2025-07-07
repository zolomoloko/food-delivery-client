export type Category = {
  _id: string;
  categoryName: string;
  cleatedAt: string;
  updatedAt: string;
  __v: number;
  foods: Food[]
  count: number
};

export type Food = {
  _id: string;
  foodName: string;
  price: number; 
  image: string;
  ingredients: string;
  category: string;
  __v: number;
};

export type FoodItem = {
  foodName: string;
  price: number; 
  image: string;
  ingredients: string;
}


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