import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginmenteeComponent } from './loginmentee.component';

describe('LoginmenteeComponent', () => {
  let component: LoginmenteeComponent;
  let fixture: ComponentFixture<LoginmenteeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginmenteeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginmenteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
