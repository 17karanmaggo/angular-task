import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";

export const AdminRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
    
      
];
@NgModule({
    declarations:[],
    imports:[
        CommonModule
    ]
})
export class AdminRoutingModule{}