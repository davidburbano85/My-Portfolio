import { MisSeguidoresComponent } from './components/mis-seguidores/mis-seguidores.component';
import { YourProfileComponent } from './components/your-profile/your-profile.component';
import { HeaderPadreComponent } from './components/header-padre/header-padre.component';
import { HojaDeVidaComponent } from './components/hoja-de-vida/hoja-de-vida.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { FirstBodyComponent } from './components/first-body/first-body.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  {
    path: 'seguidores',
    component:MisSeguidoresComponent
  },
{
  path:'yourProfile',
  component:YourProfileComponent
},

{
  path:'firstBody',
  component: FirstBodyComponent
},

{
  path:'formulario',
  component:FormularioComponent
},
{
  path:'hojaDeVida',
  component:HojaDeVidaComponent
}
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule    
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
