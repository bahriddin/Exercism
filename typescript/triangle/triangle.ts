enum triangleKind {
  EQUILATERAL = "equilateral",
  ISOSCELES = "isosceles",
  SCALENE = "scalene",
}

export default class Triangle {
  sides: number[];

  constructor(...sides: number[]) {
    this.sides = sides;
  }

  kind() {
    this._throwIfNotValid();

    let kind = triangleKind.SCALENE;
    if (this.sides[0] === this.sides[1] && this.sides[1] === this.sides[2]) {
      kind = triangleKind.EQUILATERAL;
    } else if (
      this.sides[0] === this.sides[1] ||
      this.sides[1] === this.sides[2] ||
      this.sides[0] === this.sides[2]
    ) {
      kind = triangleKind.ISOSCELES;
    }

    return kind;
  }

  _throwIfNotValid() {
    if (!(this.sides.length === 3)) {
      throw new Error("Triangle must have 3 sides");
    }

    if (this.sides.some((side) => side <= 0)) {
      throw new Error("Triangle sides must be greater than 0");
    }

    this.sides.sort((a, b) => a - b);

    if (this.sides[2] >= this.sides[1] + this.sides[0]) {
      throw new Error("Triangle sides must be valid");
    }

    return true;
  }
}
