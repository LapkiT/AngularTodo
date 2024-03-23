import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TaskTypes} from "../../intefaces/name";

@Component({
  selector: 'app-dropdown-list-type',
  standalone: true,
  imports: [],
  templateUrl: './dropdown-list-type.component.html',
  styleUrl: './dropdown-list-type.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownListTypeComponent implements OnInit {
  @Input() isTaskImportant!: boolean;
  dropDownText!: string;
  buttonText!: string;

  @Output() changeTaskTypeEvent = new EventEmitter<TaskTypes>();
  changeTaskType() {
    const newTaskType = this.isTaskImportant
      ? TaskTypes.Regular
      : TaskTypes.Important;

    this.changeTaskTypeEvent.emit(newTaskType);
  }
  ngOnInit(): void {
    console.log(this.isTaskImportant)
    this.dropDownText = this.isTaskImportant ? 'Обычное' : 'Важное';
    this.buttonText = this.isTaskImportant ? 'Важное' : 'Обычное'
  }
}
