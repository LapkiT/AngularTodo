import {ChangeDetectionStrategy, Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TodoListAppComponent} from "./pages/todo-list-app/todo-list-app.component";
import {IndexAuthPagesComponent} from "./Shared/Components/auth/index-auth/index-auth-pages.component";
import {HeaderAppComponent} from "./Shared/Components/header-app/header-app.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoListAppComponent, IndexAuthPagesComponent, HeaderAppComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'todo-list';
}
