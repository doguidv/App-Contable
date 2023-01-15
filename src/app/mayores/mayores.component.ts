import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AdministracionService } from '../administracion.service';
import { Infocontable } from '../administracion/administracion';
import { Categorias } from '../categorias/categorias';

import { CategoriasService } from '../categorias.service';
@Component({
  selector: 'app-mayores',
  templateUrl: './mayores.component.html',
  styleUrls: ['./mayores.component.scss']
})
export class MayoresComponent {
  
  InfoContable:Infocontable[];
 @Input()ListInfoContable:Infocontable;
 @Input()ListCaracteristicas:Categorias;

  constructor(private AdminService:AdministracionService,private router:Router,private CategoriasService:CategoriasService ){}

  ngOnInit():void{

    this.AdminService.getAll().subscribe(data=>{
      this.InfoContable=data;
    })

  }
}
