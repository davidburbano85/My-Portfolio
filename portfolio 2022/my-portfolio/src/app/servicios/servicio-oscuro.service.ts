import { UserInterfaceService } from './../inteface/user-interface.service';
import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioOscuroService {
  @Output() disparadoDeUsuario: EventEmitter<any> = new EventEmitter();
  
  oscuro: boolean= false;
  
  private enviarColoresSubjet= new Subject<boolean>();
  enviarColoresObservable=this.enviarColoresSubjet.asObservable();
 
  enviarColores(color:boolean){
    this.oscuro=color;
    this.enviarColoresSubjet.next(color)
  
  
  }
  
  // *************firebase crud*****************
  constructor(private firestore: Firestore ) { }
    
  addUser(user:UserInterfaceService){
    const userRef= collection(this.firestore, "users");
    return addDoc (userRef, user);
  }

  getUser(): Observable<UserInterfaceService[]>{
    const userRef= collection(this.firestore, "users");
    return collectionData(userRef, { idField: 'id'}) as Observable<UserInterfaceService[]>
  }
  
  
}
