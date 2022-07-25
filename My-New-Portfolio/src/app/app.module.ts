
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RigthComponent } from './components/rigth/rigth.component';
import { LigthComponent } from './components/ligth/ligth.component';
import { StyleTComponent } from './components/style-t/style-t.component';

import { ComponentModule } from './components/component.module';
// servicios
import { ComponentService} from './component.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RigthComponent,  
    LigthComponent, 
    StyleTComponent, 
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentModule
  ],
  providers: [
    ComponentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
