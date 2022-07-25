import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioOscuroService {
  
  // oscuro: Array<any>=[];
  // private enviarColorsSubjet=new Subject<Array<any>>()
  // enviarColoresObservable=this.enviarColorsSubjet.asObservable();

  // enviarColores(color:Array<any>){
  //   this.oscuro=color;
  //   this.enviarColorsSubjet.next(color)
  
  oscuro: boolean= false;
  private enviarColoresSubjet= new Subject<boolean>();
  enviarColoresObservable=this.enviarColoresSubjet.asObservable();
 
  enviarColores(color:boolean){
    this.oscuro=color;
    this.enviarColoresSubjet.next(color)
  
  }
  
  
  
    
  

  constructor() { }
}
