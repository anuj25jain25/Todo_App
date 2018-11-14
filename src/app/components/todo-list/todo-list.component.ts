import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

export interface TodoInterface {
  title: string;
  status: boolean;
  time?: string;
}


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  list: TodoInterface[] = [
    {
      title: 'Buy Chocolate',
      status: false
    },
    {
      title: 'Buy teddy',
      status: false
    },
    {
      title: 'Study for SMCS',
      status: false
    }
  ];

  completedList: TodoInterface[] = [];

  constructor() { }

  ngOnInit() {
  }

  public selectItem(item: TodoInterface) {
    console.log(item);
    if (item.status === false) {
      item.status = true;
    } else {
      item.status = false;
    }
    console.log(this.list);
  }

}
