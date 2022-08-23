import { ServicioOscuroService } from 'src/app/servicios/servicio-oscuro.service';
import { EventEmitter, Injectable, Input, Output } from '@angular/core';


@Injectable({
  providedIn: 'root',
})

export class UserInterfaceService {
  @Output() disparadoDeUsuarios: EventEmitter<any> = new EventEmitter();
  


  constructor(private servicioOscuroService: ServicioOscuroService) { }
}