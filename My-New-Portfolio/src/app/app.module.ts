import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RigthComponent } from './components/rigth/rigth.component';
import { StyleLighComponent } from './components/style-ligh/style-ligh.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RigthComponent,
    StyleLighComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
