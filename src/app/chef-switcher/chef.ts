export class Chef {
  color:string;
  name:string;
  nation:string;
  attributes:string;
  variables:string[];
  isActive:boolean;

   constructor(name:string, color:string, nation:string) {
     this.name=name;
     this.color=color;
     this.nation=nation;
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
