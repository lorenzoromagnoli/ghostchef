var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';
var FoodDataService = (function () {
    function FoodDataService(http) {
        this.http = http;
    }
    FoodDataService.prototype.getFood = function (val) {
        var _this = this;
        console.log(val);
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return new Promise(function (resolve) {
            _this.http.get('http://localhost:3000/api')
                .subscribe(function (data) {
                console.log("what I get from the server", data);
                _this.data = data.results;
                resolve(_this.data);
            });
        });
    };
    FoodDataService.prototype.getAllFoods = function () {
        var _this = this;
        if (this.allFood) {
            return Promise.resolve(this.allFood);
        }
        return new Promise(function (resolve) {
            _this.http.get('http://localhost:3000/allfood')
                .subscribe(function (data) {
                console.log(data);
                _this.data = data._body;
                resolve(_this.data);
            });
        });
    };
    FoodDataService.prototype.understandWords = function (sentence) {
        var _this = this;
        var parameter = JSON.stringify({ sentence: sentence });
        var creds = "sentence=" + sentence;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return new Promise(function (resolve) {
            _this.http.post('http://localhost:3000/understand?' + creds)
                .subscribe(function (data) {
                _this.data = data._body;
                console.log(_this.data);
                resolve(_this.data);
            });
        });
    };
    return FoodDataService;
}());
FoodDataService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], FoodDataService);
export { FoodDataService };
//# sourceMappingURL=../../../../src/app/services/food-data.service.js.map