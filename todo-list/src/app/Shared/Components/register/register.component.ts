import {Component, inject, OnDestroy} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {logUser} from "../../../intefaces/name";
import {Subscription} from "rxjs";
import {ServiceAuthService} from "../../Services/auth-service/service-auth.service";

@Component({
  selector: 'app-register',
  standalone: true,
    imports: [
        ReactiveFormsModule,
        RouterLink
    ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnDestroy  {
  registerUser!: logUser;
  private subscription: Subscription | null = null;
  constructor(public authService: ServiceAuthService) {
  }
  registerForm = new FormGroup({
      email: new FormControl('jim@dundermifflin.com'),
      password: new FormControl('password'),
      fio: new FormControl('fio')
    }
  )

  public register() {
    this.registerUser = {
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      fio: this.registerForm.value.fio
    } as logUser
    this.registerForm.reset();
    this.submit(this.registerUser)
  }

  public submit(value: logUser) {
    this.authService
      .register(value)
      .subscribe((result) => {
        console.log(result)
        if (result) {
          alert("Пользователь создан")
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
