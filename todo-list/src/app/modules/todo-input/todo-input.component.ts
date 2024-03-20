import {Component, EventEmitter, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {count} from "rxjs";
@Component({
  selector: 'app-todo-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-input.component.html',
  styleUrl: './todo-input.component.scss'
})
export class TodoInputComponent {
  count: number = 0;
  newTodo:string = '';
  selectValues: string = 'Выберите тип'
  @Output() outEnterTask = new EventEmitter<any>();
  constructor() {
  }
  enterName(nameInput: HTMLInputElement) {
    this.outEnterTask.emit({id: this.count++, title: this.newTodo, selectValue: this.selectValues, flag: false} );
    nameInput.value = '';
  }
}
