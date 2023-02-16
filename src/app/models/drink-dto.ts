import { Ingredient } from './ingredient.interface';

export interface DrinkDTO {
  idDrink: string;
  alcoholic?: string;
  category?: string;
  drinkTitle: string;
  imageUrl: string;
  glass?: string;
  instruction?: string;
  fullIngredients: Ingredient[];
}
