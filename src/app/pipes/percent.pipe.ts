import { Component } from "@angular/core";


@Component({
  selector: 'percent-pipe',
  template: `<div>
    <!--output '26%'-->
    <p>A: {{a | percent}}</p>

    <!--output '0,134.950%'-->
    <p>B: {{b | percent:'4.3-5'}}</p>

    <!--output '0 134,950 %'-->
    <p>B: {{b | percent:'4.3-5':'fr'}}</p>
  </div>`
})
export class PercentPipeComponent {
  a: number = 0.259;
  b: number = 1.3495;
}