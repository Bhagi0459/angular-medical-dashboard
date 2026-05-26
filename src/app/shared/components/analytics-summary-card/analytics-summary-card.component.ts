import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-analytics-summary-card',
  templateUrl: './analytics-summary-card.component.html',
  styleUrl: './analytics-summary-card.component.scss',
})
export class AnalyticsSummaryCardComponent {
  @Input() title: string = '';

  @Input() percentage: number = 0;

  @Input() trend: 'up' | 'down' = 'up';
}
