import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks = [
    {
      id: 1,
      title: 'Some task 1',
      selectValue: 'Обычное',
      flag: false,
    },
    {
      id: 2,
      title: 'Some task 2',
      selectValue: 'важное',
      flag: false,
    },
  ];

  addTask(id: number, title: string, selectValue: string, flag: boolean): void {
    this.tasks.push({ id, title, selectValue, flag });
  }
}
