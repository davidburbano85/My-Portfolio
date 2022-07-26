import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderPadreComponent } from './components/header-padre/header-padre.component';
import { RigthComponent } from './components/rigth/rigth.component';
import { ColorOscuroDirective } from './color-oscuro.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderPadreComponent,
    RigthComponent,
    ColorOscuroDirective
  ],
  imports: [
    BrowserModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
