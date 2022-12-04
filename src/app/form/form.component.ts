import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SmsData } from '../shared/interfaces/sms-data.interface';
import { ChartService } from '../shared/services/chart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  protected formGroup: FormGroup;

  constructor(private chartService: ChartService, private snackBar: MatSnackBar) {
    this.formGroup = new FormGroup({
      date: new FormControl(null, [Validators.required]),
      count: new FormControl(null, [Validators.required, Validators.min(0), Validators.pattern(/^\d+$/)]),
    });
  }

  protected submit(): void {
    if (!this.formGroup.valid) return;
    const addSmsData: SmsData = {
      ...this.formGroup.value['date'],
      count: +this.formGroup.value['count']
    };

    this.formGroup.reset();
    this.formGroup.markAsUntouched();
    this.chartService.setData(addSmsData);
    this.snackBar.open('Dodano dane', undefined, {
      duration: 3000
    });
  }
}
