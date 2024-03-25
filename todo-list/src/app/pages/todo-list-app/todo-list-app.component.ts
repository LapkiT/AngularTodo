import {ChangeDetectionStrategy, Component} from '@angular/core';
import {EventValue} from "../../intefaces/name";
import {TodoListComponent} from "../../modules/Components/todo-list/todo-list.component";
import {SearchPanelComponent} from "../../modules/Components/search-panel/search-panel.component";
import {TodoInputComponent} from "../../modules/Components/todo-input/todo-input.component";

@Component({
  selector: 'app-todo-list-app',
  standalone: true,
  imports: [
    TodoListComponent,
    SearchPanelComponent,
    TodoInputComponent
  ],
  templateUrl: './todo-list-app.component.html',
  styleUrl: './todo-list-app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListAppComponent {
  newTask!: EventValue;
  taskParams!: EventValue;
  setNewTask(newTask: EventValue): void {
    if (!newTask) return;
    this.newTask = newTask;
  }
  searchTasks(taskParams: EventValue): void {
    this.taskParams = taskParams;
  }
}
