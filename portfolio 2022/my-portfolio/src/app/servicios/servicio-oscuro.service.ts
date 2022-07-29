import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioOscuroService {
  
 
  
  oscuro: boolean= false;
  
  private enviarColoresSubjet= new Subject<boolean>();
  enviarColoresObservable=this.enviarColoresSubjet.asObservable();
 
  enviarColores(color:boolean){
    this.oscuro=color;
    this.enviarColoresSubjet.next(color)
  
  }
  
  
  
    
  

  constructor() { }
}
