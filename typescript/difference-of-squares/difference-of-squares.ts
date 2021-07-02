export default class Squares {
  public readonly squareOfSum: number;
  public readonly sumOfSquares: number;
  public readonly difference: number;

  constructor(private readonly n: number) {
    this.squareOfSum = (n ** 2 * (n + 1) ** 2) / 4;
    this.sumOfSquares = (n * (n + 1) * (2 * n + 1)) / 6;
    this.difference = this.squareOfSum - this.sumOfSquares;
  }
}
