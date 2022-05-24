/* eslint-disable @angular-eslint/component-selector */
/* eslint-disable @angular-eslint/component-class-suffix */
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { StatisticsService } from '../services/statistics.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  statisticsSource$: Observable<any>;

  constructor(private statisticsService: StatisticsService, public authService: AuthService) {
    statisticsService.refreshStatistics();
    this.statisticsSource$ = statisticsService.statisticsSource$;
    console.log(this.statisticsSource$);
  }

}
