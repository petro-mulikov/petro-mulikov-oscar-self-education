import { map } from 'rxjs';
import { DrinkService } from './../services/drink.service';
import { Drinks } from './../models/drinks.interface';
import { Drink } from './../models/drink.interface';
import { Observable, Subject, tap } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { AppService } from './../services/app.service';
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { DrinkDTO } from '../models/drink-dto';

@Component({
  selector: 'app-drink-item',
  templateUrl: './drink-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrinkItemComponent implements OnInit {
  public drinkItem$!: Observable<DrinkDTO>;

  constructor(
    private appService: AppService,
    private drinkService: DrinkService
  ) {}

  ngOnInit(): void {
    this.drinkItem$ = this.appService
      .getRandomDrink()
      .pipe(map((data) => this.drinkService.createDrinkDTO(data)));
  }

  public onGetDrinkClick(): void {
    this.drinkItem$ = this.appService
      .getRandomDrink()
      .pipe(map((data) => this.drinkService.createDrinkDTO(data)));
  }
}
