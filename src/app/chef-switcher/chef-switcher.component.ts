import {OnInit , Input, Output, Component, EventEmitter} from '@angular/core';
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

  @Output() notify = new EventEmitter();;


  constructor() { }

  notifyChefClicked(c){
    console.log(c.name +"was clicked");
    this.notify.emit(c);
  }

  ngOnInit() {
    this.chefs=[];

    var thomas=new Chef("Thomas", "green", "🇩🇰");
    thomas.style="…my style would be, i guess organic, I see a thing like a weather or a culture I start from there and i make stuff up as I go."

    thomas.addVariable("local",23);
    thomas.addVariable("seasonal",54);
    thomas.addVariable("quick",63);
    thomas.addVariable("healthy", 18);
    this.chefs.push(thomas);

    var kae=new Chef("Kae", "yellow", "🇯🇵");
    kae.addVariable("tasty",23);
    kae.addVariable("pure",10);
    kae.addVariable("simple",63);
    kae.addVariable("organic",82);

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
