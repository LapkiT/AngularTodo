import {Component, Input} from '@angular/core';
import {TaskType} from "../../intefaces/name";
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input() task!: TaskType;
}
