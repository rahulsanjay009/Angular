import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorprofileComponent } from './mentorprofile.component';

describe('MentorprofileComponent', () => {
  let component: MentorprofileComponent;
  let fixture: ComponentFixture<MentorprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
