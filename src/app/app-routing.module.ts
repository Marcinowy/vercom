import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './chart/components/chart/chart.component';
import { FormComponent } from './form/components/form/form.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/form' },
  {
    path: 'chart',
    component: ChartComponent,
  },
  {
    path: 'form',
    component: FormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
