import { Component, Input } from '@angular/core';
import { Word } from './word';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})


export class EditorComponent {

  constructor() {
  }
  // id = 1;
  text = '';
  words: Word[] = [];
  focussedWordPosition = 0;

  nothingIsHappeningTimer;
  timetowait = 3000;

  handleKeyEvent(event: any, value: any, index: number) {

    var word = event.target.innerText;
    var separatorPosition = window.getSelection().focusOffset;
    console.log("word Index", index);
    console.log("separator Position", window.getSelection());

    if (value == 'key') {
      this.focussedWordPosition = index;
      this.resetInterval();

    } else if (value == 'Space') {
      var wordToAdd = word.substring(0, separatorPosition).trim();
      var wordToStay = word.substring(separatorPosition, word.length).trim();
      if (wordToAdd == "") {
        wordToStay.prepend(" ");
      } else {
        console.log(separatorPosition, wordToAdd, wordToStay);
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
    } else {
      //window.getSelection().removeAllRanges();
      event.preventDefault();
    }
  }


  resetInterval() {
    window.clearInterval(this.nothingHappeningTimer);
    this.nothingHappeningTimer = window.setInterval(function() {
      console.log("restarted interval");
      this.getComputeraction()
    }.bind(this), this.timetowait);
  }

  getComputeraction() {
    this.addAWord("ingredient", "ingredient", "machine", getRandom(0, 3));
    console.log("something you should repeat");
  }

  addAWord(word, type, author, index) {
    var w = { 'word': word, 'type': 'ingredient', author: author };
    this.words.splice(index, 0, w);
  }

  ngOnInit() {
    console.log("started");
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
