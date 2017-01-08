var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Chef } from './chef';
var ChefSwitcherComponent = (function () {
    function ChefSwitcherComponent() {
    }
    ChefSwitcherComponent.prototype.ngOnInit = function () {
        this.chefs = [];
        var lorenzo = new Chef("Lorenzo");
        this.chefs.push(lorenzo);
        var lorenzo = new Chef("Mario");
        this.chefs.push(lorenzo);
        console.log(this.chefs);
    };
    return ChefSwitcherComponent;
}());
ChefSwitcherComponent = __decorate([
    Component({
        selector: 'app-chef-switcher',
        templateUrl: './chef-switcher.component.html',
        styleUrls: ['./chef-switcher.component.scss']
    }),
    __metadata("design:paramtypes", [])
], ChefSwitcherComponent);
export { ChefSwitcherComponent };
//# sourceMappingURL=../../../../src/app/chef-switcher/chef-switcher.component.js.map