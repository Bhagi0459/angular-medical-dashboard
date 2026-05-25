import { Component, Input } from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexStroke,
  NgApexchartsModule,
} from 'ng-apexcharts';

@Component({
  selector: 'app-patient-chart',
  imports: [NgApexchartsModule],
  templateUrl: './patient-chart.component.html',
  styleUrl: './patient-chart.component.scss',
})
export class PatientChartComponent {
  @Input() title: string = '';

  @Input() series: number[] = [];

  @Input() categories: string[] = [];

  @Input() color: string = '#1976d2';

  get chartSeries(): ApexAxisChartSeries {
    return [
      {
        name: this.title,
        data: this.series,
      },
    ];
  }

  chart: ApexChart = {
    type: 'line',
    height: 350,
    toolbar: {
      show: false,
    },
  };

  stroke: ApexStroke = {
    curve: 'smooth',
  };

  xaxis: ApexXAxis = {
    categories: [],
  };
}
