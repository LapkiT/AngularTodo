import {Component, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {SelectTypeComponent} from "../select-type/select-type.component";
import {EventValue, FilterTaskT} from "../../../../intefaces/name";

@Component({
  selector: 'app-search-panel',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    SelectTypeComponent
  ],
  templateUrl: './search-panel.component.html',
  styleUrl: './search-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchPanelComponent {
  searchForm = new FormGroup({
    title: new FormControl(''),
    taskType: new FormControl<FilterTaskT | null>(FilterTaskT.All),
  });
  taskTypesValues = Object.values(FilterTaskT);

  @Output() searchQueryEvent = new EventEmitter<EventValue>();

  searchTasks() {
    this.searchQueryEvent.emit(this.searchForm.value as EventValue);
    this.searchForm.get('title')?.reset('');
  }
}
