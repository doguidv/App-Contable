import { Component, Input, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { AdministracionService } from '../administracion.service';
import { Infocontable } from '../administracion/administracion';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  InfoContable:Infocontable[];
 @Input()ListInfoContable:Infocontable;

  constructor(private AdminService:AdministracionService,private router:Router){}

  ngOnInit():void{
    

    this.AdminService.getAll().subscribe(data=>{
      this.InfoContable=data
    })

  }

}