import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownListTypeComponent } from './dropdown-list-type.component';

describe('DropdownListTypeComponent', () => {
  let component: DropdownListTypeComponent;
  let fixture: ComponentFixture<DropdownListTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownListTypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DropdownListTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
