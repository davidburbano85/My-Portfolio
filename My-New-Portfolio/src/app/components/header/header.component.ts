import { NgClass } from '@angular/common';
import { Component, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {
  clases: string[]=[] ;
  flag=true;
  
  constructor() 
     { 
      this.clases= 
      [
        "day", 
        "night",
      ]
    }

  ngOnInit(): void {}
  changeTheme()
    {
        this.flag= !this.flag;
    }

}
