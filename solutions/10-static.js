export default class Time {
  // BEGIN
  static fromString(time) {
    const hour = time.split(':')[0];
    const min = time.split(':')[1];
    return new Time(hour, min)
  }
  // END

  constructor(hours, minutes) {
    this.minutes = minutes;
    this.hours = hours;
  }

  toString() {
    return `${this.hours}:${this.minutes}`;
  }
}
