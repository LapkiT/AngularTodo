import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TodoListComponent} from "./modules/todo-list/todo-list.component";
import {TodoInputComponent} from "./modules/todo-input/todo-input.component";
import {EventValue, TaskTyp} from "./intefaces/name";
import {SearchPanelComponent} from "./modules/search-panel/search-panel.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoListComponent, TodoInputComponent, SearchPanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todo-list';
  newTask!: EventValue;

  setNewTask(newTask: EventValue): void {
     if (!newTask) return;
     console.log(this.newTask);
     this.newTask = newTask;
  }
}
