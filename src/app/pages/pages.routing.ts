import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';

const routs:Routes =[
  {
    path:'dashboard',
    component:PagesComponent,
    children:[
      {path:'', component: DashboardComponent},
      {path:'progress',  component: ProgressComponent},
      {path:'grafica1',  component: Grafica1Component}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routs)
  ],
  exports:[RouterModule]
})
export class PagesRoutingModule { }
