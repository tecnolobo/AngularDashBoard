
import { Component, EventEmitter, Input, Output,OnInit } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  ngOnInit(): void {
    this.classbtn = `btn ${this.classbtn}`;
  }

  @Input('valor') progreso:number = 50;//15
  @Input() classbtn:string = 'btn-primary';//15
  

  @Output() valorSalida:EventEmitter<number> = new EventEmitter();
   

  cambiarValor(valor:number){
    // if(this.progreso==0 || this.progreso==100)    return ;
    if(this.progreso >=100 && valor >0){
      this.progreso = 100;
      this.valorSalida.emit(100);
      return ;
    }
    if(this.progreso==0 && valor <0){
      this.progreso=0;
      this.valorSalida.emit(0);
      return;
    }

    this.progreso = this.progreso + valor;
    this.valorSalida.emit(this.progreso);
  }

  onChange(valor:number){

    if(valor>=100){
      this.progreso =100;
    }else if(valor<=0) {
      this.progreso=0;
    }else{
      this.progreso=valor;
    }

    this.valorSalida.emit(this.progreso);
  }


}
