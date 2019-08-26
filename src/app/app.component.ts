import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showRecipes = true;
  showShoppingList = false;

  onViewChange(event: { recipe: boolean, shopping: boolean }) {
    console.log(event);
    this.showRecipes = event.recipe;
    this.showShoppingList = event.shopping;
  }
}
