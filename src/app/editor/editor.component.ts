import { Component, Input, OnInit } from '@angular/core';
import { Word } from './word';
import { FoodDataService } from '../services/food-data.service';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
  providers: [FoodDataService]
})


export class EditorComponent implements OnInit {

  constructor(private foodDataService: FoodDataService) {
    this.foodDataService = foodDataService;
  }

  // id = 1;
  text = '';

  placeholderWord = new Word("...", "human")
  // { 'word': '...', 'type': 'ingredient', 'author': 'user', 'isEntity':false };


  words: Word[] = [this.placeholderWord];
  focussedWordPosition = 0;

  nothingIsHappeningTimer;
  timetowait = 5000;
  isAiPaused = true;

  handleKeyEvent(event: any, value: any, index: number) {

    var word = event.target.innerText;
    var separatorPosition = window.getSelection().focusOffset;
    // console.log("word Index", index);
    // console.log("separator Position", window.getSelection());
    if (value == 'key') {
      this.focussedWordPosition = index;
      this.resetInterval();

    } else if (value == 'Space') {
      var wordToAdd = word.substring(0, separatorPosition).trim();
      var wordToStay = word.substring(separatorPosition, word.length).trim();
      if (wordToAdd == "") {
        wordToStay.prepend(" ");
      } else {
        //console.log(separatorPosition, wordToAdd, wordToStay);
        event.target.innerText = wordToStay;
        //  this.words.splice(index, 0, wordToAdd);
        this.addAWord(wordToAdd, "", "human", index);
      }

    } else if (value == 'Arrow Left') {
      if (separatorPosition == 0) {
        var previouesElement = event.target.parentElement.previousElementSibling.children[0];
        console.log(previouesElement);
        FocusOnElement(previouesElement);
      }
    } else if (value == 'Arrow Right') {
      if (separatorPosition == word.length) {
        var nextElement = event.target.parentElement.nextElementSibling.children[0];
        FocusOnElement(nextElement);
      }
    } else if (value == 'Click') {
      event.stopPropagation();
    } else if (value == 'BackSpace') {
    }
    else {
      //window.getSelection().removeAllRanges();
      event.preventDefault();
    }
    if (value == 'Blur') {

      console.log("blurred", word);
      if (word == "") {
        this.deleteWord(index)
      } else {
        this.words[index].word = word
      }
    }

  }


  resetInterval() {
    window.clearInterval(this.nothingHappeningTimer);
    if (!this.isAiPaused) {
      this.nothingHappeningTimer = window.setInterval(function() {
        console.log("restarted interval");
        this.getComputeraction()
      }.bind(this), this.timetowait);
    }
  }

  togglePause() {
    this.isAiPaused = !this.isAiPaused;
    if (this.isAiPaused) {
      window.clearInterval(this.nothingHappeningTimer);
    } else {
      this.resetInterval();
    }
  }

  getSentence() {
    var sentence = "";
    for (var i = 0; i < this.words.length; i++) {
      sentence += " " + this.words[i].word;
    }
    //  console.log("sentence to analyze",sentence);
    return (sentence);
  }

  getComputeraction() {
    if (this.isAiPaused) {

    } else {
      //try to understand the sentence
      this.understandSentence();
      this.addAWord("ingredient", "ingredient", "machine", getRandom(0, 3));
    }
  }

  understandSentence() {
    console.log("analyzing what you wrote...")

    console.log(this.getSentence());

    this.foodDataService.understandWords(this.getSentence()).then(data => {
      var response = JSON.parse(data.toString());
      //console.log("got data",response);

      //get all the entities from the response json
      var entities = [];
      console.log(response.entities);
      var entitiesType = Object.keys(response.entities);
      for (var i = 0; i < entitiesType.length; i++) {
        for (var j = 0; j < response.entities[entitiesType[i]].length; j++) {
          var entity = { 'name': response.entities[entitiesType[i]][j], 'type': entitiesType[i] }
          entities.push(entity);
        }
      }
      //reset all the info about entities and attributes in the text
      for (var j = 0; j < this.words.length; j++) {
        this.words[j].isEntity = false;
        this.words[j].isAttribute=false;
        this.words[j].attributes=[];
      }
      //add tag of entities to the words in the array
      for (var i = 0; i < entities.length; i++) {
        for (var j = 0; j < this.words.length; j++) {
          if (this.words[j].word.trim() == entities[i].name.trim()) {
            //console.log(entities[i].name);
            this.words[j].isEntity = true;
          }
        }
      }

      //get all the entities from the response json
      //var tokens = [];
      //console.log(response.tokens);
      for(var i=0; i<response.tokens.length; i++){
      //  console.log(response.tokens[i].dependencyEdge.label);
        if (response.tokens[i].dependencyEdge.label=="AMOD"||response.tokens[i].dependencyEdge.label=="ATTR"){
          this.words[response.tokens[i].dependencyEdge.headTokenIndex].attributes.push(response.tokens[i].text);
          this.words[i].isAttribute=true;
      //    console.log(this.words[i].word , this.words[response.tokens[i].dependencyEdge.headTokenIndex]);
          //console.log(this.words[response.tokens[i].dependencyEdge.headTokenIndex].attributes);
        }
        console.log(this.words[i]);
      }
    });
  }


  addAWord(word, type, author, index) {
    var w = new Word(word, author);
    this.words.splice(index, 0, w);
  }
  deleteWord(index) {
    this.words.splice(index, 1);
  }


  ngOnInit() {
    console.log("started");
    this.foodDataService.getAllFoods().then(data => {
      console.log("got data", data);
    });

  }

  getFoodbyName() {
    this.foodDataService.getFood("zucchini").then(data => {
      console.log("got data", data);
    });
  }

  nothingHappeningTimer = window.setInterval(this.getComputeraction.bind(this), this.timetowait);

}


var getRandom = function(a, b) {
  var randomNumber = Math.round(Math.random() * (b - a)) - a;
  return (randomNumber);
}

var FocusOnElement = function(element: any) {
  if (element == null) {
    window.getSelection().removeAllRanges();
  } else {
    window.getSelection().removeAllRanges();
    var s = window.getSelection();
    var r = document.createRange();
    r.setStart(element, 0);
    r.setEnd(element, 0);
    s.removeAllRanges();
    s.addRange(r);
  }
};
