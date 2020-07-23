import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-element-radar-chart',
  templateUrl: './element-radar-chart.component.html',
  styleUrls: ['./element-radar-chart.component.css']
})
export class ElementRadarChartComponent implements OnInit {

  public radarChartLabels = ['Q1', 'Q2', 'Q3', 'Q4'];
  public radarChartData = [
    {data: [120, 130, 180, 70], label: '2017'},
    {data: [90, 150, 200, 45], label: '2018'}
  ];
  public radarChartType = 'radar';

  constructor() { }

  ngOnInit(): void {
  }

}
