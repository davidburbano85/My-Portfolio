import { Component, OnInit } from '@angular/core';
import { ServicioOscuroService } from 'src/app/servicios/servicio-oscuro.service';

@Component({
  selector: 'app-first-body',
  templateUrl: './first-body.component.html',
  styleUrls: ['./first-body.component.css']
})
export class FirstBodyComponent implements OnInit {
oscuro:boolean= false;
ocultar: boolean= false;
ocultar1: boolean= false;
ocultar2: boolean= false;
  constructor(private servicioOscuroService: ServicioOscuroService) { }

  ngOnInit(): void {
    this.servicioOscuroService.enviarColoresObservable.subscribe(color =>{
      this.oscuro=color;       
    })

  }

  /******* FUNCION MODO OSCURO**********/
  estilo(){
        this.oscuro=!this.oscuro
  }


show(){
  this.ocultar=!this.ocultar
}

show1(){
  this.ocultar1=!this.ocultar1
}

show2(){
  this.ocultar2=!this.ocultar2
}


}
