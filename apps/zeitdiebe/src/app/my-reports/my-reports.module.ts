import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyReportsPage } from './my-reports.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { MyReportsRoutingModule } from './my-reports-routing.module';
import { ReportDetailModalComponent } from './report-detail-modal/report-detail-modal.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: MyReportsPage }]),
    MyReportsRoutingModule,
  ],
  declarations: [MyReportsPage, ReportDetailModalComponent]
})
export class MyReportsPageModule {}
