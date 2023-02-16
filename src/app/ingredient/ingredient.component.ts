import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Ingredient } from '../models/ingredient.interface';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IngredientComponent {
  @Input() ingredient!: Ingredient;
}
