import { ServicioOscuroService } from 'src/app/servicios/servicio-oscuro.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hoja-de-vida',
  templateUrl: './hoja-de-vida.component.html',
  styleUrls: ['./hoja-de-vida.component.css']
})
export class HojaDeVidaComponent implements OnInit {
  oscuro: boolean=false;

  constructor(private servicioOscuroService: ServicioOscuroService) { }

  ngOnInit(): void {
    this.servicioOscuroService.enviarColoresObservable.subscribe(color =>{
      this.oscuro=color;       
    })

  }
  
  estilo(){
    this.oscuro=!this.oscuro
}

}
