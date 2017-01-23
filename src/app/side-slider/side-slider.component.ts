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
import { Chef } from '../chef-switcher/chef';


@Component({
  selector: 'app-side-slider',
  templateUrl: './side-slider.component.html',
  styleUrls: ['./side-slider.component.css'],

  animations: [
    trigger('visibilityChanged', [
      state('true' , style({ width: '30%', opacity: 1})),
      state('false', style({ width: '0%', opacity: 0, display:'none' })),
      transition('* => *', animate('300ms')),
    ])
  ]
})
export class SideSliderComponent implements OnInit  {

  options=[];
  chefName;
  chefnation;
  chefStyle;
  chefColor;


  @Input() isVisible : boolean = false;
  constructor() { }


  togglevisible() {
    console.log("collapsing side panel")
    this.isVisible = !this.isVisible;
  }

  setChef(chef){
    this.options=chef.variables;
    this.chefName=chef.name;
    this.chefnation=chef.nation;
    this.chefStyle=chef.style;
    this.chefColor=chef.color;
  }

  ngOnInit() {
  }

}
