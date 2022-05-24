import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';

const redirectUnauthorizedToLanding = () => redirectUnauthorizedTo(['/']);

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../landing/landing.module').then(m => m.LandingModule)
  },
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule),
        canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLanding }
      },
      {
        path: 'report',
        loadChildren: () => import('../report/report.module').then(m => m.ReportPageModule),
        canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLanding }
      },
      {
        path: 'my-reports',
        loadChildren: () => import('../my-reports/my-reports.module').then(m => m.MyReportsPageModule),
        canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLanding }
      }
    ],
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLanding }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
