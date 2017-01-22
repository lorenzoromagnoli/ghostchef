import { Component, OnInit } from '@angular/core';
import { Chef } from './chef';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-chef-switcher',
  templateUrl: './chef-switcher.component.html',
  styleUrls: ['./chef-switcher.component.scss']
})

export class ChefSwitcherComponent implements OnInit {

  chefs:Chef[];
  activeChef:Chef;

  constructor() { }

  ngOnInit() {
    this.chefs=[];

    var lorenzo=new Chef("Lorenzo", "green");
    this.chefs.push(lorenzo);


    var mario=new Chef("Mario", "yellow");
    this.chefs.push(mario);

    console.log(this.chefs);
  }

}
