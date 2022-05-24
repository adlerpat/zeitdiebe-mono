/* eslint-disable @angular-eslint/component-selector */
/* eslint-disable @angular-eslint/component-class-suffix */
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Report } from 'src/models/report.model';
import { AuthService } from '../services/auth.service';
import { ReportService } from '../services/report.service';
import { types, repercussions, vkus } from './report-options';

@Component({
  selector: 'app-report',
  templateUrl: 'report.page.html',
  styleUrls: ['report.page.scss']
})
export class ReportPage {

  reportObj: FormGroup;
  manualChangesFiles: any;

  constructor(private authService: AuthService, private reportService: ReportService) {
    this.reportObj = new FormGroup({
      vku: new FormControl(''),
      type: new FormControl(''),
      minutes: new FormControl(''),
      repercussions: new FormControl(''),
      line: new FormControl(''),
      city: new FormControl('')
    });
  }

  get types(){
    return types;
  }

  get repercussions(){
    return repercussions;
  }

  get vkus(){
    return vkus;
  }

  report(): void {
    this.authService.user.subscribe((user) => {
      const reportData: Report =
      {
        vku: this.reportObj.controls.vku.value,
        type: this.reportObj.controls.type.value,
        minutes: this.reportObj.controls.minutes.value,
        repercussions: this.reportObj.controls.repercussions.value,
        line: this.reportObj.controls.line.value,
        city: this.reportObj.controls.city.value,
        uid: 'user/' + user.user._delegate.uid
      };

      this.reportService.createReportForUser(reportData, user.user._delegate.uid, this.manualChangesFiles);
    }
    );
  }

  onFileSelected(event) {
    console.log(event.target.files[0]);
    this.manualChangesFiles = event.target.files[0]; 
  }

}
