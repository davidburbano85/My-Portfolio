import { Usuarios } from './../../inteface/data.interface';
import { UserInterfaceService } from './../../inteface/user-interface.service';
import { ServicioOscuroService } from 'src/app/servicios/servicio-oscuro.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-mis-seguidores',
  templateUrl: './mis-seguidores.component.html',
  styleUrls: ['./mis-seguidores.component.css']
})

export class MisSeguidoresComponent  implements OnInit {
 public users:Array<any>=[]
 
 

  constructor(private servicioOscuroService: ServicioOscuroService, private userInterfaceService: UserInterfaceService) { }

  ngOnInit(): void {
    this.servicioOscuroService.getUser().subscribe(user=>{
      this.users=user
      console.log("seguidores",this.users)
    })
  }

 onClickDelete(usuario:Usuarios) {
 this.servicioOscuroService.deleteUser(usuario)
    
     
  }
alert(){
  alert("hola")
}

}


