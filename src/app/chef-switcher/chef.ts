export class Chef {
  color:string;
  name:string;
  attributes:string;
  variables:string[];
  isActive:boolean;

   constructor(name:string, color:string) {
     this.name=name;
     this.color=color;
   }

  setColor(color){
    this.color=color;
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
