import { Component, Input, OnInit } from '@angular/core';
import { Infocontable } from '../administracion/administracion';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  

 @Input()ListInfoContable:Infocontable;

  constructor(){}

  ngOnInit():void{}

}
