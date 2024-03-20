import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service'
import {NgForOf} from "@angular/common";
@Component({
  selector: 'app-todo-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-input.component.html',
  styleUrl: './todo-input.component.scss'
})
export class TodoInputComponent {
  constructor(
    public TaskService: TaskService
  ) { }

  newTodo: string = '';

  addTodo() {
    if (this.newTodo.trim() !== '') {
      this.TaskService.myTodo.push({id: (this.TaskService.myTodo.length + 1), title: this.newTodo})
      this.newTodo = '';
    }
  }
}
