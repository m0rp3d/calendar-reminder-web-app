import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderAddedSuccessComponent } from './reminder-added-success.component';

describe('ReminderAddedSuccessComponent', () => {
  let component: ReminderAddedSuccessComponent;
  let fixture: ComponentFixture<ReminderAddedSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReminderAddedSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReminderAddedSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
