import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent implements OnInit {
 
  @Input() titulo:string = 'Sin titulo';
  @Input('colores') colors:string[]=['red','yellow','blue'];
  @Input('lables') lables:string[]= [ 'Download Salesss', 'In-Store Sales', 'Mail-Order Sales' ];
  @Input() datas:number[]= [ 350, 450, 180 ];
 

 // Doughnut
public doughnutChartData: ChartData<'doughnut'> = {
   labels: this.lables,
   datasets: [{
    data: this.datas,
    backgroundColor:this.colors
     //{ data: [ 50, 150, 120 ] },
     //{ data: [ 250, 130, 70 ] }
    }]
  };
 //public doughnutChartType: ChartType = 'doughnut';


  ngOnInit(): void {
    this.doughnutChartData.labels = this.lables;
    this.doughnutChartData.datasets[0].data = this.datas;
    this.doughnutChartData.datasets[0].backgroundColor = this.colors;

  }




}
