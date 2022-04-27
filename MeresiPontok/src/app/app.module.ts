import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeresipontComponent } from './meresipont/meresipont.component';
import { SzenzorComponent } from './meresipont/szenzor/szenzor.component';
import { MeresipontFormComponent } from './meresipont-form/meresipont-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgApexchartsModule } from "ng-apexcharts";
import { HibaComponent } from './meresipont/hiba/hiba.component';
import { MyChartComponent } from './meresipont/my-chart/my-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    MeresipontComponent,
    SzenzorComponent,
    MeresipontFormComponent,
    HibaComponent,
    MyChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
