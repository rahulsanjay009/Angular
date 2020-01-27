import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistermentorComponent } from './registermentor.component';

describe('RegistermentorComponent', () => {
  let component: RegistermentorComponent;
  let fixture: ComponentFixture<RegistermentorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistermentorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistermentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
