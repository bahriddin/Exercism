export default class Pangram {
  private letters = Object.fromEntries(
    [..."abcdefghijklmnopqrstuvwxyz"].map((letter: string) => [letter, false])
  );

  constructor(private readonly sentence: string) {
    [...this.sentence.toLocaleLowerCase()].forEach((char: string) => {
      if (char in this.letters) {
        this.letters[char] = true;
      }
    });
  }

  isPangram() {
    return Object.values(this.letters).reduce(
      (prev, curr) => prev && curr,
      true
    );
  }
}
