import {Component, inject, OnDestroy} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {ServiceAuthService} from "../../../Services/auth-service/service-auth.service";
import {logUser} from "../../../../intefaces/name";
import {Router, RouterLink} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-index-auth',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './index-auth-pages.component.html',
  styleUrl: './index-auth-pages.component.scss'
})
export class IndexAuthPagesComponent implements OnDestroy  {
  loginUser!: logUser;
  router = inject(Router)
  private subscription: Subscription | null = null;
  constructor(public authService: ServiceAuthService) {
  }
  loginForm = new FormGroup({
      email: new FormControl('jim@dundermifflin.com'),
      password: new FormControl('password'),
      fio: new FormControl('fio')
    }
  )

  public login() {
     this.loginUser = {
       email: this.loginForm.value.email,
       password: this.loginForm.value.password,
       fio: this.loginForm.value.fio
     } as logUser
    this.loginForm.reset();
    this.submit(this.loginUser)
  }

  public submit(value: logUser) {
      this.authService
        .login(value)
        .subscribe((result) => {
          console.log(result)
          if (result) {
            this.router.navigate(['/todo']);
          } else {
            alert("Возможно введены некорректные данные!");
          }
        })
  }

  ngOnDestroy(): void {
    //отписываемся от потока, чтобы избежать утечек памяти
    if (this.subscription) this.subscription.unsubscribe();
  }
}
