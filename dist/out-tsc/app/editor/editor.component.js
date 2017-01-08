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
import { Word } from './word';
import { FoodDataService } from '../services/food-data.service';
var EditorComponent = (function () {
    function EditorComponent(foodDataService) {
        this.foodDataService = foodDataService;
        this.text = '';
        this.placeholderWord = new Word("...", "human");
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
                event.target.innerText = wordToStay;
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
        return (sentence);
    };
    EditorComponent.prototype.getComputeraction = function () {
        if (this.isAiPaused) {
        }
        else {
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
            var entities = [];
            console.log(response.entities);
            var entitiesType = Object.keys(response.entities);
            for (var i = 0; i < entitiesType.length; i++) {
                for (var j = 0; j < response.entities[entitiesType[i]].length; j++) {
                    var entity = { 'name': response.entities[entitiesType[i]][j], 'type': entitiesType[i] };
                    entities.push(entity);
                }
            }
            for (var j = 0; j < _this.words.length; j++) {
                _this.words[j].isEntity = false;
                _this.words[j].isAttribute = false;
                _this.words[j].hasConnections = false;
                _this.words[j].connectsTo = [];
                _this.words[j].attributes = [];
            }
            for (var i = 0; i < entities.length; i++) {
                for (var j = 0; j < _this.words.length; j++) {
                    if (_this.words[j].word.trim() == entities[i].name.trim()) {
                        _this.words[j].isEntity = true;
                    }
                }
            }
            for (var i = 0; i < response.tokens.length; i++) {
                _this.words[i].type = response.tokens[i].dependencyEdge.label;
                _this.words[i].dependencyEdge = response.tokens[i].dependencyEdge.headTokenIndex;
                _this.words[i].dependencyType = response.tokens[i].dependencyEdge.label;
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
                                _this.words[indexOfTheEntityConnectedToTheProposition].connectsTo.push(j);
                            }
                        }
                    }
                }
                else if (response.tokens[i].dependencyEdge.label == "CONJ") {
                    var isTheWordRoot = true;
                    var arrayOfWords = [];
                    var analyzingWord = response.tokens[i].dependencyEdge.headTokenIndex;
                    while (arrayOfWords.indexOf(analyzingWord) == -1) {
                        if (response.tokens[analyzingWord].dependencyEdge.label == "POBJ" || response.tokens[j].dependencyEdge.label == "APPOS") {
                            var prepIndex = response.tokens[analyzingWord].dependencyEdge.headTokenIndex;
                            var rootIndex = response.tokens[prepIndex].dependencyEdge.headTokenIndex;
                            _this.words[rootIndex].hasConnections = true;
                            _this.words[rootIndex].connectsTo.push(i);
                            isTheWordRoot = false;
                        }
                        else {
                            analyzingWord = response.tokens[analyzingWord].dependencyEdge.headTokenIndex;
                        }
                        arrayOfWords.push(analyzingWord);
                    }
                    if (isTheWordRoot) {
                        _this.words[analyzingWord].hasConnections = true;
                        _this.words[analyzingWord].connectsTo.push(i);
                    }
                }
            }
            console.log(_this.words);
        });
    };
    EditorComponent.prototype.addAWord = function (word, type, author, index) {
        var w = new Word(word, author);
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
                    entitiesArray.push(i);
                    console.log("got it");
                }
                else {
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
        var prep = new Word(preparation, "machine");
        this.words.splice(indexOfEntityToModify, 0, prep);
    };
    EditorComponent.prototype.addIngredientToIndex = function (indexOfEntityToModify) {
        var ingredient = this.words[indexOfEntityToModify].word;
        var possibleIngredients = this.foodData.ingredients[ingredient].match;
        var match = possibleIngredients[getRandom(0, possibleIngredients.length)].name;
        var matchingIngredient = new Word(match, "machine");
        if (this.words[indexOfEntityToModify].hasConnections) {
            var comma = new Word(",", "");
            this.words.splice(indexOfEntityToModify + 1, 0, comma, matchingIngredient);
        }
        else {
            var and = new Word("and", "");
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
    return EditorComponent;
}());
EditorComponent = __decorate([
    Component({
        selector: 'app-editor',
        templateUrl: './editor.component.html',
        styleUrls: ['./editor.component.scss'],
        providers: [FoodDataService]
    }),
    __metadata("design:paramtypes", [FoodDataService])
], EditorComponent);
export { EditorComponent };
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
//# sourceMappingURL=../../../../src/app/editor/editor.component.js.map