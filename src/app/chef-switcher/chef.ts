export class Chef {

  name:string;
  attributes:string;
  variables:string[];
  isActive:boolean;

  constructor(name:string) {
    this.name=name;
  }

  activate(){
    this.isActive=true;
    console.log("this.name")
  }
  disable(){
    this.isActive=false;
  }

  toggleActive(){
    this.isActive=!this.isActive;
  }
}
