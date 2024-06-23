import { Component, ViewChild } from '@angular/core';
import { ChartData, ChartEvent, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.css']
})
export class Grafica1Component {
  
  nombeVentas:string ='Ventass';
  lablesVentas:string[] = [ 'Salchipapas', 'Laser frontales', 'Pelucas' ];
  dataVentas:number[] = [ 20, 200, 500 ];
  colorsVentas:string[] = ['blue','red','green'];


}
