import { TestBed } from '@angular/core/testing';

import { IsLeapYearService } from './is-leap-year.service';

describe('IsLeapYearService', () => {
  let service: IsLeapYearService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsLeapYearService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
