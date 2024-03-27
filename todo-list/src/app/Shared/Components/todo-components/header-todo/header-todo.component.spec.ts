import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTodoComponent } from './header-todo.component';

describe('HeaderTodoComponent', () => {
  let component: HeaderTodoComponent;
  let fixture: ComponentFixture<HeaderTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderTodoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
