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
] as const;

export class ResistorColor {
  constructor(private colors: typeof COLORS[number][]) {
    if (colors.length < 2) {
      throw new Error("At least two colors need to be present");
    }
  }

  value = (): number =>
    10 * COLORS.indexOf(this.colors[0]) + COLORS.indexOf(this.colors[1]);
}
