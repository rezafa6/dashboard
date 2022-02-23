import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
// ui components
import { HeaderComponent } from './_layout/header/header.component';
import { SidebarComponent } from './_layout/sidebar/sidebar.component';
import { LayoutComponent } from './_layout/layout.component';
import { LeftSectionComponent } from './dashboard/left-section/left-section.component';
import { RightSectionComponent } from './dashboard/right-section/right-section.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FirstRowBoxesComponent } from './dashboard/right-section/first-row-boxes/first-row-boxes.component';
import { SecondRowBoxesComponent } from './dashboard/right-section/second-row-boxes/second-row-boxes.component';
// pipes
import { SplitDigitPipe } from './pipe/split-digits';
import { HighchartsChartModule } from 'highcharts-angular';
import { DailyChartComponent } from './dashboard/right-section/daily-chart/daily-chart.component';
import { UserSubscriptionChartComponent } from './dashboard/right-section/user-subscription-chart/user-subscription-chart.component';
import { CompairUsersChartComponent } from './dashboard/right-section/compair-users-chart/compair-users-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    LayoutComponent,
    RightSectionComponent,
    LeftSectionComponent,
    DashboardComponent,
    FirstRowBoxesComponent,
    SplitDigitPipe,
    SecondRowBoxesComponent,
    DailyChartComponent,
    UserSubscriptionChartComponent,
    CompairUsersChartComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
