export enum TaskTypes {
  Regular = 'Обычное',
  Important = 'Важное',
}

export enum FilterTaskT {
  All = 'Все',
  Regular = 'Обычное',
  Important = 'Важное',
  Checked = 'Выполненное',
}

export interface TaskTyp {
  id: number;
  title: string;
  selectValue: TaskTypes;
  Flag: boolean;
}

export interface EventValue {
  title: string;
  taskType: TaskTypes | FilterTaskT;
}
