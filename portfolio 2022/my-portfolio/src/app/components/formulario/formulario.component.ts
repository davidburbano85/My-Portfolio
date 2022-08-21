import { UserInterfaceService } from './../../inteface/user-interface.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  MinLengthValidator,  Validators } from '@angular/forms';
import { ServicioOscuroService } from 'src/app/servicios/servicio-oscuro.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  oscuro: boolean=false;//MODO OSCURO

  
/******FORMULARIO*****/
  title="newForm";
  formLogin!: FormGroup; 
  agradecimiento:boolean=true;

  constructor(
    private formBuilder: FormBuilder, //revisar que en app.module.ts este activo en el imports el ReactiveFormsModuleo escribirlo
    private user: UserInterfaceService,
    private servicioOscuroService: ServicioOscuroService) {//modo oscuro

   }
   /*****************FORMULARIO********************** */
  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(8)]], 
      check:['',[Validators.requiredTrue]],
      nombre:['',[Validators.required, Validators.minLength(4)]],
      apellido:['',[Validators.required, Validators.minLength(4)]],
      organizacion:['', [Validators.required, Validators.minLength(4)]], });
        
      //ESTE ES EL QUE RECIBE LA INFORMACION PARA PASAR AL MODO OSCURO
      this.servicioOscuroService.enviarColoresObservable.subscribe(color =>{
        this.oscuro=color;       
      });
  }
//  async onSubmit(){
//       
//         console.log(response);
//   }
  async send(){
    console.log(MinLengthValidator);
    const response= await this.servicioOscuroService.addUser(this.formLogin.value);
    
  }
  gracias(){
    this.agradecimiento=!this.agradecimiento
  }
/******* FUNCION MODO OSCURO**********/
  estilo()
  {
    
    this.oscuro=!this.oscuro
    // this.cambioColor();
    console.log(this.oscuro);

  }


  }





