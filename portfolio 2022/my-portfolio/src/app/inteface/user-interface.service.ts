import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserInterfaceService {
@Output() disparadorDeUsuarios: EventEmitter<any>= new EventEmitter

  id?: string;
  email: string="";
  password: string="";
  nombre: string="";
  apellido: string="";
  organizacion: string="";
  


  constructor() { }
}