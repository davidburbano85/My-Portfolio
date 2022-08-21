import { UserInterfaceService } from './../inteface/user-interface.service';
import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
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
  
  constructor(private firestore: Firestore) { }
    
  addUser(user:UserInterfaceService){
    const userRef= collection(this.firestore, "users");
    return addDoc (userRef, user);
  }
  
}
