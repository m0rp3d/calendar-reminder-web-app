import { TestBed } from '@angular/core/testing';

import { RetrieveReminderService } from './retrieve-reminder.service';

describe('RetrieveReminderService', () => {
  let service: RetrieveReminderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetrieveReminderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
