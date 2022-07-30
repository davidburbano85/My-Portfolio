import { ReturnStatement } from '@angular/compiler';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
title="newForm";
  formLogin!: FormGroup; 
  agradecimiento:boolean=true;
  

  constructor(private formBuilder: FormBuilder) {//revisar que en app.module.ts este activo en el imports el ReactiveFormsModuleo escribirlo

   }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(8)]], 
      check:['',[Validators.requiredTrue]],
      nombre:['',[Validators.required, Validators.minLength(4)]],
      apellido:['',[Validators.required, Validators.minLength(4)]],
      organizacion:['', [Validators.required, Validators.minLength(4)]], });
  }
  send():any{
    console.log(this.formLogin.value.nombre);
    
  }
  gracias(){
    this.agradecimiento=!this.agradecimiento
  }

  nameValue(){
    this.formLogin.value.nombre
  }
  }





