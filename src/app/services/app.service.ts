import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Drinks } from '../models/drinks.interface';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  public getRandomDrink(): Observable<Drinks> {
    return this.http.get<Drinks>(
      'https://www.thecocktaildb.com/api/json/v1/1/random.php'
    );
  }

  public getIngredientsList(): Observable<{
    drinks: { strIngredient1: string }[];
  }> {
    return this.http.get<{ drinks: { strIngredient1: string }[] }>(
      'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list'
    );
  }

  public getDrinksByIngredientName(ingredient: string): Observable<Drinks> {
    return this.http.get<Drinks>(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
  }

  public getDrinkById(id: number | string): Observable<Drinks> {
    return this.http.get<Drinks>(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
  }
}
