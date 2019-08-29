import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Potatoes', 10),
    new Ingredient('Sugar', 5)
  ];

  constructor() { }

  ngOnInit() {
  }

  addIngredient(event: {name: string, amount: number}) {
    this.ingredients.push(new Ingredient(event.name, event.amount));

  }

}
