import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElementBarChartComponent } from './components/element-bar-chart/element-bar-chart.component';
import { ElementDoughnutChartComponent } from './components/element-doughnut-chart/element-doughnut-chart.component';
import { ElementRadarChartComponent } from './components/element-radar-chart/element-radar-chart.component';
import { ElementPieChartComponent } from './components/element-pie-chart/element-pie-chart.component';
import { ElementListComponent } from './components/element-list/element-list.component';
import { ElementTableComponent } from './components/element-table/element-table.component';
import { ElementFileUploadComponent } from './components/element-file-upload/element-file-upload.component';
import { ElementFormManDataUpComponent } from './components/element-form-man-data-up/element-form-man-data-up.component';
import { ElementFileUploadInformationComponent } from './components/element-file-upload-information/element-file-upload-information.component';
import { ElementDialogTableComponent } from './components/element-dialog-table/element-dialog-table.component';
import { ElementFileLogComponent } from './components/element-file-log/element-file-log.component';


const routes: Routes = [
  {path: 'element-list', component: ElementListComponent},
  {path: 'element-table', component: ElementTableComponent},
  {path: 'bar-chart', component: ElementBarChartComponent},
  {path: 'doughnut-chart', component: ElementDoughnutChartComponent},
  {path: 'radar-chart', component: ElementRadarChartComponent},
  {path: 'pie-chart', component: ElementPieChartComponent},
  {path: 'file-upload', component: ElementFileUploadComponent},
  {path: 'form-man-data-up', component: ElementFormManDataUpComponent},
  {path: 'file-upload-information', component: ElementFileUploadInformationComponent},
  {path: 'file-log', component: ElementFileLogComponent},
  {path: '**', component: ElementListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
