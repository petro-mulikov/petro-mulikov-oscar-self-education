import { Drinks } from './../models/drinks.interface';
import { Injectable } from '@angular/core';
import { Drink } from '../models/drink.interface';
import { Ingredient } from '../models/ingredient.interface';

@Injectable({
  providedIn: 'root',
})
export class DrinkService {
  public createDrinkDTO(data: Drinks) {
    const drinkDTO = {
      idDrink: data.drinks[0].idDrink,
      alcoholic: data.drinks[0].strAlcoholic,
      category: data.drinks[0].strCategory,
      drinkTitle: data.drinks[0].strDrink,
      imageUrl: data.drinks[0].strDrinkThumb,
      glass: data.drinks[0].strGlass,
      instruction: data.drinks[0].strInstructions,
      fullIngredients: this.createIngredientObject(data.drinks),
    };

    return drinkDTO;
  }

  private createIngredientObject(data: Drink[]): Ingredient[] {
    const ingredients: string[] = [];
    const measures: string[] = [];

    Object.keys(data[0]).some((el, index): void => {
      if (el.includes('strIngredient') && Object.values(data[0])[index]) {
        ingredients.push(Object.values(data[0])[index]);
      }
      if (el.includes('strMeasure') && Object.values(data[0])[index]) {
        measures.push(Object.values(data[0])[index]);
      }
    });

    return ingredients.map(
      (ingredient, i): Ingredient => ({
        title: ingredient,
        measure: measures[i],
      })
    );
  }
}
