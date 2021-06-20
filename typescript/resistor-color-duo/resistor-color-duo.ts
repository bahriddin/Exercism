const COLOR_VALUES = [
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
] as const;

type ColorType = typeof COLOR_VALUES[number];

export class ResistorColor {
  constructor(private colors: ColorType[]) {
    if (colors.length < 2) {
      throw new Error("At least two colors need to be present");
    }
  }

  value = (): number =>
    10 * COLOR_VALUES.indexOf(this.colors[0]) +
    COLOR_VALUES.indexOf(this.colors[1]);
}
