import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartRoutingModule } from './chart-routing.module';
import { ChartComponent } from './chart.component';
import { LineChartComponent } from '../shared/components/line-chart/line-chart.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    ChartComponent
  ],
  imports: [
    CommonModule,
    ChartRoutingModule,
    LineChartComponent,
    MatCardModule
  ]
})
export class ChartModule { }
