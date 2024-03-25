import {ChangeDetectionStrategy, Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TodoListAppComponent} from "./pages/todo-list-app/todo-list-app.component";
import {IndexAuthPagesComponent} from "./auth/components/index-auth-pages/index-auth-pages.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoListAppComponent, IndexAuthPagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'todo-list';
}
