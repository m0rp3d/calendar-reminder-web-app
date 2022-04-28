import { TestBed } from '@angular/core/testing';

import { AddReminderService } from './add-reminder.service';

describe('AddReminderService', () => {
  let service: AddReminderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddReminderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
