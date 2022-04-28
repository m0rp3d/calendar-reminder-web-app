import { TestBed } from '@angular/core/testing';

import { GuardRoutesGuard } from './guard-routes.guard';

describe('GuardRoutesGuard', () => {
  let guard: GuardRoutesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardRoutesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
