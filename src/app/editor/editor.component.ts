import { Component,
  Input,
  OnInit,
  ViewChild,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';
import { Word } from './word';
import { Chef } from '../chef-switcher/chef';
import { FoodDataService } from '../services/food-data.service';
import { SideSliderComponent }  from '../side-slider/side-slider.component';



@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  providers: [FoodDataService],

  animations: [
    trigger('collapsedChanged', [
      state('true', style({ width: '70%'})),
      state('false', style({ width: '100%'})),
      transition('* => *', animate('300ms')),
    ])
  ]
})


export class EditorComponent implements OnInit {



  constructor(private foodDataService: FoodDataService) {
    this.foodDataService = foodDataService;
  }


  mode="learning";

  setMode(newMode){
    this.mode=newMode;
    console.log(newMode);
  }

  author; //whos' the author?
  humanAuthor=new Chef("human", "white", "🇩🇰");

  setAuthorToHuman(){
    this.author=this.humanAuthor;
  }

  @ViewChild(SideSliderComponent)
  private sliderComponent: SideSliderComponent;

  @Input() isCollapsed : boolean = false;

  text = '';
  fullWidth = false;
  placeholderWord = new Word("what should we eat?", "human")
  // { 'word': '...', 'type': 'ingredient', 'author': 'user', 'isEntity':false };


//all the code for the animation of the recording button.
  recording=true;
  recordingAnimationStatus=false;
  recordingTimer= window.setInterval(this.toggleRecordingAnimation.bind(this), 1000);
  toggleRecording(){
    this.recording=!this.recording;

    if (this.recording){
      window.clearInterval(this.recordingTimer);
      this.recordingTimer= window.setInterval(this.toggleRecordingAnimation.bind(this), 1000);
    }else{
      window.clearInterval(this.recordingTimer);
    }
  }
  toggleRecordingAnimation(){
    this.recordingAnimationStatus=!this.recordingAnimationStatus;
  }


 //I'm receiving an event from the chef switcher component
  onChefNotify(chef):void {
     console.log(chef);

     console.log(this.author);

     if (this.isCollapsed){
       this.toggleSlider();
     }
       this.sliderComponent.setChef(chef);
       this.author=chef;

       this.toggleSlider();
   }



  foodData;

  words: Word[] = [this.placeholderWord];
  focussedWordPosition = 0;

  nothingHappeningTimer = window.setInterval(this.getComputeraction.bind(this), this.timetowait);
  timetowait = 5000;
  isAiPaused = true;

  higlightedWord = -1;
  wordsRelatedToHighlighted = [];


  toggleSlider(){
    this.isCollapsed = !this.isCollapsed;
    this.sliderComponent.togglevisible();
  }




  mouseOver(event: any, index: number) {
    this.higlightedWord = index;
    this.wordsRelatedToHighlighted = this.words[index].connectsTo;
  }
  mouseLeave(event: any, index: number) {
    this.higlightedWord = -1;
    this.wordsRelatedToHighlighted = [];
  }



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
        this.addAWord(wordToAdd, "", this.author, index);
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
      this.words[index].author=this.author;
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
      //this.understandSentence();
      //this.addAWord("ingredient", "ingredient", this.author, getRandom(0, 3));
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
        this.words[j].isAttribute = false;
        this.words[j].hasConnections = false;
        this.words[j].connectsTo = [];
        this.words[j].attributes = [];
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
      for (var i = 0; i < response.tokens.length; i++) {
        this.words[i].type = response.tokens[i].dependencyEdge.label;
        this.words[i].dependencyEdge = response.tokens[i].dependencyEdge.headTokenIndex;
        this.words[i].dependencyType = response.tokens[i].dependencyEdge.label;

        // #################
        // ###___#####___###
        // ######  _|#######
        // ###__######__####
        // #####-----#######

        //this method of parsing relation is very unefficient consider restructuring looking for Pobject relation first and then look in to the tree of relations. @Simo, maybe you can take care of this.
        // #################

        //console.log(response.tokens[i].dependencyEdge.label);
        if (response.tokens[i].dependencyEdge.label == "AMOD" || response.tokens[i].dependencyEdge.label == "ATTR") {
          this.words[response.tokens[i].dependencyEdge.headTokenIndex].attributes.push(response.tokens[i].text);
          this.words[i].isAttribute = true;
          //console.log(this.words[i].word , this.words[response.tokens[i].dependencyEdge.headTokenIndex]);
          //console.log(this.words[response.tokens[i].dependencyEdge.headTokenIndex].attributes);
        } else if (response.tokens[i].dependencyEdge.label == "PREP") { //if we find a preposition (probably if is "with")
          for (var j = 0; j < response.tokens.length; j++) {
            if (response.tokens[j].dependencyEdge.label == "POBJ") { //if the word is pobject
              if (response.tokens[j].dependencyEdge.headTokenIndex == i) { //if the Pobj is related to the prep we are analyzinf

                var indexOfTheEntityConnectedToTheProposition = response.tokens[i].dependencyEdge.headTokenIndex;
                this.words[indexOfTheEntityConnectedToTheProposition].hasConnections = true;
                this.words[indexOfTheEntityConnectedToTheProposition].connectsTo.push(j); //add the index of the pobject to the list of things that connect to the entity
              }
            }
          }
        } else if (response.tokens[i].dependencyEdge.label == "CONJ") { //I found a word that is conjucted to something else
          var isTheWordRoot = true;
          var arrayOfWords = [];//add every word I check to the array
          var analyzingWord = response.tokens[i].dependencyEdge.headTokenIndex;

          while (arrayOfWords.indexOf(analyzingWord) == -1) {//I loop in the hierarchy chain until I go twice on the same path
            if (response.tokens[analyzingWord].dependencyEdge.label == "POBJ" || response.tokens[j].dependencyEdge.label == "APPOS") { //if I find the object of a preposition

              var prepIndex = response.tokens[analyzingWord].dependencyEdge.headTokenIndex;
              var rootIndex = response.tokens[prepIndex].dependencyEdge.headTokenIndex;

              this.words[rootIndex].hasConnections = true;
              this.words[rootIndex].connectsTo.push(i); //add the index of the pobject to
              isTheWordRoot = false;
            } else {
              analyzingWord = response.tokens[analyzingWord].dependencyEdge.headTokenIndex //I move to the next step of the chain
            }
            arrayOfWords.push(analyzingWord); //add the index of the element I searched to the array
          }
          if (isTheWordRoot) {
            this.words[analyzingWord].hasConnections = true;
            this.words[analyzingWord].connectsTo.push(i); //add the index of the pobject to the list of things that connect to
          }
        }
      }
      console.log(this.words);
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
    this.addChef();
    this.setAuthorToHuman();
  }

  addChef() {
    this.foodDataService.getAllFoods().then(data => {
      console.log("got data", data);
       this.foodData = JSON.parse(data);
    });
  }

  getFoodbyName() {
    this.foodDataService.getFood("zucchini").then(data => {
      console.log("got data", data);
    });
  }



  searchEntities() { //return the position of entities in the sentence as array
    var entitiesArray = [];
    console.log(this.foodData);
    for (var i = 0; i < this.words.length; i++) {
      if (this.words[i].isEntity) {
        if (this.foodData.ingredients[this.words[i].word] != null) {
          //the ingredient exist in the db
          entitiesArray.push(i);
          console.log("got it");
        } else {
          //I don't know the food
          console.log("noFoodFoundInDB");
        }
      }
    }
    console.log(entitiesArray);
    return (entitiesArray);
  }

  addPreparationToIndex(indexOfEntityToModify) { //add a new word with preparations before the etity
    var ingredient = this.words[indexOfEntityToModify].word;
    var possiblePreparations = this.foodData.ingredients[ingredient].preparations
    var preparation = possiblePreparations[getRandom(0, possiblePreparations.length)]
    var prep = new Word(preparation, "machine");
    this.words.splice(indexOfEntityToModify, 0, prep);
  }
  addIngredientToIndex(indexOfEntityToModify) { //add a new word with preparations before the etity
    var ingredient = this.words[indexOfEntityToModify].word;
    var possibleIngredients = this.foodData.ingredients[ingredient].match
    var match = possibleIngredients[getRandom(0, possibleIngredients.length)].name
    var matchingIngredient = new Word(match, "machine");


    if (this.words[indexOfEntityToModify].hasConnections) { //this means there are already ingredients addedd to it
      var comma = new Word(",", "");
      this.words.splice(indexOfEntityToModify + 1, 0, comma, matchingIngredient);
    } else { //just add an end and a word after it
      var and = new Word("and", "");
      this.words.splice(indexOfEntityToModify + 1, 0, and, matchingIngredient);
    }
  }


  addPreparation() {
    var ent = this.searchEntities();
    console.log(ent);
    for (var i = 0; i < ent.length; i++) {
      this.addPreparationToIndex(ent[i])
    }
  }

  lookForConjunctions() {

  }

  addIngredient() {
    var ent = this.searchEntities();
    console.log(ent);
    for (var i = 0; i < ent.length; i++) {
      this.addIngredientToIndex(ent[i])
    }
  }
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
