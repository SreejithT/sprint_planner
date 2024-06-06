import { TestBed } from '@angular/core/testing';

import { SprintPlannerService } from './sprint-planner.service';

describe('SprintPlannerService', () => {
  let service: SprintPlannerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SprintPlannerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
