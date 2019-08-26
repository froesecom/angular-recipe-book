import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Pie',
               'It\'s a pie',
               'https://media.istockphoto.com/photos/whole-cherry-pie-picture-id535475493?k=6&m=535475493&s=612x612&w=0&h=yyG800xq7-noeZMUuCcSvieN_Pq7k_hY6y7AbISmz-s=')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
