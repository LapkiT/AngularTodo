import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TodoListComponent} from "./modules/todo-list/todo-list.component";
import {TodoInputComponent} from "./modules/todo-input/todo-input.component";
import {TaskType} from "./intefaces/name";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoListComponent, TodoInputComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todo-list';
  newTask!: TaskType;

  setNewTask(newTask: any): void {
     if (!newTask) return;
     console.log(this.newTask);
     this.newTask = newTask;
  }
}
