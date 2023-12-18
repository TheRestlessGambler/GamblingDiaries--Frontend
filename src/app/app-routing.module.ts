import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignUpPageComponent} from './sign-up-page/sign-up-page.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AreachartComponent } from './areachart/areachart.component';
import { DashboardTableComponent } from './dashboard-table/dashboard-table.component';

const routes: Routes = [ {path: '',component: SignUpPageComponent},{path:'signin',component: SignInPageComponent},{path: 'signup',component:SignUpPageComponent},{path: 'dashboard', component: DashboardComponent},{path: 'chart',component:AreachartComponent},{path: 'dashboard-table',component:DashboardTableComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
