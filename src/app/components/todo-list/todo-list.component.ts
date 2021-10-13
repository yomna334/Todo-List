import { Component, OnInit } from '@angular/core';
import { TodoItem } from 'src/app/shared/models/todoItem';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  name: string;
  item: TodoItem
  public items: Array<TodoItem> = [];
filterdItems:number
  constructor() { }

  ngOnInit(): void {
    this.filterdItems=0
    this.name = '';
    this.item = {
      name: '', isDone: false
    }
    this.filterdItems=this.items.length
  }
  public getRemainingCount() {

    this.filterdItems= this.items.filter(item => !item.isDone).length;

  }

  public add() {
    this.items.push(this.item)
    this.name=''
    this.item = {
      name: '', isDone: false
    }
    this.filterdItems=this.items.length
  }

  public toggleItem(item: TodoItem) {
    item.isDone = !item.isDone;
    this.item.isDone=item.isDone
   this.getRemainingCount()
  }

}
