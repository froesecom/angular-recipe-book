import { Component, OnInit, ViewChild, EventEmitter, ElementRef, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<{name: string, amount: number}>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
   const name = this.nameInputRef.nativeElement.value;
   const amount = this.amountInputRef.nativeElement.value;

   this.ingredientAdded.emit({name, amount});
  }


}
