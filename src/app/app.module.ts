import { DrinkItemComponent } from './drink-item/drink-item.component';
import { AppRoutingModule } from './app-routing.module';
import { SideNavComponent } from './layout/side-nav/side-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { VegaComponentModule } from '@heartlandone/vega-angular';

import { AppComponent } from './app.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DrinksPageComponent } from './pages/drinks-page/drinks-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DrinkItemComponent,
    DrinksPageComponent,
    FooterComponent,
    IngredientComponent,
    SideNavComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    VegaComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
