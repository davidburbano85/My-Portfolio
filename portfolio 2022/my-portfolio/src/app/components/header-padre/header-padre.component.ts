import { ServicioOscuroService } from './../../servicios/servicio-oscuro.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-padre',
  templateUrl: './header-padre.component.html',
  styleUrls: ['./header-padre.component.css']
})
export class HeaderPadreComponent implements OnInit {
oscuro: boolean=false;
  constructor(private servicioOscuroService: ServicioOscuroService) { }


  ngOnInit(): void {
   
  }
  cambioColor(){
    this.servicioOscuroService.enviarColores(this.oscuro)//se puede usar sola si no se va a necesitar mas e irira en la linea 30
  }

  estilo()
  {
    // if (this.oscuro) {
    //   this.oscuro=false
    // } else {
    //   this.oscuro=true
    
    // }
    this.oscuro=!this.oscuro
    this.cambioColor();
    console.log(this.oscuro);

  }
}
