import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TaskTyp, TaskTypes} from "../../intefaces/name";
import {NgForOf} from "@angular/common";
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input() task!: TaskTyp;

  isTaskImportant!: boolean;

  @Output() taskChangeEvent = new EventEmitter<TaskTyp>();
  @Output() taskDeleteEvent = new EventEmitter<string>();
  @Output() taskCheckEvent = new EventEmitter<number>();

  ngOnInit(): void {
    this.isTaskImportant = this.task.selectValue === TaskTypes.Important;
  }

  changeTaskType(newTaskType: TaskTypes): void {
    const updatedTask = { ...this.task, taskType: newTaskType };

    this.taskChangeEvent.emit(updatedTask);
  }

  checkTask(id: number) {
    this.taskCheckEvent.emit(id);
  }

  protected readonly Number = Number;
}
