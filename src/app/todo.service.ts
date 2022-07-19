import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = [];

  constructor(private http: HttpClient) {
    this.http
      .get('https://jsonplaceholder.typicode.com/todos')
      .subscribe((response) => console.log(response));
  }

  add(todo: Todo) {
    this.todos.push(todo);
  }

  get(id: number) {
    return this.todos.find((todo) => todo.id === id)!;
  }
}
