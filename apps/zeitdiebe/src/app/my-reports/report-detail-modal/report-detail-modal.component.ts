/* eslint-disable @angular-eslint/component-selector */
/* eslint-disable @angular-eslint/component-class-suffix */
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ReportService } from 'src/app/services/report.service';
import { Report } from 'src/models/report.model';

@Component({
  selector: 'app-report-detail-modal',
  templateUrl: './report-detail-modal.component.html',
  styleUrls: ['./report-detail-modal.component.scss']
})
export class ReportDetailModalComponent implements OnInit {
  @Input() report: Report;
  @Input() userid: string;
  @Output()
  closeModalEvent: EventEmitter<boolean> = new EventEmitter();

  imageSrc: string;

  constructor(public reportService: ReportService) { }

  ngOnInit(): void {
    this.getImageUrl();
  }

  closeModal(){
    this.closeModalEvent.emit(true)
  }

  getImageUrl(){
    if(this.userid && this.report){
      this.reportService.getImageUrl(this.userid, this.report?.proof).then( (url) => {
        this.imageSrc = url;
      });
    }
  }
}
