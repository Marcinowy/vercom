import { Component, Input } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { LineChartConfig } from '../../interfaces/line-chart-config.interface';

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [NgChartsModule],
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent<T> {

  protected readonly lineChartData: ChartConfiguration<'line'>['data'] = this.getInitialChartData();
  protected readonly lineChartOptions: ChartOptions<'line'> = this.getChartOptions();
  private config?: LineChartConfig<T>;

  @Input()
  set values(values: T[] | null) {
    if (!values || !this.config) return;

    this.lineChartData.labels = [];
    this.lineChartData.datasets[0].data = [];
    values.map((el: T) => {
      this.lineChartData.labels!.push(this.config!.getLabel(el));
      this.lineChartData.datasets[0].data.push(this.config!.getValue(el));
    });
  }

  @Input()
  set chartConfig(config: LineChartConfig<T>) {
    this.config = config;
    this.lineChartData.datasets[0].label = config.label
  }

  private getInitialChartData(): ChartConfiguration<'line'>['data'] {
    return {
      labels: [],
      datasets: [
        {
          data: [],
          label: '',
          fill: true,
          tension: 0.5,
          borderColor: 'white',
          backgroundColor: 'rgba(0,255,0,0.3)',
        }
      ],
    };
  }

  private getChartOptions(): ChartOptions<'line'> {
    return {
      scales: {
        x: {
          ticks: {
            color: '#ffffff',
          },
          grid: {
            display: false,
          },
        },
        y: {
          grace: 5,
          beginAtZero: true,
          ticks: {
            color: '#ffffff',
            precision: 0,
          },
          grid: {
            drawBorder: false,
            color: 'rgba(255,255,255,.3)'
          }
        },
      },
    };
  }

}
