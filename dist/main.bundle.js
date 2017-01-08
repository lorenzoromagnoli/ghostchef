webpackJsonp([1,3],{

/***/ 1018:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(460);


/***/ },

/***/ 390:
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
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(733),
            styles: [__webpack_require__(732)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/Lorenzo/development/writeFood3/src/app.component.js.map

/***/ },

/***/ 459:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 459;


/***/ },

/***/ 460:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(568);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_25" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=/Users/Lorenzo/development/writeFood3/src/main.js.map

/***/ },

/***/ 563:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__editor_editor_component__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chef_switcher_chef_switcher_component__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__ = __webpack_require__(559);
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
                __WEBPACK_IMPORTED_MODULE_5__editor_editor_component__["a" /* EditorComponent */],
                __WEBPACK_IMPORTED_MODULE_6__chef_switcher_chef_switcher_component__["a" /* ChefSwitcherComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            ],
            providers: [],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_5__editor_editor_component__["a" /* EditorComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/Lorenzo/development/writeFood3/src/app.module.js.map

/***/ },

/***/ 564:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chef__ = __webpack_require__(565);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ChefSwitcherComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChefSwitcherComponent = (function () {
    function ChefSwitcherComponent() {
    }
    ChefSwitcherComponent.prototype.ngOnInit = function () {
        this.chefs = [];
        var lorenzo = new __WEBPACK_IMPORTED_MODULE_1__chef__["a" /* Chef */]("Lorenzo");
        this.chefs.push(lorenzo);
        var lorenzo = new __WEBPACK_IMPORTED_MODULE_1__chef__["a" /* Chef */]("Mario");
        this.chefs.push(lorenzo);
        console.log(this.chefs);
    };
    ChefSwitcherComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-chef-switcher',
            template: __webpack_require__(734),
            styles: [__webpack_require__(730)]
        }), 
        __metadata('design:paramtypes', [])
    ], ChefSwitcherComponent);
    return ChefSwitcherComponent;
}());
//# sourceMappingURL=/Users/Lorenzo/development/writeFood3/src/chef-switcher.component.js.map

/***/ },

/***/ 565:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Chef; });
var Chef = (function () {
    function Chef(name) {
        this.name = name;
    }
    Chef.prototype.activate = function () {
        this.isActive = true;
        console.log("this.name");
    };
    Chef.prototype.disable = function () {
        this.isActive = false;
    };
    Chef.prototype.toggleActive = function () {
        this.isActive = !this.isActive;
    };
    return Chef;
}());
//# sourceMappingURL=/Users/Lorenzo/development/writeFood3/src/chef.js.map

/***/ },

/***/ 566:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__word__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_food_data_service__ = __webpack_require__(569);
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
        this.placeholderWord = new __WEBPACK_IMPORTED_MODULE_1__word__["a" /* Word */]("...", "human");
        this.words = [this.placeholderWord];
        this.focussedWordPosition = 0;
        this.nothingHappeningTimer = window.setInterval(this.getComputeraction.bind(this), this.timetowait);
        this.timetowait = 5000;
        this.isAiPaused = true;
        this.higlightedWord = -1;
        this.wordsRelatedToHighlighted = [];
        this.foodDataService = foodDataService;
    }
    EditorComponent.prototype.mouseOver = function (event, index) {
        this.higlightedWord = index;
        this.wordsRelatedToHighlighted = this.words[index].connectsTo;
    };
    EditorComponent.prototype.mouseLeave = function (event, index) {
        this.higlightedWord = -1;
        this.wordsRelatedToHighlighted = [];
    };
    EditorComponent.prototype.handleKeyEvent = function (event, value, index) {
        var word = event.target.innerText;
        var separatorPosition = window.getSelection().focusOffset;
        // console.log("word Index", index);
        // console.log("separator Position", window.getSelection());
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
                //console.log(separatorPosition, wordToAdd, wordToStay);
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
        else if (value == 'Click') {
            event.stopPropagation();
        }
        else if (value == 'BackSpace') {
        }
        else {
            //window.getSelection().removeAllRanges();
            event.preventDefault();
        }
        if (value == 'Blur') {
            console.log("blurred", word);
            if (word == "") {
                this.deleteWord(index);
            }
            else {
                this.words[index].word = word;
            }
        }
    };
    EditorComponent.prototype.resetInterval = function () {
        window.clearInterval(this.nothingHappeningTimer);
        if (!this.isAiPaused) {
            this.nothingHappeningTimer = window.setInterval(function () {
                console.log("restarted interval");
                this.getComputeraction();
            }.bind(this), this.timetowait);
        }
    };
    EditorComponent.prototype.togglePause = function () {
        this.isAiPaused = !this.isAiPaused;
        if (this.isAiPaused) {
            window.clearInterval(this.nothingHappeningTimer);
        }
        else {
            this.resetInterval();
        }
    };
    EditorComponent.prototype.getSentence = function () {
        var sentence = "";
        for (var i = 0; i < this.words.length; i++) {
            sentence += " " + this.words[i].word;
        }
        //  console.log("sentence to analyze",sentence);
        return (sentence);
    };
    EditorComponent.prototype.getComputeraction = function () {
        if (this.isAiPaused) {
        }
        else {
            //try to understand the sentence
            this.understandSentence();
            this.addAWord("ingredient", "ingredient", "machine", getRandom(0, 3));
        }
    };
    EditorComponent.prototype.understandSentence = function () {
        var _this = this;
        console.log("analyzing what you wrote...");
        console.log(this.getSentence());
        this.foodDataService.understandWords(this.getSentence()).then(function (data) {
            var response = JSON.parse(data.toString());
            //console.log("got data",response);
            //get all the entities from the response json
            var entities = [];
            console.log(response.entities);
            var entitiesType = Object.keys(response.entities);
            for (var i = 0; i < entitiesType.length; i++) {
                for (var j = 0; j < response.entities[entitiesType[i]].length; j++) {
                    var entity = { 'name': response.entities[entitiesType[i]][j], 'type': entitiesType[i] };
                    entities.push(entity);
                }
            }
            //reset all the info about entities and attributes in the text
            for (var j = 0; j < _this.words.length; j++) {
                _this.words[j].isEntity = false;
                _this.words[j].isAttribute = false;
                _this.words[j].hasConnections = false;
                _this.words[j].connectsTo = [];
                _this.words[j].attributes = [];
            }
            //add tag of entities to the words in the array
            for (var i = 0; i < entities.length; i++) {
                for (var j = 0; j < _this.words.length; j++) {
                    if (_this.words[j].word.trim() == entities[i].name.trim()) {
                        //console.log(entities[i].name);
                        _this.words[j].isEntity = true;
                    }
                }
            }
            //get all the entities from the response json
            //var tokens = [];
            //console.log(response.tokens);
            for (var i = 0; i < response.tokens.length; i++) {
                _this.words[i].type = response.tokens[i].dependencyEdge.label;
                _this.words[i].dependencyEdge = response.tokens[i].dependencyEdge.headTokenIndex;
                _this.words[i].dependencyType = response.tokens[i].dependencyEdge.label;
                // #################
                // ###___#####___###
                // ######  _|#######
                // ###__######__####
                // #####-----#######
                //this method of parsing relation is very unefficient consider restructuring looking for Pobject relation first and then look in to the tree of relations. @Simo, maybe you can take care of this.
                // #################
                //console.log(response.tokens[i].dependencyEdge.label);
                if (response.tokens[i].dependencyEdge.label == "AMOD" || response.tokens[i].dependencyEdge.label == "ATTR") {
                    _this.words[response.tokens[i].dependencyEdge.headTokenIndex].attributes.push(response.tokens[i].text);
                    _this.words[i].isAttribute = true;
                }
                else if (response.tokens[i].dependencyEdge.label == "PREP") {
                    for (var j = 0; j < response.tokens.length; j++) {
                        if (response.tokens[j].dependencyEdge.label == "POBJ") {
                            if (response.tokens[j].dependencyEdge.headTokenIndex == i) {
                                var indexOfTheEntityConnectedToTheProposition = response.tokens[i].dependencyEdge.headTokenIndex;
                                _this.words[indexOfTheEntityConnectedToTheProposition].hasConnections = true;
                                _this.words[indexOfTheEntityConnectedToTheProposition].connectsTo.push(j); //add the index of the pobject to the list of things that connect to the entity
                            }
                        }
                    }
                }
                else if (response.tokens[i].dependencyEdge.label == "CONJ") {
                    var isTheWordRoot = true;
                    var arrayOfWords = []; //add every word I check to the array
                    var analyzingWord = response.tokens[i].dependencyEdge.headTokenIndex;
                    while (arrayOfWords.indexOf(analyzingWord) == -1) {
                        if (response.tokens[analyzingWord].dependencyEdge.label == "POBJ" || response.tokens[j].dependencyEdge.label == "APPOS") {
                            var prepIndex = response.tokens[analyzingWord].dependencyEdge.headTokenIndex;
                            var rootIndex = response.tokens[prepIndex].dependencyEdge.headTokenIndex;
                            _this.words[rootIndex].hasConnections = true;
                            _this.words[rootIndex].connectsTo.push(i); //add the index of the pobject to
                            isTheWordRoot = false;
                        }
                        else {
                            analyzingWord = response.tokens[analyzingWord].dependencyEdge.headTokenIndex; //I move to the next step of the chain
                        }
                        arrayOfWords.push(analyzingWord); //add the index of the element I searched to the array
                    }
                    if (isTheWordRoot) {
                        _this.words[analyzingWord].hasConnections = true;
                        _this.words[analyzingWord].connectsTo.push(i); //add the index of the pobject to the list of things that connect to
                    }
                }
            }
            console.log(_this.words);
        });
    };
    EditorComponent.prototype.addAWord = function (word, type, author, index) {
        var w = new __WEBPACK_IMPORTED_MODULE_1__word__["a" /* Word */](word, author);
        this.words.splice(index, 0, w);
    };
    EditorComponent.prototype.deleteWord = function (index) {
        this.words.splice(index, 1);
    };
    EditorComponent.prototype.ngOnInit = function () {
        console.log("started");
        this.addChef();
    };
    EditorComponent.prototype.addChef = function () {
        var _this = this;
        this.foodDataService.getAllFoods().then(function (data) {
            console.log("got data", data);
            _this.foodData = JSON.parse(data);
        });
    };
    EditorComponent.prototype.getFoodbyName = function () {
        this.foodDataService.getFood("zucchini").then(function (data) {
            console.log("got data", data);
        });
    };
    EditorComponent.prototype.searchEntities = function () {
        var entitiesArray = [];
        console.log(this.foodData);
        for (var i = 0; i < this.words.length; i++) {
            if (this.words[i].isEntity) {
                if (this.foodData.ingredients[this.words[i].word] != null) {
                    //the ingredient exist in the db
                    entitiesArray.push(i);
                    console.log("got it");
                }
                else {
                    //I don't know the food
                    console.log("noFoodFoundInDB");
                }
            }
        }
        console.log(entitiesArray);
        return (entitiesArray);
    };
    EditorComponent.prototype.addPreparationToIndex = function (indexOfEntityToModify) {
        var ingredient = this.words[indexOfEntityToModify].word;
        var possiblePreparations = this.foodData.ingredients[ingredient].preparations;
        var preparation = possiblePreparations[getRandom(0, possiblePreparations.length)];
        var prep = new __WEBPACK_IMPORTED_MODULE_1__word__["a" /* Word */](preparation, "machine");
        this.words.splice(indexOfEntityToModify, 0, prep);
    };
    EditorComponent.prototype.addIngredientToIndex = function (indexOfEntityToModify) {
        var ingredient = this.words[indexOfEntityToModify].word;
        var possibleIngredients = this.foodData.ingredients[ingredient].match;
        var match = possibleIngredients[getRandom(0, possibleIngredients.length)].name;
        var matchingIngredient = new __WEBPACK_IMPORTED_MODULE_1__word__["a" /* Word */](match, "machine");
        if (this.words[indexOfEntityToModify].hasConnections) {
            var comma = new __WEBPACK_IMPORTED_MODULE_1__word__["a" /* Word */](",", "");
            this.words.splice(indexOfEntityToModify + 1, 0, comma, matchingIngredient);
        }
        else {
            var and = new __WEBPACK_IMPORTED_MODULE_1__word__["a" /* Word */]("and", "");
            this.words.splice(indexOfEntityToModify + 1, 0, and, matchingIngredient);
        }
    };
    EditorComponent.prototype.addPreparation = function () {
        var ent = this.searchEntities();
        console.log(ent);
        for (var i = 0; i < ent.length; i++) {
            this.addPreparationToIndex(ent[i]);
        }
    };
    EditorComponent.prototype.lookForConjunctions = function () {
    };
    EditorComponent.prototype.addIngredient = function () {
        var ent = this.searchEntities();
        console.log(ent);
        for (var i = 0; i < ent.length; i++) {
            this.addIngredientToIndex(ent[i]);
        }
    };
    EditorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-editor',
            template: __webpack_require__(735),
            styles: [__webpack_require__(731)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_food_data_service__["a" /* FoodDataService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_food_data_service__["a" /* FoodDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_food_data_service__["a" /* FoodDataService */]) === 'function' && _a) || Object])
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

/***/ 567:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Word; });
var Word = (function () {
    function Word(word, author) {
        this.connectsTo = [];
        this.word = word;
        this.author = author;
    }
    return Word;
}());
//# sourceMappingURL=/Users/Lorenzo/development/writeFood3/src/word.js.map

/***/ },

/***/ 568:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(563);
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=/Users/Lorenzo/development/writeFood3/src/index.js.map

/***/ },

/***/ 569:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(738);
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
                console.log("what I get from the server", data);
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
                _this.data = data._body;
                resolve(_this.data);
            });
        });
    };
    FoodDataService.prototype.understandWords = function (sentence) {
        var _this = this;
        var parameter = JSON.stringify({ sentence: sentence });
        //console.log(parameter);
        var creds = "sentence=" + sentence;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return new Promise(function (resolve) {
            _this.http.post('http://localhost:3000/understand?' + creds)
                .subscribe(function (data) {
                //  console.log(data._body);
                _this.data = data._body;
                console.log(_this.data);
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

/***/ 570:
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

/***/ 571:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(578);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1017);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Users/Lorenzo/development/writeFood3/src/polyfills.js.map

/***/ },

/***/ 730:
/***/ function(module, exports) {

module.exports = ".chef-switcher {\n  text-align: right; }\n\n.addChef {\n  float: right; }\n\n.active-chef-list {\n  display: inline-block; }\n  .active-chef-list .chef {\n    display: inline-block;\n    padding: 0px 9px; }\n\n.addChef-menu {\n  right: 0px;\n  text-align: right;\n  float: right;\n  min-width: 127px;\n  padding: 0px;\n  top: 40px; }\n  .addChef-menu .dropdown-item .inner {\n    width: 100%; }\n    .addChef-menu .dropdown-item .inner.active .icon {\n      color: blue; }\n"

/***/ },

/***/ 731:
/***/ function(module, exports) {

module.exports = "#editor {\n  margin: auto;\n  font-size: 2em;\n  display: block;\n  min-height: 50px;\n  background-color: #eee; }\n\n.autocomplete {\n  background-color: #aaaaaa; }\n\nsup {\n  top: -1.5em;\n  font-size: 8px; }\n\n.word {\n  min-width: 40px;\n  display: inline-block; }\n  .word.attribute {\n    border-bottom: 2px dashed yellow; }\n  .word.entity {\n    border-bottom: 2px solid yellow; }\n  .word.machine {\n    border-bottom: 2px solid violet; }\n  .word.isHighlighted {\n    font-weight: bold;\n    color: #000; }\n  .word.isRelated {\n    font-weight: bold; }\n  .word.isNotRelated {\n    color: #aaa; }\n\n.word.machine {\n  border-bottom: 2px solid violet; }\n\n.pauseButton .hidden {\n  display: none; }\n"

/***/ },

/***/ 732:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 733:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 734:
/***/ function(module, exports) {

module.exports = "<div class=\"chef-switcher row\">\n\n  <div class=\"active-chef-list\">\n    <div class=\"chef\" *ngFor=\"let chef of chefs; let i = index\">\n      <span class=\"name\" *ngIf=\"chef.isActive\">\n        {{chef.name}}\n      </span>\n    </div>\n  </div>\n\n  <span class=\"addChef fa fa-plus fa-2x\" *ngIf=\"activeChef==null\" (click)=\"$event.stopPropagation(); myDrop.open();\"></span>\n\n  <div ngbDropdown #myDrop=\"ngbDropdown\" class=\"d-inline-block addChef-menu\">\n    <!-- <button class=\"btn btn-outline\" id=\"dropdownMenu1\" ngbDropdownToggle>Toggle dropdown</button> -->\n    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n      <button *ngFor=\"let chef of chefs; let i = index\" class=\"dropdown-item\">\n\n        <div class=\"inner\" (click)=\"chef.toggleActive()\" [ngClass]=\"{'active': chef.isActive }\">\n\n          <span class=\"icon fa fa-dot-circle-o fa-1x\"></span>\n\n          <span class=\"name\">\n            {{chef.name}}\n          </span>\n\n        </div>\n\n      </button>\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ 735:
/***/ function(module, exports) {

module.exports = "<!-- <input (keyup)=\"onUpdate($event)\" (click)=\"onUpdate($event)\"> -->\n<div class=\"container\">\n  <div class=\"row\">\n    <div id=\"title\">\n      <h1>what should we have today?</h1>\n    </div>\n  </div>\n\n  <app-chef-switcher>\n    Loading...\n  </app-chef-switcher>\n\n  <div class=\"row\">\n    <div id=\"editor\" >\n      <span *ngFor=\"let word of words; let i = index\">\n        <span\n          class=\"word {{word.author}}\"\n          contenteditable=\"true\"\n          (keydown)=\"handleKeyEvent($event,'key',i)\"\n          (keydown.Enter)=\"handleKeyEvent( $event, 'Enter', i )\"\n          (keydown.ArrowLeft)=\"handleKeyEvent( $event, 'Arrow Left', i )\"\n          (keydown.ArrowUp)=\"handleKeyEvent( $event, 'Arrow Up', i )\"\n          (keydown.ArrowRight)=\"handleKeyEvent( $event, 'Arrow Right', i )\"\n          (keydown.ArrowDown)=\"handleKeyEvent( $event, 'Arrow Down', i )\"\n          (keydown.Space)=\"handleKeyEvent( $event, 'Space', i )\"\n          (keydown.BackSpace)=\"handleKeyEvent( $event, 'BackSpace', i )\"\n          (blur)=\"handleKeyEvent( $event, 'Blur', i )\"\n          (click)=\"handleKeyEvent( $event, 'Click', i )\"\n          [ngClass]=\"{\n                      'entity': word.isEntity,\n                      'attribute': word.isAttribute,\n                      'isHighlighted': i==higlightedWord,\n                      'isRelated': wordsRelatedToHighlighted.indexOf(i)!=-1,\n                      'isNotRelated': higlightedWord!=-1 && wordsRelatedToHighlighted.indexOf(i)==-1 && i!=higlightedWord\n                    }\"\n          (mouseover)=\"mouseOver($event, i)\"\n          (mouseout)=\"mouseLeave($event, i)\"\n\n            >{{word.word}}</span>\n            <sup class=\"apex\">{{word.dependencyEdge}}</sup>\n            <sup class=\"apex\">_{{word.dependencyType}}</sup>\n\n        <!-- <span class=\"autocomplete\" [hidden]=\"i!=focussedWordPosition\">{{word}}</span> -->\n      </span>\n    </div>\n  </div>\n\n\n  <div class=\"row controls\">\n    <span class=\"pauseButton\" (click)=\"togglePause()\">\n      <span class=\"fa fa-play fa-1x\" [ngClass]=\"{'hidden': !isAiPaused }\"></span>\n      <span class=\"fa fa-stop fa-1x\" [ngClass]=\"{'hidden': isAiPaused }\"></span>\n      autopilot\n    </span>\n    <span class=\"analyzeText\" (click)=\"understandSentence()\">\n      <span class=\"fa fa-eyedropper fa-1x\" ></span>\n      analyze-text\n    </span>\n    <span class=\"addPreparation\" (click)=\"addPreparation()\">\n      <span class=\"fa fa-edit fa-1x\" ></span>\n      add preparation\n    </span>\n    <span class=\"addIngredient\" (click)=\"addIngredient()\">\n      <span class=\"fa fa-edit fa-1x\" ></span>\n      add ingredient\n    </span>\n    <!-- {{focussedWordPosition}} -->\n  </div>\n</div>\n"

/***/ }

},[1018]);
//# sourceMappingURL=main.bundle.map