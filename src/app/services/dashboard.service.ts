import { Injectable, signal } from '@angular/core';
import { DashboardStat } from '../models/dashboard-stat.model';
import { ChartData } from '../models/chart-data.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  dashboardStats = signal<DashboardStat[]>([]);

  patientChartData = signal<ChartData>({
    series: [],
    categories: [],
  });

  revenueChartData = signal<ChartData>({
    series: [],
    categories: [],
  });

  criticalCasesChartData = signal<ChartData>({
    series: [],
    categories: [],
  });

  isLoading = signal(true);

  constructor() {
    setTimeout(() => {
      this.dashboardStats.set([
        {
          title: 'Total Patients',
          value: '1,245',
        },
        {
          title: 'Active Reports',
          value: '328',
        },
        {
          title: 'Appointments',
          value: '89',
        },
        {
          title: 'Critical Cases',
          value: '14',
        },
      ]);

      this.patientChartData.set({
        series: [120, 150, 170, 140, 190, 220],
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      });

      this.revenueChartData.set({
        series: [40, 55, 65, 80, 95, 120],
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      });

      this.criticalCasesChartData.set({
        series: [12, 18, 10, 15, 8, 6],
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      });

      this.isLoading.set(false);
    }, 3000);
  }

  increasePatientCount() {
    this.dashboardStats.update((stats) => {
      return stats.map((stat) => {
        if (stat.title === 'Total Patients') {
          return {
            ...stat,
            value: '1,300',
          };
        }

        return stat;
      });
    });
  }
}
