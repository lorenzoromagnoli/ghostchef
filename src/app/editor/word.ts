export class Word {
  word: string;
  type: string;

  dependencyEdge: number;
  dependencyType: string;

  author: string;
  isEntity: boolean;

  isAttribute: boolean;
  attributes:string[];

  hasConnections:boolean;
  connectsTo:number[]=[];

  constructor(word:string, author:string) {
    this.word = word;
    this.author = author;
  }
}
