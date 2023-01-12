import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AdministracionService } from '../administracion.service';
import { Infocontable } from '../administracion/administracion';

@Component({
  selector: 'app-mayores',
  templateUrl: './mayores.component.html',
  styleUrls: ['./mayores.component.scss']
})
export class MayoresComponent {

  InfoContable:Infocontable[];
 @Input()ListInfoContable:Infocontable;

  constructor(private AdminService:AdministracionService,private router:Router){}

  ngOnInit():void{

    this.AdminService.getAll().subscribe(data=>{
      this.InfoContable=data
    })

  }

}
