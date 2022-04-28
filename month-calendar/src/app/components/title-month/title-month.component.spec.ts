import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleMonthComponent } from './title-month.component';

describe('TitleMonthComponent', () => {
  let component: TitleMonthComponent;
  let fixture: ComponentFixture<TitleMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleMonthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
