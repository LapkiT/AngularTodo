import { Injectable } from '@angular/core';
import {EventValue, TaskTyp, TaskTypes} from "../intefaces/name";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: TaskTyp[] = [];
  filteredTask: TaskTyp[] = this.tasks;

  addTask(title: string, selectValue = TaskTypes.Regular): void {
    if (!title) return;

    this.tasks = [
      ...this.tasks,
      { id: (this.tasks.length+1), title, selectValue, Flag: false },
    ];

    this.filteredTask = this.tasks;
  }

  filterTask(searchParams: EventValue) {
    if (!searchParams) {
      this.filteredTask = this.tasks;
      return;
    }
  }

}
