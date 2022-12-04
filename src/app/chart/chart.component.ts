import { Component } from '@angular/core';
import { Month } from '../shared/enums/month.enum';
import { LineChartConfig } from '../shared/interfaces/line-chart-config.interface';
import { SmsData } from '../shared/interfaces/sms-data.interface';
import { ChartService } from '../shared/services/chart.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {

  protected readonly chartConfig: LineChartConfig<SmsData> = {
    label: 'Liczba SMSów',
    getLabel: (el: SmsData) => `${Month[el.month]} ${el.year}`,
    getValue: (el: SmsData) => el.count,
  };

  constructor(protected readonly chartService: ChartService) {}
}
