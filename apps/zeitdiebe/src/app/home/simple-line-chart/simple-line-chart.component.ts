/* eslint-disable @angular-eslint/component-selector */
/* eslint-disable @angular-eslint/component-class-suffix */
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-simple-line-chart',
  templateUrl: './simple-line-chart.component.html',
  styleUrls: ['./simple-line-chart.component.scss']
})
export class SimpleLineChartComponent implements OnChanges {

  @Input() statisticsSource: any;

  multi: any[];
  view: [number, number] = [400, 300];
  below = LegendPosition.Below;
  

  // options
  legend = true;
  showLabels = true;
  animations = true;
  xAxis = true;
  yAxis = true;
  showYAxisLabel = true;
  showXAxisLabel = true;
  xAxisLabel = 'Day';
  yAxisLabel = 'Value';
  timeline = true;

  constructor() {
    Object.assign(this, this.statisticsSource);
    console.log(this.statisticsSource);
  }

  ngOnChanges(changes: SimpleChanges) {
    // only run when property "data" changed
    if (changes.statisticsSource) {
      this.multi = [...this.statisticsSource];
      console.log(this.statisticsSource);
    }
}

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(this.statisticsSource)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(this.statisticsSource)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(this.statisticsSource)));
  }

}
