class CollatzConjecture {
  static steps(n: number): number {
    if (n <= 0) {
      throw new Error("Only positive numbers are allowed");
    }

    if (n === 1) {
      return 0;
    }
    if (n % 2 === 0) {
      return 1 + this.steps(n / 2);
    }
    return 1 + this.steps(3 * n + 1);
  }
}

export default CollatzConjecture;
