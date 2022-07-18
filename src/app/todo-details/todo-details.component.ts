import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css'],
})
export class TodoDetailsComponent {
  todo!: Todo;

  constructor(private route: ActivatedRoute, private todoService: TodoService) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.todo = this.getTodo(id);
  }

  getTodo(id: number) {
    return this.todoService.get(id);
  }
}
