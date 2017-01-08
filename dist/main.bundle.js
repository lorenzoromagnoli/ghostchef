webpackJsonp([1,3],{

/***/ 323:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'what should we eat today?';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(656),
            styles: [__webpack_require__(654)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/Lorenzo/development/writeFood3/src/app.component.js.map

/***/ },

/***/ 389:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 389;


/***/ },

/***/ 390:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(492);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_23" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=/Users/Lorenzo/development/writeFood3/src/main.js.map

/***/ },

/***/ 490:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__editor_editor_component__ = __webpack_require__(491);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__editor_editor_component__["a" /* EditorComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__editor_editor_component__["a" /* EditorComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/Lorenzo/development/writeFood3/src/app.module.js.map

/***/ },

/***/ 491:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_food_data_service__ = __webpack_require__(493);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return EditorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditorComponent = (function () {
    function EditorComponent(foodDataService) {
        this.foodDataService = foodDataService;
        // id = 1;
        this.text = '';
        this.words = [];
        this.focussedWordPosition = 0;
        this.timetowait = 3000;
        this.nothingHappeningTimer = window.setInterval(this.getComputeraction.bind(this), this.timetowait);
        this.foodDataService = foodDataService;
    }
    EditorComponent.prototype.handleKeyEvent = function (event, value, index) {
        var word = event.target.innerText;
        var separatorPosition = window.getSelection().focusOffset;
        console.log("word Index", index);
        console.log("separator Position", window.getSelection());
        if (value == 'key') {
            this.focussedWordPosition = index;
            this.resetInterval();
        }
        else if (value == 'Space') {
            var wordToAdd = word.substring(0, separatorPosition).trim();
            var wordToStay = word.substring(separatorPosition, word.length).trim();
            if (wordToAdd == "") {
                wordToStay.prepend(" ");
            }
            else {
                console.log(separatorPosition, wordToAdd, wordToStay);
                event.target.innerText = wordToStay;
                //  this.words.splice(index, 0, wordToAdd);
                this.addAWord(wordToAdd, "", "human", index);
            }
        }
        else if (value == 'Arrow Left') {
            if (separatorPosition == 0) {
                var previouesElement = event.target.parentElement.previousElementSibling.children[0];
                console.log(previouesElement);
                FocusOnElement(previouesElement);
            }
        }
        else if (value == 'Arrow Right') {
            if (separatorPosition == word.length) {
                var nextElement = event.target.parentElement.nextElementSibling.children[0];
                FocusOnElement(nextElement);
            }
        }
        else {
            //window.getSelection().removeAllRanges();
            event.preventDefault();
        }
    };
    EditorComponent.prototype.resetInterval = function () {
        window.clearInterval(this.nothingHappeningTimer);
        this.nothingHappeningTimer = window.setInterval(function () {
            console.log("restarted interval");
            this.getComputeraction();
        }.bind(this), this.timetowait);
    };
    EditorComponent.prototype.getSentence = function () {
        var sentence = "";
        for (var i = 0; i < this.words.length; i++) {
            sentence += " " + this.words[i].word;
        }
        console.log(sentence);
        return (sentence);
    };
    EditorComponent.prototype.getComputeraction = function () {
        //try to understand the sentence
        this.foodDataService.understandWords(this.getSentence()).then(function (data) {
            console.log("got data", data);
        });
        this.addAWord("ingredient", "ingredient", "machine", getRandom(0, 3));
    };
    EditorComponent.prototype.addAWord = function (word, type, author, index) {
        var w = { 'word': word, 'type': 'ingredient', author: author };
        this.words.splice(index, 0, w);
    };
    EditorComponent.prototype.ngOnInit = function () {
        console.log("started");
        this.foodDataService.getAllFoods().then(function (data) {
            console.log("got data", data);
        });
    };
    EditorComponent.prototype.getFoodbyName = function () {
        this.foodDataService.getFood("zucchini").then(function (data) {
            console.log("got data", data);
        });
    };
    EditorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-editor',
            template: __webpack_require__(657),
            styles: [__webpack_require__(655)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_food_data_service__["a" /* FoodDataService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_food_data_service__["a" /* FoodDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_food_data_service__["a" /* FoodDataService */]) === 'function' && _a) || Object])
    ], EditorComponent);
    return EditorComponent;
    var _a;
}());
var getRandom = function (a, b) {
    var randomNumber = Math.round(Math.random() * (b - a)) - a;
    return (randomNumber);
};
var FocusOnElement = function (element) {
    if (element == null) {
        window.getSelection().removeAllRanges();
    }
    else {
        window.getSelection().removeAllRanges();
        var s = window.getSelection();
        var r = document.createRange();
        r.setStart(element, 0);
        r.setEnd(element, 0);
        s.removeAllRanges();
        s.addRange(r);
    }
};
//# sourceMappingURL=/Users/Lorenzo/development/writeFood3/src/editor.component.js.map

/***/ },

/***/ 492:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(490);
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=/Users/Lorenzo/development/writeFood3/src/index.js.map

/***/ },

/***/ 493:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(660);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FoodDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
                console.log(data);
                _this.data = data.results;
                resolve(_this.data);
            });
        });
    };
    FoodDataService.prototype.understandWords = function (sentence) {
        var _this = this;
        var parameter = JSON.stringify({ sentence: sentence });
        console.log(parameter);
        var creds = "sentence=" + sentence;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return new Promise(function (resolve) {
            _this.http.post('http://localhost:3000/understand?' + creds)
                .subscribe(function (data) {
                console.log(data);
                _this.data = data.results;
                resolve(_this.data);
            });
        });
    };
    FoodDataService.prototype.getAllFoods = function () {
        var _this = this;
        // console.log(val);
        if (this.allFood) {
            return Promise.resolve(this.allFood);
        }
        return new Promise(function (resolve) {
            _this.http.get('http://localhost:3000/allfood')
                .subscribe(function (data) {
                console.log(data);
                _this.data = data.results;
                resolve(_this.data);
            });
        });
    };
    FoodDataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], FoodDataService);
    return FoodDataService;
    var _a;
}());
//# sourceMappingURL=/Users/Lorenzo/development/writeFood3/src/food-data.service.js.map

/***/ },

/***/ 494:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/Lorenzo/development/writeFood3/src/environment.js.map

/***/ },

/***/ 495:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(942);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Users/Lorenzo/development/writeFood3/src/polyfills.js.map

/***/ },

/***/ 654:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 655:
/***/ function(module, exports) {

module.exports = "  #editor {\n      background-color: white;\n      margin: auto;\n      width: 80%;\n      height: 70%;\n      font-size: 2em;\n      display: block;\n      padding: 1em 2em;\n  }\n\n  .autocomplete{\n    background-color: #aaaaaa;\n  }\n\n  .word.machine{\n    border-bottom: 4px solid yellow;\n  }\n\n  .pauseButton{\n  }\n"

/***/ },

/***/ 656:
/***/ function(module, exports) {

module.exports = "<h1>\n  {{title}}\n</h1>\n"

/***/ },

/***/ 657:
/***/ function(module, exports) {

module.exports = "<!-- <input (keyup)=\"onUpdate($event)\" (click)=\"onUpdate($event)\"> -->\n<div id=\"editor\">\n\n  <span *ngFor=\"let word of words; let i = index\">\n\n    <span\n      class=\"word {{word.author}}\"\n      contenteditable=\"true\"\n      (keydown)=\"handleKeyEvent($event,'key',i)\"\n      (keydown.Enter)=\"handleKeyEvent( $event, 'Enter', i )\"\n      (keydown.ArrowLeft)=\"handleKeyEvent( $event, 'Arrow Left', i )\"\n      (keydown.ArrowUp)=\"handleKeyEvent( $event, 'Arrow Up', i )\"\n      (keydown.ArrowRight)=\"handleKeyEvent( $event, 'Arrow Right', i )\"\n      (keydown.ArrowDown)=\"handleKeyEvent( $event, 'Arrow Down', i )\"\n      (keydown.Space)=\"handleKeyEvent( $event, 'Space', i )\">{{word.word}}</span>\n\n    <!-- <span class=\"autocomplete\" [hidden]=\"i!=focussedWordPosition\">{{word}}</span> -->\n  </span>\n</div>\n\n<div class=\"pauseButton\" [ngClass]=\"{'paused': isAiPaused }\">\n  <i class=\"fa fa-american-sign-language-interpreting fa-5x\" aria-hidden=\"true\"> </i>\n\n</div>\n<!-- {{focussedWordPosition}} -->\n"

/***/ },

/***/ 943:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(390);


/***/ }

},[943]);
//# sourceMappingURL=main.bundle.map