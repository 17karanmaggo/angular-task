import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Router, RouterModule } from '@angular/router';
import { AdminRoutes } from './admin.routing';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes)
  ],
  exports:[RouterModule]
})
export class AdminModule { }
