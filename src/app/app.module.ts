import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AreachartComponent } from './areachart/areachart.component';
import { DashboardTableComponent } from './dashboard-table/dashboard-table.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpPageComponent,
    SignInPageComponent,
    SidebarComponent,
    DashboardComponent,
    AreachartComponent,
    DashboardTableComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
