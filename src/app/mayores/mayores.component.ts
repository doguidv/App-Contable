import { Component, Input } from '@angular/core';
import { Infocontable } from '../administracion/administracion';

@Component({
  selector: 'app-mayores',
  templateUrl: './mayores.component.html',
  styleUrls: ['./mayores.component.scss']
})
export class MayoresComponent {

  
 @Input()ListInfoContable:Infocontable;

}
