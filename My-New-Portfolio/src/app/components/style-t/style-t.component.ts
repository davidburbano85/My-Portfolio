import { Component, OnInit } from '@angular/core';
import { Style } from '../../models/style';

@Component({
  selector: 'app-style-t',
  templateUrl: './style-t.component.html',
  styleUrls: ['./style-t.component.css']
})
export class StyleTComponent implements OnInit {
  style: Style[] = [];
  constructor() { }

  ngOnInit(): void {

    

    }

}
