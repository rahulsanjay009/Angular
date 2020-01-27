import { TestBed } from '@angular/core/testing';

import { MenteeService } from './mentee.service';

describe('MenteeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MenteeService = TestBed.get(MenteeService);
    expect(service).toBeTruthy();
  });
});
