import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";
import { Meres } from 'src/app/models/meres';
import { HomeroService } from 'src/app/services/homero.service';
import { MeresService } from 'src/app/services/meres.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};
@Component({
  selector: 'app-my-chart',
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.css']
})
export class MyChartComponent {

  
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: ChartOptions;

  meres: Meres[] = [];


  constructor() {
    /*
    this.meres.push({
      homeroid: 1,
      mertertek: 5,
    });
    */
    
    /*
    setInterval(() => {
      const datas = this.meres;
      this.chartOptions.series = [{
        data: datas.map(data => data.mertertek)
      }]
    }, 5000);
    */
  }
  
  makeChart(datas: Meres[]) {
    this.chartOptions = {
      series: [
        {
          name: "Mért értékek",
          data: []
        }
      ],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "Mérések",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5
        }
      },
      xaxis: {}
    }

    this.chartOptions.series = [{
      data: datas.map(data => data.mertertek)
    }]
  }
}
