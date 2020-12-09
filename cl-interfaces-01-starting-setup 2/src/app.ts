interface Grretable {
  name: string;

  greet(phrase: string): void;
}

class Person implements Grretable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + '' + this.name);
  }
}

const user1: Grretable = new Person('Saidbek');
console.log(user1);
