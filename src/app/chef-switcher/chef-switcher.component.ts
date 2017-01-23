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

    var thomas=new Chef("Thomas", "green", "🇩🇰");
    this.chefs.push(thomas);

    var kae=new Chef("Kae", "yellow", "🇯🇵");
    this.chefs.push(kae);

    var federico=new Chef("Federico", "pink", "🇨🇴");
    this.chefs.push(federico);

    var vincenzina=new Chef("Vincenzina", "orange", "🇮🇹");
    this.chefs.push(vincenzina);

    var tony=new Chef("Tony", "teal", "🇨🇳");
    this.chefs.push(tony);

    console.log(this.chefs);
  }

}
