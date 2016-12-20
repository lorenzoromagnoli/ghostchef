export class Word {
  word: string;
  type: string;
  author: string;
  isEntity: boolean;

  isAttribute: boolean;
  attributes:string[];

  constructor(word:string, author:string) {
    this.word = word;
    this.author = author;
  }
}
