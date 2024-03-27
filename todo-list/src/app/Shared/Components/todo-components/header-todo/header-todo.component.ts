import {Component, Inject} from '@angular/core';
import { ServiceAuthService} from "../../../Services/auth-service/service-auth.service";
import {User} from "../../../../intefaces/name";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header-todo',
  standalone: true,
  imports: [],
  templateUrl: './header-todo.component.html',
  styleUrl: './header-todo.component.scss'
})
export class HeaderTodoComponent {
  constructor(private authService: ServiceAuthService,
              private readonly router: Router) {}
  public currentUser = this.authService.user;

  public logout() {
    this.authService.logout();
    this.router.navigate(['']);
  }
}
