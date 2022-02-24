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
import { DailyChartComponent } from './dashboard/right-section/daily-chart/daily-chart.component';
import { UserSubscriptionChartComponent } from './dashboard/right-section/user-subscription-chart/user-subscription-chart.component';
import { CompairUsersChartComponent } from './dashboard/right-section/compair-users-chart/compair-users-chart.component';
import { TopVideoComponent } from './dashboard/left-section/top-video/top-video.component';
import { TopGamesComponent } from './dashboard/left-section/top-games/top-games.component';
import { TopAppsComponent } from './dashboard/left-section/top-apps/top-apps.component';
import { TabLoadingComponent } from './_layout/skeleton-loading/tab-loading/tab-loading.component';
import { BoxLoadingComponent } from './_layout/skeleton-loading/tab-loading/box-loading/box-loading.component';
// other
import { SplitDigitPipe } from './pipe/split-digits';
import { HighchartsChartModule } from 'highcharts-angular';
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
    TopVideoComponent,
    TopGamesComponent,
    TopAppsComponent,
    TabLoadingComponent,
    BoxLoadingComponent,

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
