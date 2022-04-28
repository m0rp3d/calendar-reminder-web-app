import { TestBed } from '@angular/core/testing';

import { PassMonthDataService } from './pass-month-data.service';

describe('PassMonthDataService', () => {
  let service: PassMonthDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassMonthDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
