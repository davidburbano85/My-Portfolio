import { Component, OnInit } from '@angular/core';
import { Style } from '../../models/style';//src/app/models/style';

@Component({
  selector: 'app-ligth',
  templateUrl: './ligth.component.html',
  styleUrls: ['./ligth.component.css']
})

export class LigthComponent implements OnInit {
      style: Style[] = [];
  constructor() { }

  ngOnInit(): void 
  {
    this.style =
    [
      {
        primaryColor: "#2FA4FF",
       texPrimary: "#0080FF",
       defaultTextSize: "xx-large",
      }
    ]
  }

}
