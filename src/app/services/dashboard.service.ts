import { Injectable, signal } from '@angular/core';
import { DashboardStat } from '../models/dashboard-stat.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  dashboardStats = signal<DashboardStat[]>([]);

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
