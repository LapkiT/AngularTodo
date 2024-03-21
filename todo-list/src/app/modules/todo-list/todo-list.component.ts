import {Component, Input, input, output} from '@angular/core';
import { TaskService } from '../../services/task.service'
import {EventValue, TaskTyp, TaskTypes} from "../../intefaces/name";
import {NgForOf} from "@angular/common";
import {TaskComponent} from "../task/task.component";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    NgForOf,
    TaskComponent
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {

  constructor(
    public TaskService: TaskService
  ) { }
  tasks = this.TaskService;
  private _filteredTasks = this.tasks.filteredTask;

  @Input() set newTask(taska: EventValue) {
    if (!taska) return;

    this.tasks.addTask(taska.title, taska.taskType as TaskTypes);
    this._filteredTasks = this.tasks.filteredTask;
  }
  @Input() set filteredTasks(searchParams: EventValue) {
    this.tasks.filterTask(searchParams);
    this._filteredTasks = this.tasks.filteredTask;
  }

  get filteredTasks(): TaskTyp[] {
    return this._filteredTasks;
  }
}
