import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginmentorComponent } from './loginmentor.component';

describe('LoginmentorComponent', () => {
  let component: LoginmentorComponent;
  let fixture: ComponentFixture<LoginmentorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginmentorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginmentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
