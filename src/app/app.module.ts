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
import { SplitDigitPipe } from './pipe/split-digits';
// pipes

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
    SplitDigitPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
