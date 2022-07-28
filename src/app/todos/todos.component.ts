import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  todos$!: Observable<Todo[]>;

  constructor(private todoService: TodoService) {
    this.todos$ = this.todoService.getAll();
  }

  onAdd(task: string) {
    const todo: Todo = {
      id: Date.now(),
      task: task,
      isDone: false,
    };
    this.todoService.add(todo);
  }
}
