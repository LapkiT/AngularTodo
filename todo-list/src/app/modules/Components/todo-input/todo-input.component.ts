import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import {SelectTypeComponent} from "../select-type/select-type.component";
import {TaskTypes} from "../../../intefaces/name";
@Component({
  selector: 'app-todo-input',
  standalone: true,
  imports: [
    SelectTypeComponent,
    ReactiveFormsModule
  ],
  templateUrl: './todo-input.component.html',
  styleUrl: './todo-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoInputComponent {
  @Output() outEnterTask = new EventEmitter<any>();
  constructor() {
  }
  taskForm = new FormGroup({
    title: new FormControl(''),
    taskType: new FormControl<TaskTypes>(TaskTypes.Regular),
  });
  taskTypesValues = Object.values(TaskTypes);

  addNewTask() {
    this.outEnterTask.emit({
      title: this.taskForm.value.title as string,
      taskType: this.taskForm.value.taskType as TaskTypes,
    });

    Object.keys(this.taskForm.controls).forEach((key: string): void => {
      if (key === 'taskType') {
        this.taskForm.controls.taskType.setValue(TaskTypes.Regular);
      } else {
        this.taskForm.get(key)!.reset();
      }
    });
  }
}
