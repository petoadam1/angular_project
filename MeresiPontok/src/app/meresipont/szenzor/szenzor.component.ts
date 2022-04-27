import { getLocaleDateFormat } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Homero } from 'src/app/models/homero';
import { Meres } from 'src/app/models/meres';
import { HomeroService } from 'src/app/services/homero.service';
import { MyChartComponent } from '../my-chart/my-chart.component';

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
  selector: 'app-szenzor',
  templateUrl: './szenzor.component.html',
  styleUrls: ['./szenzor.component.css']
})
export class SzenzorComponent {

  @Input()
  homero!: Homero;

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: ChartOptions;

  constructor(private homeroService: HomeroService, private formBuilder: FormBuilder ) {
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
  }

  //private chart!: MyChartComponent;
  

  /*
  async saveHomero() {
    try {
      
      const homero = await this.homeroService.deleteHomero(this.homeroForm.value);
    } catch (err) {
      console.error(err);
    }
  }
  */
  // variable to store our intervalID

BtnGreen: boolean = false;

shit: any;
datas: Meres[] = [];
/*
setInterval(() => {
  const datas = this.service.getMeres();
  this.chartOptions.series = [{
    data: datas.map(data => data.mertertek)
  }]
}, 5000);
*/

async startHomero(hely: string, id: number, min: number, max: number, alsohiba: number,
  felsohiba: number) {
    this.BtnGreen = true;
    try {
      this.shit = setInterval(() => {
      var value = Math.floor(Math.random() * (max - min + 1)) + min;
      console.log(value);
            
      var meres = {
      homeroid: id,
      mertertek: value
      };
      
      this.datas.push({
        homeroid: id,
        mertertek: value
      });

      this.chartOptions.series = [{
        data: this.datas.map(data => data.mertertek)
      }]
      
      const meresasd = this.homeroService.createMeres(meres);
      
      if (value > felsohiba || value < alsohiba) {
        var hiba = {
        mereshely: hely,
        mertertek: value
      };
      const hibaasd = this.homeroService.createHiba(hiba);
      }
      }, 5000);
    
      } catch (err) {
        console.error(err);
      }
  }

stopHomero() {
  clearInterval(this.shit);
  this.BtnGreen = false;
}

  /*
  deleteHomero(id: number) {
    try {
      const homero = this.homeroService.deleteHomero(id);
    }catch (err) {
      console.error(err);
    }
  }
  */
  

ngOnInit(): void {
}

}
/*
            var value = Math.floor(Math.random() * (max - min + 1)) + min;
            console.log(value);
            
            var meres = {
              homeroid: id,
              mertertek: value
              };
      
            const meresasd = await this.homeroService.createMeres(meres);
      
            if (value > felsohiba || value < alsohiba) {
              var hiba = {
                mereshely: hely,
                mertertek: value
              };
              const hibaasd = await this.homeroService.createHiba(hiba);
            }
            */