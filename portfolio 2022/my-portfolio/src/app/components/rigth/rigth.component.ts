import { HojaDeVidaComponent } from './../hoja-de-vida/hoja-de-vida.component';
import { transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioOscuroService } from 'src/app/servicios/servicio-oscuro.service';

@Component({
  selector: 'app-rigth',
  templateUrl: './rigth.component.html',
  styleUrls: ['./rigth.component.css']
})
export class RigthComponent implements OnInit {

  recoger: boolean=false;
  oscuro: boolean=false;
  // cambioColor: any;
  constructor(private servicioOscuroService: ServicioOscuroService, private router: Router) { }
  

  ngOnInit(): void {
    this.servicioOscuroService.enviarColoresObservable.subscribe(color =>{
      this.oscuro=color;       
    })
  }
 
  

  
  firstBody(){
    
    this.router.navigate(["firstBody"])
  }
  

  contraer(){
    this.recoger=!this.recoger;
    console.log(this.recoger)
  }

  formulario(){
    this.router.navigate(["formulario"])
  }

  hojadeVida(){
      this.router.navigate(["hojaDeVida"])
  }
  cambioColor(){
    this.servicioOscuroService.enviarColores(this.oscuro)//se puede usar sola si no se va a necesitar mas e irira en la linea 30
  }

  estilo()
  {
    
    this.oscuro=!this.oscuro
    // this.cambioColor();
    console.log(this.oscuro);

  }

  
}
