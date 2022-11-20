export default class User {
  constructor(public id: string, public name: string) {}

  goto(location: string) {
    console.log(`${this.name}前往${location}`);
  }

  sleep(time: string) {
    console.log(`${this.name}在${time}睡著了`);
  }
}
