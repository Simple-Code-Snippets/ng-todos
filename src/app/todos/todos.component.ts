import { Component } from '@angular/core';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {
    this.todos = this.todoService.todos;
  }

  onAdd(task: string) {
    const todo: Todo = {
      task: task,
      isDone: false,
    };
    this.todoService.add(todo);
  }
}
