import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderUpdatedSuccessComponent } from './reminder-updated-success.component';

describe('ReminderUpdatedSuccessComponent', () => {
  let component: ReminderUpdatedSuccessComponent;
  let fixture: ComponentFixture<ReminderUpdatedSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReminderUpdatedSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReminderUpdatedSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
