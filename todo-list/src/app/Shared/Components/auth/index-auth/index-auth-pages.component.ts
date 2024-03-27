import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-index-auth',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './index-auth-pages.component.html',
  styleUrl: './index-auth-pages.component.scss'
})
export class IndexAuthPagesComponent {
  loginForm = new FormGroup({
      email: new FormControl('jim@dundermifflin.com'),
      password: new FormControl('password'),
      fio: new FormControl('fio')
    }
  )
}
