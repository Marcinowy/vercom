import { Component, ViewChild } from '@angular/core';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@gisaia-team/ng-pick-datetime';
import { OwlDateTimeComponent } from '@gisaia-team/ng-pick-datetime/public_api'
import { ControlValueAccessor } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'
import { Month } from '../../enums/month.enum';
import { CalendarDate } from '../../interfaces/calendar-date.interface';

@Component({
  selector: 'app-input-date',
  standalone: true,
  imports: [OwlDateTimeModule, OwlNativeDateTimeModule, MatInputModule],
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.scss']
})
export class InputDateComponent implements ControlValueAccessor {
  @ViewChild('dt1')
  set child(el: OwlDateTimeComponent<unknown>) {
    if (!el) return;

    el.startView = 'year';
    this.datePickerRef = el;
  }
  protected onChange = (value: CalendarDate) => {};
  protected onTouched = () => {};
  protected value: string = '';
  protected disabled: boolean = false;
  private datePickerRef?: OwlDateTimeComponent<unknown>;

  writeValue(value: CalendarDate): void {
    this.value = `${Month[value.month]} ${value.year}`;
    this.onChange(value);
  }

  registerOnChange(fn: (value: CalendarDate) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }

  protected monthSelected(date: Date): void {
    this.datePickerRef && this.datePickerRef.close();

    const month: Month = date.getMonth();
    const year: number = date.getFullYear();

    const calendarDate: CalendarDate = {
      month,
      year
    };
    this.writeValue(calendarDate);
  }

}
