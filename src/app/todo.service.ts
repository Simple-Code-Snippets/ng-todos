import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, interval, map, Observable, of } from 'rxjs';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  url = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {}

  add(todo: Todo) {
    // this.todos.push(todo);
  }

  get(id: number) {
    // return this.todos.find((todo) => todo.id === id)!;
  }

  getAll(): Observable<Todo[]> {
    return this.http.get(this.url).pipe(
      map((_data) => {
        let data: [] = _data as [];
        return data.map((todo) => ({
          id: todo['id'],
          task: todo['title'],
          isDone: todo['completed'],
        }));
      })
    );
  }
}
