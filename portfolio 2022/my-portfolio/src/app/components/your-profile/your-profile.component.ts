import { UserInterfaceService } from './../../inteface/user-interface.service';
import { ServicioOscuroService } from 'src/app/servicios/servicio-oscuro.service';
import { Component,  OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-your-profile',
  templateUrl: './your-profile.component.html',
  styleUrls: ['./your-profile.component.css']
})
export class YourProfileComponent implements OnInit {
  oscuro:boolean=false;
  constructor(private servicioOscuroService: ServicioOscuroService, private userInterfaceService: UserInterfaceService) {  }
 public datosUsuarios:Array<any>=[]
  ocultar:boolean=false;

  ngOnInit(): void {

    this.userInterfaceService.disparadoDeUsuarios.subscribe(user=>{
      // this.datosUsuarios=user;
      this.datosUsuarios.push(user)
      console.log("datos", this.datosUsuarios)
      console.log("valuees", user)
    })

    this.servicioOscuroService.enviarColoresObservable.subscribe(color =>{
      this.oscuro=color;       
    });
  }

  estilo()
  {
    
    this.oscuro=!this.oscuro
    // this.cambioColor();
    console.log(this.oscuro);

  }

  oculto(){
    this.ocultar=!this.ocultar
  }
 

}
