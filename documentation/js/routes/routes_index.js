var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"apps/zeitdiebe/src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"","loadChildren":"./tabs/tabs.module#TabsPageModule","children":[{"kind":"module","children":[{"name":"routes","filename":"apps/zeitdiebe/src/app/tabs/tabs-routing.module.ts","module":"TabsPageRoutingModule","children":[{"path":"","loadChildren":"../landing/landing.module#LandingModule","children":[{"kind":"module","children":[{"name":"routes","filename":"apps/zeitdiebe/src/app/landing/landing-routing.module.ts","module":"LandingPageRoutingModule","children":[{"path":"","component":"LandingPage"}],"kind":"module"}],"module":"LandingModule"}]},{"path":"tabs","component":"TabsPage","children":[{"path":"home","loadChildren":"../home/home.module#HomePageModule","canActivate":["AngularFireAuthGuard"],"data":{"authGuardPipe":"redirectUnauthorizedToLanding"},"children":[{"kind":"module","children":[{"name":"routes","filename":"apps/zeitdiebe/src/app/home/home-routing.module.ts","module":"HomePageRoutingModule","children":[{"path":"","component":"HomePage"}],"kind":"module"}],"module":"HomePageModule"}]},{"path":"report","loadChildren":"../report/report.module#ReportPageModule","canActivate":["AngularFireAuthGuard"],"data":{"authGuardPipe":"redirectUnauthorizedToLanding"},"children":[{"kind":"module","children":[{"name":"routes","filename":"apps/zeitdiebe/src/app/report/report-routing.module.ts","module":"ReportRoutingModule","children":[{"path":"","component":"ReportPage"}],"kind":"module"}],"module":"ReportPageModule"}]},{"path":"my-reports","loadChildren":"../my-reports/my-reports.module#MyReportsPageModule","canActivate":["AngularFireAuthGuard"],"data":{"authGuardPipe":"redirectUnauthorizedToLanding"},"children":[{"kind":"module","children":[{"name":"routes","filename":"apps/zeitdiebe/src/app/my-reports/my-reports-routing.module.ts","module":"MyReportsRoutingModule","children":[{"path":"","component":"MyReportsPage"}],"kind":"module"}],"module":"MyReportsPageModule"}]}],"canActivate":["AngularFireAuthGuard"],"data":{"authGuardPipe":"redirectUnauthorizedToLanding"}}],"kind":"module"}],"module":"TabsPageModule"}]}],"kind":"module"}]}
