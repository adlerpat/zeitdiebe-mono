import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ReportPage } from './report.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ReportRoutingModule } from './report-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ReportRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ReportPage]
})
export class ReportPageModule {}
