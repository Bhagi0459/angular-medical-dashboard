import { Component, Input } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  NgApexchartsModule,
} from 'ng-apexcharts';

@Component({
  selector: 'app-patient-chart',
  imports: [NgApexchartsModule],
  templateUrl: './patient-chart.component.html',
  styleUrl: './patient-chart.component.scss',
})
export class PatientChartComponent {
  @Input() series: number[] = [];

  @Input() categories: string[] = [];

  chartOptions: any = {};

  ngOnInit() {
    this.chartOptions = {
      series: [
        {
          name: 'Patients',
          data: this.series,
        },
      ],

      chart: {
        type: 'line',
        height: 350,
        toolbar: {
          show: false,
        },
      },

      stroke: {
        curve: 'smooth',
      },

      xaxis: {
        categories: this.categories,
      },
    };
  }
}
