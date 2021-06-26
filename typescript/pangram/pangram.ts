export default class Pangram {
  constructor(private readonly sentence: string) {
    this.sentence = this.sentence.toLowerCase();
  }

  isPangram() {
    return [..."abcdefghijklmnopqrstuvwxyz"].every((char: string) =>
      this.sentence.includes(char)
    );
  }
}
