const EARTH_SECONDS = 31557600;
const ORBITAL_PERIODS = {
  earth: 1,
  mercury: 0.2408467,
  venus: 0.61519726,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};

export default class SpaceAge {
  constructor(public seconds: number) {}

  onEarth = () =>
    this._roundTwoDigits(
      this.seconds / (ORBITAL_PERIODS.earth * EARTH_SECONDS)
    );

  onMercury = () =>
    this._roundTwoDigits(
      this.seconds / (ORBITAL_PERIODS.mercury * EARTH_SECONDS)
    );

  onVenus = () =>
    this._roundTwoDigits(
      this.seconds / (ORBITAL_PERIODS.venus * EARTH_SECONDS)
    );

  onMars = () =>
    this._roundTwoDigits(this.seconds / (ORBITAL_PERIODS.mars * EARTH_SECONDS));

  onJupiter = () =>
    this._roundTwoDigits(
      this.seconds / (ORBITAL_PERIODS.jupiter * EARTH_SECONDS)
    );

  onSaturn = () =>
    this._roundTwoDigits(
      this.seconds / (ORBITAL_PERIODS.saturn * EARTH_SECONDS)
    );

  onUranus = () =>
    this._roundTwoDigits(
      this.seconds / (ORBITAL_PERIODS.uranus * EARTH_SECONDS)
    );

  onNeptune = () =>
    this._roundTwoDigits(
      this.seconds / (ORBITAL_PERIODS.neptune * EARTH_SECONDS)
    );

  _roundTwoDigits = (num: number) => Math.round(num * 100) / 100;
}
