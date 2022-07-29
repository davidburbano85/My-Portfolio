import { ReturnStatement } from '@angular/compiler';
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
  

  constructor(private formBuilder: FormBuilder) {//revisar que en app.module.ts este activo en el imports el ReactiveFormsModuleo escribirlo

   }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(5)]], 
      check:['',[Validators.requiredTrue]]   });
  }
  send():any{
    console.log(this.formLogin.value);
      
 
  }
  

  }





