import { Component } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  todos: Todo[] = [];

  onAdd(task: string) {
    const todo: Todo = {
      task: task,
      isDone: false,
    };
    this.todos.push(todo);
  }
}
