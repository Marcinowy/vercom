import { Component } from '@angular/core';
import { SmsData } from '../shared/interfaces/sms-data.interface';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {
  protected data: SmsData[] = [];
}
