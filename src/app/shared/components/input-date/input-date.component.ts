import { Component, ViewChild, Input, forwardRef, ElementRef } from '@angular/core';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@gisaia-team/ng-pick-datetime';
import { OwlDateTimeComponent } from '@gisaia-team/ng-pick-datetime/public_api'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatInput, MatInputModule } from '@angular/material/input'
import { Month } from '../../enums/month.enum';
import { CalendarDate } from '../../interfaces/calendar-date.interface';

@Component({
  selector: 'app-input-date',
  standalone: true,
  imports: [OwlDateTimeModule, OwlNativeDateTimeModule, MatInputModule],
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputDateComponent),
      multi: true
    }
  ]
})
export class InputDateComponent implements ControlValueAccessor {
  @Input()
  placeholder: string = '';

  protected onChange = (value: CalendarDate) => {};
  protected onTouched = () => {};
  protected value: string = '';
  protected disabled: boolean = false;
  private datePickerRef?: OwlDateTimeComponent<unknown>;

  @ViewChild('dt1')
  set child(el: OwlDateTimeComponent<unknown>) {
    if (!el) return;

    el.startView = 'year';
    this.datePickerRef = el;
  }

  @ViewChild('inputField')
  private inputFieldRef?: ElementRef;

  writeValue(value?: CalendarDate): void {
    if (!value) {
      this.value = '';
      return;
    }
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
    this.datePickerRef?.close();

    const calendarDate: CalendarDate = {
      month: date.getMonth(),
      year: date.getFullYear(),
    };
    this.writeValue(calendarDate);
  }

  protected inputFocus(): void {
    this.inputFieldRef?.nativeElement.blur();
    !this.disabled && this.datePickerRef?.open();
  }

}
