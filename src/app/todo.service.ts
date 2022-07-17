import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = [];

  constructor() {}

  add(todo: Todo) {
    this.todos.push(todo);
  }
}
