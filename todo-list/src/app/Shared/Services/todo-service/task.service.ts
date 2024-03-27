import { Injectable } from '@angular/core';
import {EventValue, FilterTaskT, TaskTyp, TaskTypes} from "../../../intefaces/name";
import {Observable, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private httpClient: HttpClient) {}
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
      this.filteredTask = this.tasks.filter((task) =>
        this._isTaskIncludes(task.title, searchParams.title)
      );

      return;
    }

    if (searchParams.taskType === FilterTaskT.Checked) {
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
  changeTask(changedTask: TaskTyp): void {
    this.tasks = this.tasks.map((task) =>
      task.id === changedTask.id ? changedTask : task
    );

    this.filteredTask = this._getIntersectionOf(
      this.tasks,
      this.filteredTask
    );
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.filteredTask = this._getIntersectionOf(
      this.tasks,
      this.filteredTask
    );
  }

  public fetchTasks(): Observable<TaskTyp[]> {
    return this.httpClient.get<TaskTyp[]>('assets/todo-list.json').pipe(
      tap((response: TaskTyp[]) => {
        this.tasks = response;
        this.filteredTask = response;
      })
    );
  }
}
