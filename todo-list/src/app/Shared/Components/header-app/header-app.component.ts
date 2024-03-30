import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-header-app',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './header-app.component.html',
  styleUrl: './header-app.component.scss'
})
export class HeaderAppComponent {

}
