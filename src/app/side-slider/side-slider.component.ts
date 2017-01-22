import { Component,
  OnInit,
  trigger,
  state,
  style,
  transition,
  animate,
  Input
} from '@angular/core';
import {SliderModule} from 'primeng/primeng';

@Component({
  selector: 'app-side-slider',
  templateUrl: './side-slider.component.html',
  styleUrls: ['./side-slider.component.css'],

  animations: [
    trigger('visibilityChanged', [
      state('true' , style({ width: '30%', opacity: 1})),
      state('false', style({ width: '0%', opacity: 0 })),
      transition('* => *', animate('300ms')),
    ])
  ]
})
export class SideSliderComponent implements OnInit  {
  val: number;
  @Input() isVisible : boolean = false;
  constructor() { }


  togglevisible() {
    console.log("collapsing side panel")
    this.isVisible = !this.isVisible;
  }

  ngOnInit() {
  }

}
