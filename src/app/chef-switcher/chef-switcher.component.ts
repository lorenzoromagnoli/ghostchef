import { Component, OnInit } from '@angular/core';
import { Chef } from './chef';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-chef-switcher',
  templateUrl: './chef-switcher.component.html',
  styleUrls: ['./chef-switcher.component.css']
})

export class ChefSwitcherComponent implements OnInit {

  chefs:Chef[]=[];
  activeChef:Chef;

  constructor() { }


  ngOnInit() {
    var lorenzo=new Chef("Lorenzo");
    this.chefs.push(lorenzo);
    var lorenzo=new Chef("Mario");
    this.chefs.push(lorenzo);
  }

}
