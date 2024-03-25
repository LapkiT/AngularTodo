import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {FilterTaskT, TaskTyp, TaskTypes} from "../../../intefaces/name";
import {NgForOf} from "@angular/common";
import {SelectTypeComponent} from "../select-type/select-type.component";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {DropdownListTypeComponent} from "../dropdown-list-type/dropdown-list-type.component";
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    NgForOf,
    SelectTypeComponent,
    ReactiveFormsModule,
    DropdownListTypeComponent
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskComponent {
  @Input() task!: TaskTyp;
  taskForm = new FormGroup({
    taskType: new FormControl<TaskTypes | null>(TaskTypes.Regular),
  });
  taskTypesValues = Object.values(TaskTypes);

  isTaskImportant!: boolean;

  @Output() taskChangeEvent = new EventEmitter<TaskTyp>();
  @Output() taskDeleteEvent = new EventEmitter<number>();
  @Output() taskCheckEvent = new EventEmitter<number>();

  ngOnInit(): void {
    this.isTaskImportant = this.task.selectValue === TaskTypes.Important;
  }

  changeTaskType(newTaskType: TaskTypes): void {
    const updatedTask = { ...this.task, selectValue: newTaskType };

    this.taskChangeEvent.emit(updatedTask);
  }

  checkTask(id: number) {
    this.taskCheckEvent.emit(id);
  }

  deleteTask(id: number): void {
    this.taskDeleteEvent.emit(id);
  }

  protected readonly Number = Number;
}
