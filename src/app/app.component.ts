import { Component } from '@angular/core';
import {ParentModule} from "./modules/parent/parent.module";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    ParentModule
  ],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app';
}
