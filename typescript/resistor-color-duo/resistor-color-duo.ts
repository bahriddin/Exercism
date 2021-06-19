const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];

export class ResistorColor {
  constructor(private colors: string[]) {
    if (colors.length < 2) {
      throw new Error("At least two colors need to be present");
    }
  }

  value = (): number =>
    10 * this._colorToNumber(this.colors[0]) +
    this._colorToNumber(this.colors[1]);

  _colorToNumber = (color: string): number => {
    return COLORS.indexOf(color);
  };
}
