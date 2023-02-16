import { DrinkDTO } from './../../models/drink-dto';
import { Drink } from './../../models/drink.interface';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { VegaTableCreateElementFunction } from '@heartlandone/vega';
import { map, tap } from 'rxjs';
import { AppService } from 'src/app/services/app.service';
import { DrinkService } from 'src/app/services/drink.service';

@Component({
  selector: 'app-drinks-page',
  templateUrl: './drinks-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrinksPageComponent implements OnInit {
  public showModal = false;
  public drinkItem?: DrinkDTO;
  public dataSource: Drink[] = [];
  public columns = [
    {
      label: 'Name',
      prop: 'strDrink',
    },
    {
      label: 'Image',
      prop: 'strDrinkThumb',
      align: 'center',
      render: (
        createElement: VegaTableCreateElementFunction,
        value: string
      ) => {
        return createElement(`img`, {
          src: value,
          alt: value,
          class: 'v-w-size-80',
        });
      },
    },
    {
      label: 'Action',
      align: 'center',
      render: (
        createElement: VegaTableCreateElementFunction,
        value: any,
        record: any
      ) => {
        return createElement(
          'vega-button',
          {
            class: 'v-min-w-min vega-flex-shrink-0',
            danger: 'vega-danger',
            onVegaClick: () => {
              this.appService
                .getDrinkById(value)
                .pipe(
                  map((data) => this.drinkService.createDrinkDTO(data)),
                  tap((val) => {
                    this.drinkItem = val;
                    this.showModal = true;
                    this.cdr.markForCheck();
                  })
                )
                .subscribe();
            },
          },
          'More Detail'
        );
      },
    },
  ];

  public ingredientsList: { id: string; displayName: string }[] = [];

  constructor(
    private cdr: ChangeDetectorRef,
    private appService: AppService,
    private drinkService: DrinkService
  ) {}

  ngOnInit(): void {
    this.appService
      .getIngredientsList()
      .pipe(
        map((data) =>
          data.drinks.map((drink, index): any => ({
            id: index.toString(),
            displayName: drink.strIngredient1,
          }))
        ),
        tap((val) => (this.ingredientsList = val))
      )
      .subscribe();
  }

  public onSelectChange(e: any): void {
    const ingredient = this.ingredientsList[e.currentTarget.value].displayName;

    this.appService
      .getDrinksByIngredientName(ingredient)
      .pipe(
        tap((data) => {
          this.dataSource = data.drinks;
          this.cdr.markForCheck();
        })
      )
      .subscribe();
  }

  public onCloseClick(): void {
    this.showModal = false;
  }
}
