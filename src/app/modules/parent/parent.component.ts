import { Component, OnInit } from '@angular/core';
//функциональный декоратор необходимый для создания компонентов

@Component({
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

}
