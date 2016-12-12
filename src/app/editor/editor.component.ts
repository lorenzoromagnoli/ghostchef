import { Component } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent {

  constructor() {
  }

  id = 1;
  text = '';
  words = ["you", "can", "start"];
  focussedWordPosition = 0;

  handleKeyEvent(event: any, value: any, index: number) {

    var word = event.target.innerText;
    var separatorPosition = window.getSelection().focusOffset;
    console.log("word Index",index);
    console.log("separator Position",window.getSelection());

    if (value == 'key') {
      this.focussedWordPosition = index;
    } else if (value == 'Space') {
      var wordToAdd = word.substring(0, separatorPosition).trim();
      var wordToStay = word.substring(separatorPosition, word.length).trim();
      if (wordToAdd==""){
        wordToStay.prepend(" ");
      }else{
        console.log(separatorPosition, wordToAdd, wordToStay);
        event.target.innerText = wordToStay;
        this.words.splice(index, 0, wordToAdd);
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



  ngOnInit() {
    console.log("started");
  }

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
