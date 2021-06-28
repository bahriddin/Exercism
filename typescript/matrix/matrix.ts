class Matrix {
  public readonly rows: number[][];
  public readonly columns: number[][];

  constructor(sequence: string) {
    this.rows = sequence
      .split("\n")
      .map((row) => row.split(" ").map((el) => parseInt(el)));

    this.columns = this.rows[0].map((_, columnIndex) =>
      this.rows.map((row) => row[columnIndex])
    );
  }
}

export default Matrix;
