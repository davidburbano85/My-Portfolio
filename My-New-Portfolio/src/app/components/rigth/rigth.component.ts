import { HeaderComponent } from './../header/header.component';
import { Component, OnInit,  Renderer2, ViewChild,  ElementRef,} from '@angular/core';

@Component({
  selector: 'app-rigth',
  templateUrl: './rigth.component.html',
  styleUrls: ['./rigth.component.css'],
})
export class RigthComponent implements OnInit {
  
// @ViewChild("dark") color = ElementRef;

  oscuro: boolean = true;
  constructor(private recibirClic: Renderer2) { }


  ngOnInit(): void {
  }

  darknnes(): void {
    this.recibirClic.listen("HeaderComponent", "modoOscuro", () => {
      console.log("click");
     if (this.oscuro) {
        this.oscuro = false
      } else {
        this.oscuro= true
      }
      
    });
  }

}
// target: any, eventName: string, callback: (event: any) => boolean | 