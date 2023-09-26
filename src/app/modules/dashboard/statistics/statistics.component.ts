import { Component, ViewEncapsulation } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StatisticsComponent {
  public barChartLegend = false;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ 'Hogar', 'Oficina', 'Centro comercial', 'Gasolina' ],
    datasets: [
      {
        label: 'Ubicaciones',
        data: [ 70, 50, 30, 90 ],
        backgroundColor: [
          'rgba(153, 102, 255, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgb(153, 102, 255)',
          'rgb(75, 192, 192)',
          'rgb(153, 102, 255)',
          'rgb(75, 192, 192)',
        ],
        borderWidth: 1,
      },
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {};

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ],
    datasets: [
      {
        data: [ 92, 94, 97, 95, 93, 96, 95, 93, 96, 98, 96, 94 ],
        label: 'Aciertos',
        fill: false,
        tension: 0.5,
        borderColor: 'rgb(153, 102, 255)',
        backgroundColor: 'rgba(255,0,0,0.3)'
      }
    ],
  };
  public lineChartOptions: ChartOptions<'line'> = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Alarmas exitosas (%)'
        }
      },
    }
  };
  public lineChartLegend = false;

  constructor(){}
}

