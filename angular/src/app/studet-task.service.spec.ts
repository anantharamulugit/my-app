import { TestBed } from '@angular/core/testing';

import { StudetTaskService } from './studet-task.service';

describe('StudetTaskService', () => {
  let service: StudetTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudetTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
