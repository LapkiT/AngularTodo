import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FilterTaskT, TaskTypes} from "../../intefaces/name";
import {NgForOf} from "@angular/common";
@Component({
  selector: 'app-select-type',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    ReactiveFormsModule
  ],
  templateUrl: './select-type.component.html',
  styleUrl: './select-type.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectTypeComponent {
  @Input() taskTypesValues!: string[];
  @Input() control!: FormControl<TaskTypes | FilterTaskT | null>;
  @Input() form!: FormGroup;
    protected readonly FormGroup = FormGroup;
}
