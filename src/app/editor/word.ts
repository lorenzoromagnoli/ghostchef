export class Word {
  word: string;
  type: string;
  author: string;
  isEntity: boolean;

  constructor(word:string, author:string) {
    this.word = word;
    this.author = author;
  }
}
