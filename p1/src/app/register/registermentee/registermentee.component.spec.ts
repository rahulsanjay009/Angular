import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistermenteeComponent } from './registermentee.component';

describe('RegistermenteeComponent', () => {
  let component: RegistermenteeComponent;
  let fixture: ComponentFixture<RegistermenteeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistermenteeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistermenteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
