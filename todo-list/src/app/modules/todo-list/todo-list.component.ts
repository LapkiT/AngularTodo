import {Component, input, output} from '@angular/core';
import { TaskService } from '../../services/task.service'
import {NgClass, NgForOf} from "@angular/common";
@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    NgForOf,
    NgClass
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  constructor(
    public TaskService: TaskService
  ) { }
  deleteTodo(id: number) {
    this.TaskService.myTodo = this.TaskService.myTodo.filter((t) => t.id !== id);
  }

}
