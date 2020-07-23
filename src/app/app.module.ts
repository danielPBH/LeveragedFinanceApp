import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from "./material/material.module";
import { ReactiveFormsModule,FormsModule } from "@angular/forms"

import { ChartsModule } from 'ng2-charts';

import { NgxFileDropModule } from 'ngx-file-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ElementListComponent } from './components/element-list/element-list.component';
import { ElementService } from './services/element.service';
import { ManualdatauploadService } from './services/manualdataupload.service';
import { ElementTableComponent } from './components/element-table/element-table.component';
import { ElementBarChartComponent } from './components/element-bar-chart/element-bar-chart.component';
import { ElementDoughnutChartComponent } from './components/element-doughnut-chart/element-doughnut-chart.component';
import { ElementRadarChartComponent } from './components/element-radar-chart/element-radar-chart.component';
import { ElementPieChartComponent } from './components/element-pie-chart/element-pie-chart.component';
import { ElementFileUploadComponent } from './components/element-file-upload/element-file-upload.component';
import { ElementFormManDataUpComponent } from './components/element-form-man-data-up/element-form-man-data-up.component';
import { ElementFileUploadInformationComponent } from './components/element-file-upload-information/element-file-upload-information.component';
import { ElementDialogTableComponent } from './components/element-dialog-table/element-dialog-table.component';
import { ElementFileLogComponent } from './components/element-file-log/element-file-log.component';

@NgModule({
  declarations: [
    AppComponent,
    ElementListComponent,
    ElementTableComponent,
    ElementBarChartComponent,
    ElementDoughnutChartComponent,
    ElementRadarChartComponent,
    ElementPieChartComponent,
    ElementFileUploadComponent,
    ElementFormManDataUpComponent,
    ElementFileUploadInformationComponent,
    ElementDialogTableComponent,
    ElementFileLogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    ChartsModule,
    NgxFileDropModule
  ],
  providers: [ElementService, ManualdatauploadService],
  bootstrap: [AppComponent],
  entryComponents:[ElementFileUploadInformationComponent,ElementDialogTableComponent]
})
export class AppModule { }
