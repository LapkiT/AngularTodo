import { Injectable } from '@angular/core';
import {EventValue, FilterTaskT, TaskTyp, TaskTypes} from "../intefaces/name";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: TaskTyp[] = [];
  filteredTask: TaskTyp[] = this.tasks;
  private _isTaskIncludes(taskName: string, target: string) {
    return taskName.toLowerCase().includes(target.toLowerCase());
  }
  addTask(title: string, selectValue = TaskTypes.Regular): void {
    if (!title) return;

    this.tasks = [
      ...this.tasks,
      { id: (this.tasks.length+1), title, selectValue, Flag: false },
    ];

    this.filteredTask = this.tasks;
  }

  private _getIntersectionOf(arr1: TaskTyp[], arr2: TaskTyp[]) {
    return [arr1, arr2].reduce((acc, arr) => {
      return acc.filter((res) => arr.find((value) => value.id === res.id));
    });
  }


  checkTask(id: number) {
    this.tasks = this.tasks.map((task) =>
      task.id === id ? { ...task, Flag: !task.Flag } : task
    );
    this.filteredTask = this._getIntersectionOf(
      this.tasks,
      this.filteredTask
    );
  }

  filterTask(searchParams: EventValue): void {
    console.log(searchParams)
    if (!searchParams) {
      console.log("1")
      this.filteredTask = this.tasks;
      return;
    }

    if (
      !searchParams.title &&
      searchParams.taskType === FilterTaskT.All
    ) {
      console.log("2", searchParams.title, searchParams.taskType, FilterTaskT.All)
      this.filteredTask = this.tasks;
      console.log(this.filteredTask)
      return;
    }

    if (searchParams.taskType === FilterTaskT.All) {
      console.log("3")
      this.filteredTask = this.tasks.filter((task) =>
        this._isTaskIncludes(task.title, searchParams.title)
      );

      return;
    }

    if (searchParams.taskType === FilterTaskT.Checked) {
      console.log("4")
      this.filteredTask = this.tasks.filter(
        (task) =>
          this._isTaskIncludes(task.title, searchParams.title) &&
          task.Flag
      );

      return;
    }



    this.filteredTask = this.tasks.filter(
      (task) =>
        this._isTaskIncludes(task.title, searchParams.title) &&
        task.selectValue === searchParams.taskType
    );
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.filteredTask = this._getIntersectionOf(
      this.tasks,
      this.filteredTask
    );
  }
}
