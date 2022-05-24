import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mock } from './statistics.mock';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  statisticsSource$: Observable<any>;

  constructor() { }

  refreshStatistics(){
    this.statisticsSource$ = of(mock);
  }
}
