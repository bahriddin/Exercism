class Gigasecond {
  constructor(private readonly current: Date) {}

  date() {
    return new Date(this.current.valueOf() + 10 ** 12);
  }
}

export default Gigasecond;
