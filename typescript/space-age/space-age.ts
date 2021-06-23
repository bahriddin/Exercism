enum Planets {
  Earth = 31_557_600,
  Mercury = 0.2408467 * Earth,
  Venus = 0.61519726 * Earth,
  Mars = 1.8808158 * Earth,
  Jupiter = 11.862615 * Earth,
  Saturn = 29.447498 * Earth,
  Uranus = 84.016846 * Earth,
  Neptune = 164.79132 * Earth,
}

export default class SpaceAge {
  [key: string]: any;

  constructor(public readonly seconds: number) {
    for (const planet in Planets) {
      this[`on${planet}`] = () => this._calculate(<any>Planets[planet]);
    }
  }

  _calculate = (planet_year_seconds: Planets): number =>
    Math.round((this.seconds / planet_year_seconds) * 100) / 100;
}
