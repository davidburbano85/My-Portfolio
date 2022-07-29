import { transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ServicioOscuroService } from 'src/app/servicios/servicio-oscuro.service';

@Component({
  selector: 'app-rigth',
  templateUrl: './rigth.component.html',
  styleUrls: ['./rigth.component.css']
})
export class RigthComponent implements OnInit {

  recoger: boolean=false;
  oscuro: boolean=false;
  cambioColor: any;
  constructor(private servicioOscuroService: ServicioOscuroService) { }


  ngOnInit(): void {
    this.servicioOscuroService.enviarColoresObservable.subscribe(color =>{
      this.oscuro=color;    

      
    })
  }
  
  contraer(){
    this.recoger=!this.recoger;
    
    console.log(this.recoger)
  }
  
}
