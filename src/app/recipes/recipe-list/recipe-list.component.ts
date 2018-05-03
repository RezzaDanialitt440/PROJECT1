import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();


recipes: Recipe[] = [
  new Recipe('Nasi Lemak' , 'Best in Town', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Nasi_Lemak%2C_Mamak%2C_Sydney.jpg/1200px-Nasi_Lemak%2C_Mamak%2C_Sydney.jpg'),
  new Recipe('Meggi Goreng' , 'Instant in 2 Minutes', 'https://demwvw9lpu8ak.cloudfront.net/attachments/3143065c6217885993275311bb8de810d5449550/store/fill/1000/500/bd1a3b102c5a182c8dcd8fa03e63dee3e9aa0b7b6c05da04bcb1fc358540/featured_image.jpg')
]
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);

  }

}
