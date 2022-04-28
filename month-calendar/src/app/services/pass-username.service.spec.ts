import { TestBed } from '@angular/core/testing';

import { PassUsernameService } from './pass-username.service';

describe('PassUsernameService', () => {
  let service: PassUsernameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassUsernameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
