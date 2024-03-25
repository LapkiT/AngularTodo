import { Routes } from '@angular/router';
import {TodoListAppComponent} from "./pages/todo-list-app/todo-list-app.component";
import {IndexAuthPagesComponent} from "./Shared/Components/auth/index-auth/index-auth-pages.component";

export const routes: Routes = [
  {path: 'todo', component: TodoListAppComponent},
  {path: '', component: IndexAuthPagesComponent}
];
