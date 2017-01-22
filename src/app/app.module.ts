import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { ChefSwitcherComponent } from './chef-switcher/chef-switcher.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SideSliderComponent } from './side-slider/side-slider.component';
import {SliderModule} from 'primeng/primeng';


@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    ChefSwitcherComponent,
    SideSliderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    SliderModule
  ],
  providers: [],
  bootstrap: [
    EditorComponent
  ]
})
export class AppModule { }
