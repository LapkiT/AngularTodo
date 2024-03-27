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

export enum role{
  admin ="ADMIN",
  user = "USER"
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

export interface logUser {
  email: string,
  password: string,
  fio: string
}

export interface AuthResponse {
  token: string;
}

export interface User {
  email: string,
  "id": number,
  "roles": [
    {
      "id": number,
      "name": role,
      "createdAt": string,
      "updatedAt": string,
      "UserRole": {
        "id": number,
        "userId": number,
        "roleId": number,
        "createdAt": string,
        "updatedAt": string
      }
    }
  ],
  "iat": number,
  "exp": number
}
