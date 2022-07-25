import { NgClass } from '@angular/common';
import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { RigthComponent } from '../rigth/rigth.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {

  @ViewChild("modoOscuro") negro = ElementRef

  oscuro: boolean = true;
  constructor(private render: Renderer2) { }

  ngOnInit(): void { }

  estilo() {
    if (this.oscuro) {
      this.oscuro = false
    }else {
      this.oscuro = true
    }

    this.oscuro2();

  }

  oscuro2(): void {
    const darknnes = this.dark.nativeElement;
    console.log(darknnes)

  }
}
