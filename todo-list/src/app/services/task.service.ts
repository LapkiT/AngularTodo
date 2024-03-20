import { Injectable } from '@angular/core';

export interface ITodo {
  id: number,
  title: string
  // Другие свойства, если есть
}
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  public myTodo: Array<ITodo> = [
  ];

  public addTodo(id: number) {
      this.myTodo = this.myTodo.filter(todo => todo.id !== id)
  }
}
