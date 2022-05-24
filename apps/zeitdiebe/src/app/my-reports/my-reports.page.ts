/* eslint-disable @angular-eslint/component-selector */
/* eslint-disable @angular-eslint/component-class-suffix */
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ReportService } from '../services/report.service';

@Component({
  selector: 'app-my-reports',
  templateUrl: 'my-reports.page.html',
  styleUrls: ['my-reports.page.scss']
})
export class MyReportsPage implements OnInit {
  showModal = false;
  modalReport = null;
  uid = null;

  constructor(private _authService: AuthService, public reportService: ReportService) {}

  ngOnInit(){
    if(this._authService.user){
      this._authService.user.subscribe((user) => {
        console.log(user);
        this.reportService.getReportsOfUser(user.user._delegate.uid);
        this.uid = user.user._delegate.uid;
      });
    }
  }

  get authService(){
    return this._authService;
  }

  openReportModal(report){
    this.modalReport = report;
    this.showModal = true;
  }

  closeReportModal($event){
    this.modalReport = null;
    this.showModal = false;
  }
}
