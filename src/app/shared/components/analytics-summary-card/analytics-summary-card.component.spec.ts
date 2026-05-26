import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsSummaryCardComponent } from './analytics-summary-card.component';

describe('AnalyticsSummaryCardComponent', () => {
  let component: AnalyticsSummaryCardComponent;
  let fixture: ComponentFixture<AnalyticsSummaryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyticsSummaryCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyticsSummaryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
