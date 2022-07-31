import { Component, OnInit } from '@angular/core';
import { ServicioOscuroService } from 'src/app/servicios/servicio-oscuro.service';

@Component({
  selector: 'app-first-body',
  templateUrl: './first-body.component.html',
  styleUrls: ['./first-body.component.css']
})
export class FirstBodyComponent implements OnInit {
oscuro:boolean= false;
  constructor(private servicioOscuroService: ServicioOscuroService) { }

  ngOnInit(): void {
    this.servicioOscuroService.enviarColoresObservable.subscribe(color =>{
      this.oscuro=color;       
    })

  }

}
