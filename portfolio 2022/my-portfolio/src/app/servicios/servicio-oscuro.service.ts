import { Usuarios } from './../inteface/data.interface';
import { MisSeguidoresComponent } from './../components/mis-seguidores/mis-seguidores.component';
import { UserInterfaceService } from './../inteface/user-interface.service';
import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
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
  constructor(private firestore: Firestore, public firestores:Firestore) { }
    
  addUser(user: Usuarios){
    const userRef= collection(this.firestore,"users");
    return addDoc (userRef, user);
  }

  getUser(): Observable<Usuarios[]>{
    const userRef= collection(this.firestore, "users");
    return collectionData(userRef, { idField:'id id'}) as Observable<Usuarios[]>

  }

  
  deleteUser(users:Usuarios){
     const usuarioDocRef= doc(this.firestore,`users/${users.id}`);//con las comillas de altgr y }
     return deleteDoc(usuarioDocRef)
  }
}
