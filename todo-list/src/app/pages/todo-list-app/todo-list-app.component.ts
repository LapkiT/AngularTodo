import {ChangeDetectionStrategy, Component} from '@angular/core';
import {EventValue} from "../../intefaces/name";
import {TodoListComponent} from "../../Shared/Components/todo-components/todo-list/todo-list.component";
import {SearchPanelComponent} from "../../Shared/Components/todo-components/search-panel/search-panel.component";
import {TodoInputComponent} from "../../Shared/Components/todo-components/todo-input/todo-input.component";
import {HeaderTodoComponent} from "../../Shared/Components/todo-components/header-todo/header-todo.component";

@Component({
  selector: 'app-todo-list-app',
  standalone: true,
  imports: [
    TodoListComponent,
    SearchPanelComponent,
    TodoInputComponent,
    HeaderTodoComponent
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
