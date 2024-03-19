import {Component, OnInit} from '@angular/core';
import { ChildComponent } from "../child/child.component";

//функциональный декоратор необходимый для создания компонентов

@Component({
  standalone: true,
  imports: [
    ChildComponent
  ],
  selector: 'app-parent',
  //селектор по которому к компоненту обращаются в других компонентах
  templateUrl: './parent.component.html',
  //ссылка на html файл с разметкой компонента
  styleUrls: ['./parent.component.scss']
  //ссылка на файл со стилями компонента
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //один из хуков жизненноого цикла
  }

  welcome = 'hi from parent'
}
