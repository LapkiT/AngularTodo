import { Routes } from '@angular/router';
import {TodoListAppComponent} from "./pages/todo-list-app/todo-list-app.component";
import {IndexAuthPagesComponent} from "./Shared/Components/auth/index-auth/index-auth-pages.component";
import {authGuard} from "./Shared/Guard/CanActivate-auth/auth.guard";
import {AboutComponent} from "./Shared/Components/about/about.component";
import {RegisterComponent} from "./Shared/Components/register/register.component";
import {headerGuard} from "./Shared/Guard/CanActivate-header/header.guard";

export const routes: Routes = [
  {path: 'todo', component: TodoListAppComponent, canActivate: [authGuard]},
  {path: '', component: IndexAuthPagesComponent, canActivate: [headerGuard]},
  {path: 'about', component: AboutComponent},
  {path: 'register', component: RegisterComponent, canActivate: [headerGuard]}
];
