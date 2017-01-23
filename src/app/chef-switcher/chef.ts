export class Chef {
  color:string;
  name:string;
  nation:string;
  attributes:string;
  variables=[];
  isActive:boolean;
  style;

   constructor(name:string, color:string, nation:string) {
     this.name=name;
     this.color=color;
     this.nation=nation;
   }

   addVariable(key, value){
     var v={'key':key,'value':value};
     this.variables.push(v);
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
