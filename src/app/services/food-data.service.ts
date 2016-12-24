import {Injectable} from "@angular/core"
import {Http, Headers} from '@angular/http';
import 'rxjs/Rx'

@Injectable()
export class FoodDataService {
  http;
  data;
  allFood;
  wordAnalysis

  constructor(http: Http) {
    this.http = http;
  }

  getFood(val) {
    console.log(val)
    if (this.data) {
      return Promise.resolve(this.data);
    }
    return new Promise(resolve => {
      this.http.get('http://localhost:3000/api')
        .subscribe(data => {
          console.log("what I get from the server", data);
          this.data = data.results;
          resolve(this.data);
        });
    });
  }

  getAllFoods() {
    // console.log(val);
    if (this.allFood) {
      return Promise.resolve(this.allFood);
    }
    return new Promise(resolve => {
      this.http.get('http://localhost:3000/allfood')
        .subscribe(data => {
          console.log(data);
          this.data = data._body;
          resolve(this.data);
        });
    });
  }

  understandWords(sentence) {
    var parameter = JSON.stringify({ sentence: sentence });
    //console.log(parameter);

    var creds = "sentence=" + sentence;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return new Promise(resolve => {

      this.http.post('http://localhost:3000/understand?' + creds)
        .subscribe(data => {
          //  console.log(data._body);
          this.data = data._body;
          console.log(this.data);
          resolve(this.data);
        });
    });
  }

}
