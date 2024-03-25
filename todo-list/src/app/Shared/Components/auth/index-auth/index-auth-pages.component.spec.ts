import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexAuthPagesComponent } from './index-auth-pages.component';

describe('IndexAuthPagesComponent', () => {
  let component: IndexAuthPagesComponent;
  let fixture: ComponentFixture<IndexAuthPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexAuthPagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndexAuthPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
