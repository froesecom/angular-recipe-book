import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  @Output() viewDisplay = new EventEmitter<{recipe: boolean, shopping: boolean}>();
  collapsed = true;

  constructor() { }

  ngOnInit() {
  }

  showRecipeView() {
    console.log('show recipe');
    this.viewDisplay.emit({recipe: true, shopping: false});
  }

  showShoppingView() {
    console.log('show shopping');
    this.viewDisplay.emit({recipe: false, shopping: true});
  }

}
