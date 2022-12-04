import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SmsData } from '../interfaces/sms-data.interface';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  private readonly smsData: Record<number, SmsData> = {};
  private readonly smsDataSubject: BehaviorSubject<SmsData[]> = new BehaviorSubject<SmsData[]>([]);
  readonly smsData$: Observable<SmsData[]> = this.smsDataSubject.asObservable();

  constructor() { }


  setData(data: SmsData): void {
    const index: number = data.year * 12 + data.month;
    const currentCount: number = this.smsData[index]?.count || 0;

    data.count += currentCount;
    this.smsData[index] = data;

    this.smsDataSubject.next(Object.values(this.smsData));
  }
}
