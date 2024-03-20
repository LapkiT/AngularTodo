import {Component, Input, input, output} from '@angular/core';
import { TaskService } from '../../services/task.service'
import {TaskType} from "../../intefaces/name";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {

  constructor(
    public TaskService: TaskService
  ) { }
  tasks = this.TaskService
  @Input() set newTask(taska: TaskType) {
    if (!taska) return;
    this.tasks.addTask(taska.id, taska.title, taska.selectValue, taska.flag)
  }
}
