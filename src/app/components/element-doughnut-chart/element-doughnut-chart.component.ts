import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-element-doughnut-chart',
  templateUrl: './element-doughnut-chart.component.html',
  styleUrls: ['./element-doughnut-chart.component.css']
})
export class ElementDoughnutChartComponent implements OnInit {

  public doughnutChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public doughnutChartData = [120, 150, 180, 90];
  public doughnutChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void {
  }

}
