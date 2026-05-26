import { Component } from '@angular/core';
import { StatCardComponent } from '../../shared/components/stat-card/stat-card.component';
import { DashboardService } from '../../services/dashboard.service';
import { DashboardStat } from '../../models/dashboard-stat.model';
import { PatientChartComponent } from '../../shared/components/patient-chart/patient-chart.component';
import { AnalyticsSummaryCardComponent } from '../../shared/components/analytics-summary-card/analytics-summary-card.component';

@Component({
  selector: 'app-dashboard',
  imports: [StatCardComponent, PatientChartComponent, AnalyticsSummaryCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  dashboardStats: DashboardStat[] = [];

  constructor(public dashboardService: DashboardService) {}
}
