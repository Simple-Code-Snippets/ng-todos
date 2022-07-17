import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent {
  task = new FormControl('', [Validators.required, Validators.minLength(7)]);
  @Output() sendTask = new EventEmitter<string>();

  onAdd() {
    if (this.task.status === 'INVALID') {
      console.log('Invalid input!');
    } else {
      this.sendTask.emit(this.task.value!);
      this.task.patchValue('');
    }
  }
}
