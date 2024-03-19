import { Component, Input, OnInit  } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  fromParent?: string;
}
